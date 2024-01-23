import type { PropsWithChildren } from 'react'

// import styles from './Button.module.css'

export function Button({ children, variant = 'primary' }: PropsWithChildren<{ variant: 'primary' | 'secondary' }>) {
  return (
    // className={styles[variant]}
    <button type="button">{children}</button>
  )
}
