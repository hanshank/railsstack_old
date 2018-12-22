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
    const { posts } = this.state;


    return (
      <div>
         { posts.slice(0, 1).map(post => 
          <div className='first-post d-flex-center-center' style={{backgroundImage: `url(${post.image_url})`}}>
           <h1>{post.title}</h1>
          </div>
         )}

       
        <div className='container'>
            <div className='row'>
                { posts.slice(1).map(post => <div className='col-sm-6 col-md-4 col-lg-3'><PostPreview post={post} /></div>) }
            </div>
        </div>
      </div>
    );
  }
}

export default Blog;
