import React from 'react'
import NavBar from './navbar'

function Layout({children}) {

  const layoutContainer = {
    with: '90%',
    margin: '30px auto',
  };

  return (
    <div >
        <NavBar />
        <div style={layoutContainer}>{children}</div>
    </div>
  )
}

export default Layout