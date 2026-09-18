'use server'

import { db } from '@/lib/db'
import { customers } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export type SignUpState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'firstName' | 'lastName' | 'email' | 'phone' | 'address', string>>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// Accepts digits, spaces, dashes, parentheses and an optional leading +
const PHONE_RE = /^\+?[\d\s().-]{7,}$/

export async function createCustomer(
  _prev: SignUpState,
  formData: FormData,
): Promise<SignUpState> {
  const firstName = String(formData.get('firstName') ?? '').trim()
  const lastName = String(formData.get('lastName') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim().toLowerCase()
  const phone = String(formData.get('phone') ?? '').trim()
  const address = String(formData.get('address') ?? '').trim()

  const errors: SignUpState['errors'] = {}
  if (!firstName) errors.firstName = 'First name is required.'
  if (!lastName) errors.lastName = 'Last name is required.'
  if (!email) errors.email = 'Email is required.'
  else if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.'
  if (!phone) errors.phone = 'Phone number is required.'
  else if (!PHONE_RE.test(phone)) errors.phone = 'Please enter a valid phone number.'
  if (!address) errors.address = 'Address is required.'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Please fix the highlighted fields.', errors }
  }

  try {
    const existing = await db
      .select({ id: customers.id })
      .from(customers)
      .where(eq(customers.email, email))
      .limit(1)

    if (existing.length > 0) {
      return {
        status: 'error',
        message: 'That email is already registered.',
        errors: { email: 'A customer with this email already exists.' },
      }
    }

    await db.insert(customers).values({ firstName, lastName, email, phone, address })

    return {
      status: 'success',
      message: `Welcome to LYPetal, ${firstName}! Your profile has been created.`,
    }
  } catch (error) {
    console.log('[v0] createCustomer error:', error)
    return {
      status: 'error',
      message: 'Something went wrong while saving your details. Please try again.',
    }
  }
}
