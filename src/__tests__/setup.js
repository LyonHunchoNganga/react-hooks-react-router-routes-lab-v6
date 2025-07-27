import '@testing-library/jest-dom'
import 'whatwg-fetch'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

afterEach(() => {
  cleanup()
})
