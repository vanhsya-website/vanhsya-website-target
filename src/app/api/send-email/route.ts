import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Configure for static export compatibility
export const dynamic = 'force-static';

// Configure SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5 // Maximum 5 emails per 15 minutes per IP

  const current = rateLimitStore.get(ip)
  
  if (!current || now > current.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (current.count >= maxRequests) {
    return false
  }
  
  current.count++
  return true
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove < and > characters
    .trim()
    .substring(0, 1000) // Limit length
}

interface EmailRequest {
  name: string
  email: string
  message: string
  subject?: string
}

interface EmailResponse {
  success: boolean
  message: string
  messageId?: string
}

export async function POST(request: NextRequest): Promise<NextResponse<EmailResponse>> {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Rate limit exceeded. Please try again later.'
        },
        { status: 429 }
      )
    }

    // Validate environment variables
    if (!process.env.SENDGRID_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email service not configured. Please try again later.'
        },
        { status: 500 }
      )
    }

    // Parse and validate request body
    let body: EmailRequest
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid request format. Please check your data and try again.'
        },
        { status: 400 }
      )
    }

    // Validate required fields
    const { name, email, message, subject } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required fields. Name, email, and message are required.'
        },
        { status: 400 }
      )
    }

    // Validate field lengths
    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name must be between 2 and 100 characters.'
        },
        { status: 400 }
      )
    }

    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          message: 'Message must be between 10 and 5000 characters.'
        },
        { status: 400 }
      )
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please provide a valid email address.'
        },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = sanitizeInput(email)
    const sanitizedMessage = sanitizeInput(message)
    const sanitizedSubject = subject ? sanitizeInput(subject) : 'New Contact Form Submission'

    // Prepare email content
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'noreply@vanhsya.com'
    const toEmail = process.env.SENDGRID_TO_EMAIL || 'support@vanhsya.com'

    const msg = {
      to: toEmail,
      from: {
        email: fromEmail,
        name: 'VANHSYA Contact Form'
      },
      replyTo: {
        email: sanitizedEmail,
        name: sanitizedName
      },
      subject: `${sanitizedSubject} - From ${sanitizedName}`,
      text: `
New contact form submission from VANHSYA website:

Name: ${sanitizedName}
Email: ${sanitizedEmail}
Subject: ${sanitizedSubject}

Message:
${sanitizedMessage}

---
Sent from VANHSYA Contact Form
Time: ${new Date().toISOString()}
IP: ${ip}
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">From VANHSYA Website</p>
  </div>
  
  <div style="background: white; padding: 30px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 10px 10px;">
    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <h2 style="color: #495057; margin: 0 0 15px 0; font-size: 20px;">Contact Information</h2>
      <p style="margin: 5px 0;"><strong>Name:</strong> ${sanitizedName}</p>
      <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${sanitizedEmail}" style="color: #667eea;">${sanitizedEmail}</a></p>
      <p style="margin: 5px 0;"><strong>Subject:</strong> ${sanitizedSubject}</p>
    </div>
    
    <div style="margin-bottom: 20px;">
      <h2 style="color: #495057; margin: 0 0 15px 0; font-size: 20px;">Message</h2>
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
        <p style="margin: 0; white-space: pre-wrap;">${sanitizedMessage}</p>
      </div>
    </div>
    
    <div style="background: #e9ecef; padding: 15px; border-radius: 8px; font-size: 12px; color: #6c757d;">
      <p style="margin: 0;"><strong>Submission Details:</strong></p>
      <p style="margin: 5px 0;">Time: ${new Date().toLocaleString()}</p>
      <p style="margin: 5px 0;">IP Address: ${ip}</p>
      <p style="margin: 5px 0;">Source: VANHSYA Contact Form</p>
    </div>
  </div>
  
  <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #6c757d;">
    <p>This email was sent from the VANHSYA website contact form.</p>
  </div>
</body>
</html>
      `.trim()
    }

    // Send email via SendGrid
    let response
    try {
      response = await sgMail.send(msg)
    } catch (error: unknown) {
      const sendgridError = error as { code?: number; message?: string }
      
      // Handle specific SendGrid errors
      if (sendgridError.code === 401) {
        return NextResponse.json(
          {
            success: false,
            message: 'Email service authentication failed. Please try again later.'
          },
          { status: 500 }
        )
      }
      
      if (sendgridError.code === 403) {
        return NextResponse.json(
          {
            success: false,
            message: 'Email service access denied. Please try again later.'
          },
          { status: 500 }
        )
      }
      
      if (sendgridError.code && sendgridError.code >= 400 && sendgridError.code < 500) {
        return NextResponse.json(
          {
            success: false,
            message: 'Invalid email data. Please check your information and try again.'
          },
          { status: 400 }
        )
      }
      
      // Generic error for server issues
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to send email. Please try again later or contact us directly.'
        },
        { status: 500 }
      )
    }

    // Extract message ID from response
    const messageId = response[0].headers['x-message-id'] || 'unknown'

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully! We will get back to you soon.',
        messageId
      },
      { status: 200 }
    )

  } catch {
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again later.'
      },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    {
      success: false,
      message: 'Method not allowed. Use POST to send emails.'
    },
    { status: 405 }
  )
}

export async function PUT(): Promise<NextResponse> {
  return NextResponse.json(
    {
      success: false,
      message: 'Method not allowed. Use POST to send emails.'
    },
    { status: 405 }
  )
}

export async function DELETE(): Promise<NextResponse> {
  return NextResponse.json(
    {
      success: false,
      message: 'Method not allowed. Use POST to send emails.'
    },
    { status: 405 }
  )
}
