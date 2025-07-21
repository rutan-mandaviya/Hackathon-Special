// App.js
import React from 'react';
import LandingPage from './LandingPage';
import Second from './Second';
import Productpage from './Productpage';
import About from './About';
import Productdetailpage from './PerfumeListing';
import PerfumeListing from './PerfumeListing';

function App() {
  return (
   <div className="w-full bg-gradient-to-br from-blue-100 via-pink-100 to-blue-100 overflow-auto overflow-x-hidden">

    <LandingPage></LandingPage>
    <Second></Second>
   <PerfumeListing></PerfumeListing>
    <Productpage></Productpage>
    <About></About>
    </div>
  );
}

export default App;