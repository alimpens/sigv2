import React, { PropsWithChildren } from 'react'
import 'global-jsdom/register'
import { strictEqual } from 'node:assert'
import { test, describe, before } from 'node:test'
import { cleanup, render, screen } from '@testing-library/react'

import { Button } from '.'

describe('test', () => {
  before(() => {
    cleanup()
  })

  test('renders', () => {
    render(<Button variant="primary">Sam</Button>)

    const button = screen.getByRole('button')

    strictEqual(button.textContent, 'Sam')
  })
})
