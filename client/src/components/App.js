import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../css/bootstrap.css';
import Home from './Home'
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navigation from './Navigation';
import Footer from './Footer';
import Portfolio from './Portfolio';
import Blog from './Blog';
import VideoBg from './VideoBg';
import MobileMenu from './MobileMenu';
import Backdrop from './Backdrop';
import MainLayout from '../layouts/MainLayout';
import BlogLayout from '../layouts/BlogLayout';
import BlogPost from './BlogPost';
import NewPost from './NewPost';
import ComingSoon from './ComingSoon';


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
            <Route exact path="/tutorials" render={ () => <MainLayout page={<ComingSoon />} /> } />
            <Route exact path="/blog" render={ () => <BlogLayout page={<Blog />} /> } />
            <Route exact path="/blog/:slug" render={ (props) => <BlogLayout page={<BlogPost {...props} />} /> } />

            <Route path="*" component={Error} />
          </Switch>
      </div>
      
    );
  }
}

export default App
