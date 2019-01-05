import React from 'react'
import axios from 'axios';
import PostPreview from './PostPreview';

class PostFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            posts: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    componentDidMount() {
        axios.get('/api/v1/blog/posts/search?q=')
            .then(res => {
            const posts = res.data;
            this.setState({ posts });
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        let searchQuery = this.refs.searchQuery.value;
        this.setState({ term: searchQuery }, () =>
        this.getSearchResults()
        );
        
    }

    getSearchResults() {
        axios.get('/api/v1/blog/posts/search?q=' + this.state.term)
        .then(res => {
        const posts = res.data;
        this.setState({ posts });
        });
        console.log(this.state.posts);
    }


  
    render() {  
        const { posts } = this.state;

        if (!this.state.posts) {
            return(
                <div className='filter-bar col-xs-12'>
                    <input type="text" className='search-bar' ref="searchQuery" placeholder='Find resource' onChange={this.handleSubmit} />
                </div>
            );
        }   else {
            return(
            <div>
                <div className='filter-bar col-xs-12'>
                    <input type="text" className='search-bar' ref="searchQuery" placeholder='Find resource' onChange={this.handleSubmit} />
                </div>
                  
                <div id="posts-list">
                    { posts.map(post => <PostPreview post={post} />) }
                </div>
            </div>
            );
        }
     
    
  }
}



export default PostFilter;