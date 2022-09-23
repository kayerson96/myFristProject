import React from 'react';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AboutMe from './pages/aboutme/Aboutme';
import Contact from './pages/contact/Contact';
import Works from './pages/works/Works';
import {HashRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <HashRouter>
        <Header/>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/aboutme' element={<AboutMe />} />
              <Route path='/works' element={<Works />} />
              <Route path='/contact' element={<Contact />} />
          </Routes>
          {/* <Footer/> */}
      </HashRouter>
    </>
  );
}

export default App;
