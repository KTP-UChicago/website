import React from 'react'
import NavBar from '../../navBar/NavBar'
import Footer from '../../footer/Footer'

function PageTemplate({page, children}: {page: string, children: React.ReactNode}) {
  return (
    <>
    <NavBar page={page}/>
    {children}
    <Footer/>
    </>
  )
}

export default PageTemplate