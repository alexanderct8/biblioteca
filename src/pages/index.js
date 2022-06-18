import React from 'react';
import { useAppContext } from '../store/store';
import Layout from '../components/layout';
import Book from '../components/book';

function Index() {

  const store = useAppContext();

  const bookContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  }
  return (
    <Layout>
      <div style={bookContainer} >
      {store.items.map((item) => (<Book key={item.id} item={item} />))}
      </div>
    </Layout>
  )
}

export default Index;