import type { PropsWithChildren } from 'react'

import styles from './Button.module.css'

export const Button = ({ children, variant = 'primary' }: PropsWithChildren<{ variant: 'primary' | 'secondary' }>) => (
  <button type="button" className={styles[variant]}>
    {children}
  </button>
)
