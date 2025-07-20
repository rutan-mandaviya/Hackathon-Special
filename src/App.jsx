// App.js
import React from 'react';
import LandingPage from './LandingPage';
import Second from './Second';
import Productpage from './Productpage';
import About from './About';

function App() {
  return (
    <div className="w-full  overflow-x-hidden ">
    <LandingPage></LandingPage>
    <Second></Second>
    <Productpage></Productpage>
    <About></About>
    </div>
  );
}

export default App;