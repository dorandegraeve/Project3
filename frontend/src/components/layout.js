import React from 'react'
import Navbar from './navbar'
import '../styles/style.scss'


const layout = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default layout