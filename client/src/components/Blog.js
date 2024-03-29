import React from 'react';
import urlFor from './helpers/urlFor';
import axios from 'axios';
import PostFilter from './PostFilter';
import PostPreview from './PostPreview';
import { Link } from 'react-router-dom';


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
          <div className='first-post d-flex-center-center' style={{backgroundImage: `url(${post.image.url})`}}>
            <div className="overlay d-flex-center">
              <div className="text-center">
                <h1 className="post-title">{post.title}</h1>
                <p className="post-introduction">{post.introduction}</p>
                <Link to={{
                    pathname: `blog/${post.slug}`,
                    state: {
                        id: post.id
                    }
                }}>
                <button className="btn">Read more</button>
                </Link> 
              </div>
            </div>
          </div>
         )}

        <div className='container list-of-posts'>
            <div className='row'>
              <div className='col-xs-12'>
                <PostFilter />
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Blog;
