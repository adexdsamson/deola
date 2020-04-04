import React, {Suspense} from 'react';
import Bar from './container/header';
import Intro from "./container/intro";
import About from "./container/about";
import Service from "./container/service";
import Portfolio  from "./container/portfolio";
import Curriculum from "./container/curriculum";
import Contact from "./container/contact";
import Loader from "./component/loader";
import './App.css';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      
      <Bar />
      <Intro />
      <About />
      <Curriculum />
      <Portfolio />
      <Service />
      <Contact />
     
    </Suspense>
  );
}

export default App;
