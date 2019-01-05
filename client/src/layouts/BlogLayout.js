import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


class BlogLayout extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div>
                <Navigation nameOfClass={'navigation top-of-page'} />
                {this.props.page}
                <Footer /> 

            </div>
        );
    }
}

export default BlogLayout;