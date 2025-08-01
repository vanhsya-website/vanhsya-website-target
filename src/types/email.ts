// Types for SendGrid email service
export interface SendEmailRequest {
  name: string
  email: string
  message: string
  subject?: string
}

export interface SendEmailResponse {
  success: boolean
  message: string
  messageId?: string
}

export interface SendGridResponse {
  statusCode: number
  headers: {
    'x-message-id'?: string
    [key: string]: string | undefined
  }
}

export interface SendGridError {
  code?: number
  message?: string
  response?: {
    body?: {
      errors?: Array<{
        message: string
        field?: string
        help?: string
      }>
    }
  }
}
