import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {

    const navContainer = {
        display: 'flex',
        justifyContent: 'center',
        gap: '4px',
        padding: '8px',
        backgroundColor: '#181d27',
    };
    const linkStyle = {
        display: 'block',
        padding: '8px 12px',
        fontSize: '15px',
        textDecoration: 'none',
        color: '#fff',
    };


  return (
    <div style={navContainer} >
        <Link to='/' style={linkStyle} >Home</Link>
        <Link to='/create' style={linkStyle} >Create</Link>
    </div>
  )
};

export default NavBar;