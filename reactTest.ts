import './global.jsdom.ts'
import test from 'node:test'
import { cleanup } from '@testing-library/react'
export { render } from '@testing-library/react'

export const reactTest = (name: any, fn: any) => {
  return test(name, () => {
    cleanup()
    return fn()
  })
}
