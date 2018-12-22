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
                <div className="blog-post-header d-flex-center-center" style={{backgroundImage: `url(${post.image_url})`}}>
                    <h1 className="post-title">{post.title}</h1>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-8 col-md-offset-2'>
                            <div className="post-content" id="post-content" dangerouslySetInnerHTML={{__html: post.content}}></div>
                        </div>
                    </div>
                </div> 
            </div>
           
        );
    } 
}

export default BlogPost;