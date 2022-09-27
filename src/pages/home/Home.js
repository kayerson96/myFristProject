import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from '../home/componente_home/firtsComponent/Main';
import Second from '../home/componente_home/secondComponent/Second';
import { Link } from 'react-router-dom';

function Home(){
    
    return (

        <div className=''>
            <Main/>
            <Second/>
        </div>    
    )
}
export default Home;