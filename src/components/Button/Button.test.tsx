import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Button from './Button'

describe('Button', () => {
  it('renders', () => {
    render(<Button variant="primary" />)
    expect(screen.getByRole('button')).toBeDefined()
  })
})
