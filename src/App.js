import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/about-us" component={ AboutUs } />
                    <Route path="/services" component={ Services } />
                    <Route path="/blog" component={ Blog } />
                    <Route path="/contact-us" component={ ContactUs } />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
