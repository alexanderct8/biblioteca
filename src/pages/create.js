import React, {  useState } from 'react'
import  { useAppContext }  from '../store/store';
import Layout from '../components/layout';
import { useNavigate } from 'react-router-dom';

function Create() {

    const [title, setTitle] = useState ('');
    const [autor, setAutor] = useState ('');
    const [cover, setCover] = useState ('');
    const [intro, setIntro] = useState ('');
    const [completed, setCompleted] = useState ('false');
    const [review, setReview] = useState ('');

    const store = useAppContext();

    const navigate = useNavigate();

    function handleChange (e) {
        /*const name = e.target.name;*/
        const value = e.target.value;

        switch(e.target.name) {
            case 'title':
                setTitle(value);
                break;
            case 'autor':
                setAutor(value);
                break;
            case 'cover':
                setCover(value);
                break;
            case 'intro':
                setIntro(value);
                break;
            case 'completd':
                setCompleted(e.target.checked);
                break;
            case 'review':
                setReview(value);
                break;

            default:
        };
    };

    function handleOnChangeFile (e) {
        const element = e.target;
        const file = element.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = function () {
            setCover(reader.result.toString());
        };
    }

    function handleSubmit (e) {
        e.preventDefault();

        const newBook = {
            id: crypto.randomUUID(),
            title: title,
            autor: autor,
            cover: cover,
            intro: intro,
            completed: completed,
            review: review
        };
        store.createItem(newBook);
        navigate('/');
    }

    const inputContainer = {
        formCotainer: {
            width: '400px',
            margin: '0 auto',
        },
        continer: {
           display: 'flex',
           flexDirection: 'column',
           gap: '4px',
           margin: '12px 0'
        },
        title: {
            fontSize: '14px',
            textAlign: 'left',
            color: '#fff',
        },
        input: {
            fontSize: '12px',
            borderRadius: '4px',
            padding: '12px',
            outline: 'none',
            border:'none',
        },
        button : {
            minWidth: '180px',
            fontSize: '16px',
            fontWeigth: 'bold',
            padding:'12px 17px',
            border: 'none',
            color: '#000',
            backgroundColor: '#d5488f',
            borderRadius: '4px',
        }
    }

  return (
    <Layout to='create'>
        <form onSubmit={handleSubmit} style={inputContainer.formCotainer} >
            <div style={inputContainer.continer}>
                <div style={inputContainer.title}>Titulo</div>
                <input type='text' name='title' onChange={handleChange} value= {title} style={inputContainer.input} />
            </div>

            <div style={inputContainer.continer}>
                <div style={inputContainer.title}>Autor</div>
                <input type='text' name='autor' onChange={handleChange} value= {autor} style={inputContainer.input} />
            </div>

            <div style={inputContainer.continer}>
                <div style={inputContainer.title}>Portada</div>
                <input type='file' name='cover' onChange={handleOnChangeFile} style={inputContainer.input} />
                <div>{!!cover ? <img src={cover} width='200' alt='imagen del libro elegido' /> : ''} </div>
            </div>

            <div style={inputContainer.continer}>
                <div style={inputContainer.title}>Introducción</div>
                <input type='text' name='intro' onChange={handleChange} value= {intro} style={inputContainer.input} />
            </div>

            <div style={inputContainer.continer}>
                <div style={inputContainer.title}>Completado</div>
                <input type='checkbox' name='completed' onChange={handleChange} value= {completed} style={inputContainer.input} />
            </div>

            <div style={inputContainer.continer}>
                <div style={inputContainer.title}>Revisión</div>
                <input type='text' name='review' onChange={handleChange} value= {review} style={inputContainer.input} />
            </div>
            <input type='submit' value='Registrar libro' style={inputContainer.button} />
        </form>
    </Layout>
  )
}

export default Create;
