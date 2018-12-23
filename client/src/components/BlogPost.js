import React from 'react';
import axios from 'axios';
import Navigation from './Navigation';

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: []
        }
    }

    componentDidMount() {
        const { slug } = this.props.match.params;
        axios.get(`/api/v1/blog/posts/${slug}`)
        .then(res => {
          this.setState({ post: res.data});
        })
        .catch(error => console.log(error));
    }
    
    render() {

        

        const { post } = this.state;

        

        return(
            <div>
                <div className="blog-post-header" style={{backgroundImage: `url(${post.image_url})`}}>
                    <div className="overlay d-flex-center-center">
                        <div className="text-center">
                            <h1 className="post-title">{post.title}</h1>
                            <div className="post-author-box">
                                <div className="user-img-container" style={{backgroundImage: `url(${post.image_url})`}}  ></div>
                                <h3 className="post-author" >Hans Martin Hanken {post.published_at}</h3>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-8 col-md-offset-2'>
                            {/* Put post.user instead of hardcoded text */}
                            <div className="post-content" id="post-content" dangerouslySetInnerHTML={{__html: post.content}}></div>
                        </div>
                    </div>
                </div> 
            </div>
           
        );
    } 
}

export default BlogPost;