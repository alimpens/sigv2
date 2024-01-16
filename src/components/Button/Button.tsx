import { PropsWithChildren } from 'react'

import styles from './Button.module.css'

const Button = ({ children, variant = 'primary' }: PropsWithChildren<{ variant: 'primary' | 'secondary' }>) => (
  <button type="button" className={styles[variant]}>
    {children}
  </button>
)

export default Button
