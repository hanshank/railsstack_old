import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import { Route } from 'react-router-dom';



class BlogLayout extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div>
                <Navigation nameOfClass={'navigation top-of-page'} />
                {this.props.page}
            </div>
        );
    }
}

export default BlogLayout;