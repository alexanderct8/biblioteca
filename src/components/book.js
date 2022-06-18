import React from 'react';
import { Link } from 'react-router-dom';


function Book({item}) {

    const bookStyle = {
        with: '300',
        display: 'flex',
        flexDireccion: 'column'
    };
    const bookInfo = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        textDecoration: 'none',
    };


  return (
    <div style={bookStyle} >
        <Link to={`/view/${item.id}`} style={bookInfo} >
         <img src={item.cover} alt={item.title} width='200' />
         <div>{item.title}</div>
        </Link>
    </div>
  )
}

export default Book;