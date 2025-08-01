// Email API Test Utility
// Use this to test the SendGrid integration

interface TestEmailData {
  name: string
  email: string
  message: string
  subject?: string
}

export async function testEmailAPI(data: TestEmailData) {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()
    
    return {
      status: response.status,
      success: response.ok,
      data: result
    }
  } catch {
    return {
      status: 0,
      success: false,
      data: { 
        success: false, 
        message: 'Network error occurred' 
      }
    }
  }
}

// Test data example
export const testEmailData: TestEmailData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  message: 'This is a test message to verify SendGrid integration is working properly.',
  subject: 'SendGrid Integration Test'
}

// Usage example:
// import { testEmailAPI, testEmailData } from '@/utils/emailTest'
// 
// async function runTest() {
//   const result = await testEmailAPI(testEmailData)
//   console.log('Test result:', result)
// }
