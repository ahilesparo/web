import './App.css';
import {Navbar, Hero, PostContainer, Footer} from './components/common';

import React from 'react';

const App = () => {

  return (
    <div className="App" styles="margin:0">
      <div className="content-wrap">
        <Navbar />
        <Hero />
        <PostContainer />
        <Footer />
      </div>
    </div>
  )
}

export default App
