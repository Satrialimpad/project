// Base API configuration and helpers
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

export class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message)
    this.name = 'APIError'
  }
}

export async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new APIError(
      response.status,
      `API Error: ${response.status} ${response.statusText}`
    )
  }

  return response.json()
}