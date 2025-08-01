'use client'

import { useState } from 'react'

import type { SendEmailRequest, SendEmailResponse } from '@/types/email'

interface UseEmailSendState {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  error: string | null
  messageId: string | null
}

interface UseEmailSendReturn extends UseEmailSendState {
  sendEmail: (data: SendEmailRequest) => Promise<boolean>
  reset: () => void
}

export function useEmailSend(): UseEmailSendReturn {
  const [state, setState] = useState<UseEmailSendState>({
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
    messageId: null
  })

  const sendEmail = async (data: SendEmailRequest): Promise<boolean> => {
    // Reset state
    setState({
      isLoading: true,
      isSuccess: false,
      isError: false,
      error: null,
      messageId: null
    })

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result: SendEmailResponse = await response.json()

      if (result.success) {
        setState({
          isLoading: false,
          isSuccess: true,
          isError: false,
          error: null,
          messageId: result.messageId || null
        })
        return true
      } else {
        setState({
          isLoading: false,
          isSuccess: false,
          isError: true,
          error: result.message,
          messageId: null
        })
        return false
      }
    } catch {
      setState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: 'Network error. Please check your connection and try again.',
        messageId: null
      })
      return false
    }
  }

  const reset = () => {
    setState({
      isLoading: false,
      isSuccess: false,
      isError: false,
      error: null,
      messageId: null
    })
  }

  return {
    ...state,
    sendEmail,
    reset
  }
}

// Usage example:
/*
function ContactForm() {
  const { sendEmail, isLoading, isSuccess, isError, error, reset } = useEmailSend()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const success = await sendEmail({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello from the contact form!',
      subject: 'Contact Form Submission'
    })

    if (success) {
      // Email sent successfully
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send Email'}
      </button>
      {isSuccess && <p>Email sent successfully!</p>}
      {isError && <p>Error: {error}</p>}
    </form>
  )
}
*/
