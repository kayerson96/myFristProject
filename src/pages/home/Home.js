import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/header/Header';
import Main from '../../components/maincontents/Main'
import Footer from '../../components/footer/Footer';


function Home(){
    return (
        <div className=''>
            <Header/>
            <Main/>
            <p>Hola anderson jose castillo </p>
            
            <Footer/>
        </div>

        
        
    )
}
export default Home;