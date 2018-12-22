import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import './bootstrap.css';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import VideoBg from './components/VideoBg';
import MobileMenu from './components/MobileMenu';
import Backdrop from './components/Backdrop';
import MainLayout from './layouts/MainLayout';
import BlogLayout from './layouts/BlogLayout';
import BlogPost from './components/BlogPost';
import NewPost from './components/NewPost';


class App extends Component {
  constructor(props) {
     super(props);
     this.state = {
         mobileMenuOpen: false
      };
  }

  mobileMenuClickHandler = () => {
    this.setState((prevState) => {
      return {mobileMenuOpen: !prevState.mobileMenuOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({mobileMenuOpen: false})
  }

  render() {
    let backdrop;

    if (this.state.mobileMenuOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
 

    return (
      <div className="App">
          <Switch>
            <Route exact path="/" render={ () => <MainLayout page={<Home />} /> } />
            <Route exact path="/portfolio" render={ () => <MainLayout page={<Portfolio />} /> } />
            <Route exact path="/about" render={ () => <MainLayout page={<About />} /> } />
            <Route exact path="/contact" render={ () => <MainLayout page={<Contact />} /> } />
            <Route exact path="/blog" render={ () => <BlogLayout page={<Blog />} /> } />
            <Route exact path="/blog/:slug" render={ (props) => <BlogLayout page={<BlogPost {...props} />} /> } />

            <Route path="*" component={Error} />
          </Switch>
      </div>
      
    );
  }
}

export default App
