import React from 'react';
import urlFor from './helpers/urlFor';
import axios from 'axios';
import PostPreview from './PostPreview';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('/api/v1/blog/posts')
      .then(res => {
        this.setState({ posts: res.data});
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <div className='container'>
            <div className='row'>
                { this.state.posts.map(post => <div className='col-md-3'><PostPreview post={post} /></div>) }
            </div>
        </div>
      </div>
    );
  }
}

export default Blog;
