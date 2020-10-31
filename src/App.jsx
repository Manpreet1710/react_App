import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from '../src/Components/Home';
import About from '../src/Components/About';
import Service from '../src/Components/Service';
import Contact from '../src/Components/Contact';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../src/Components/Navbar';
import Footer from '../src/Components/Footer';
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/service' component={Service} />
        <Route exact path='/contact' component={Contact} />
        <Redirect to='/' />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
