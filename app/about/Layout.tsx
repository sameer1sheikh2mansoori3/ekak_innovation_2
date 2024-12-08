import React, { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className='bg-red-300'>
      {children}
    </div>
  )
}

export default Layout
