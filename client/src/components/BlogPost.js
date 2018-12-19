import React from 'react';
import axios from 'axios';

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
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>{post.title}</h1>
                        {post.content}
                    </div>
                </div>
            </div>
        );
    } 
}

export default BlogPost;