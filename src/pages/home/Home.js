import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from '../../components/firtsComponent/Main';
import Footer from '../../components/footer/Footer';
import Second from '../../components/secondComponen/Second';
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