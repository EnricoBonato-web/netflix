import React from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/gallery/Gallery';

function App() {
  return (
    <div className="App">
      <Header/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
