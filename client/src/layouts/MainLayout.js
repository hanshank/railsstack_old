import React, { Component } from 'react';
import MobileMenu from '../components/MobileMenu';
import Backdrop from '../components/Backdrop';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


class MainLayout extends Component {
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

       return(
            <div>
                <Navigation mobileMenuHandler={this.mobileMenuClickHandler} nameOfClass={'navigation'}/>  
                <MobileMenu show={this.state.mobileMenuOpen} mobileMenuHandler={this.mobileMenuClickHandler} />
                {backdrop}
               
                {this.props.page}  
                <Footer /> 
            </div> 
       );

       }
    }

export default MainLayout;