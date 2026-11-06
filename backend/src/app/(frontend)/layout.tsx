import React from 'react'
import './styles.css'

export const metadata = {
  description: 'ClearFlow shared application backend.',
  title: 'ClearFlow Platform',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  )
}
