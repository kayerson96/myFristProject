import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from '../../components/firtsComponent/Main';
import Footer from '../../components/footer/Footer';
import Second from '../../components/secondComponen/Second';

function Home(){
    return (

        <div className=''>
            <Main/>
            <Second/>
            <Footer/>
        </div>

        
        
    )
}
export default Home;