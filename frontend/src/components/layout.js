import React from 'react'
import Navbar from './navbar'
import './layout.scss'
const layout = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default layout