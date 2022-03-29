import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT,
  Header,
} from "./containers";
import { Cta, Brand, Navbar, Feature } from "./components";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="bg__gradient">
        <Navbar />
        <Header />
      </div>
       <Brand />
      <WhatGPT />
      <Features />
      <Possibility/>
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
