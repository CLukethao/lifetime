import React, { useState, useEffect } from 'react'
import './App.css'
import {useDispatch} from "react-redux";
import { getPosts } from './redux/actions/posts'
import lifetime from './images/photo.png'
import Form from './components/Form/Form'
import Posts from "./components/Posts/Posts";



const App = () => {

    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    return (

        <div className='justify-content-center text-center container'>
            <div className='row justify-content-center'>
                <div className='col-6 navigation'>
                    <h1>Lifetime <img src={lifetime} alt='lifetime' height='60'/></h1>
                </div>
            </div>


            <div className='row justify-content-center'>
                <div className='col-12 order-2 col-md-9 order-md-1'>
                    <Posts setCurrentId={setCurrentId}/>
                </div>

                <div className='col-12 order-1 col-md-3 order-md-2'>
                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                </div>
            </div>
        </div>
    );
}

export default App;