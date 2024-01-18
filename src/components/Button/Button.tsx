import type { PropsWithChildren } from 'react'

import styles from './Button.module.css'

export function Button({ children, variant = 'primary' }: PropsWithChildren<{ variant: 'primary' | 'secondary' }>) {
  return (
    <button type="button" className={styles[variant]}>
      {children}
    </button>
  )
}
