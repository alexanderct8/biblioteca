import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout';
import { useAppContext } from '../store/store';

function View() {

  const [item, setItem] = useState(null);

  const params = useParams();

  const store = useAppContext ();

  useEffect (() => {
    const book = store.getItem(params.bookId);
    setItem (book);

  }, []);

  if(!item) {
    return <Layout>Elemento no encontrado</Layout>
  }

  const styleItems = {
    containers : {
      with: '700px',
      display: 'flex',
      gap: '18px',
      margin: '0 auto',
      color: '#fff',
    },
  };

  return (
    <Layout>
      <div style= {styleItems.containers}>
        <div>
          <div>{item?.cover? <img src={item?.cover} alt='' with='300' /> : ''}</div>
        </div>
        <div>
          <h2>{item?.title}</h2>
          <div>{item?.autor}</div>
          <div>{item?.intro}</div>
          <div>{item?.completed ? 'Leído' : 'Por terminar'}</div>
          <div>{item?.review}</div>
        </div>
      </div>
    </Layout>
  )
}

export default View;