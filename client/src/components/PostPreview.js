import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';
 

const PostPreview = props => {
    
    const post = props.post;
    console.log(props);

    return(

        <div className='post-preview'> 
            <div className="post-listing col-12 col-sm-6 col-md-4 col-lg-4">
                <img src={post.image.url} className="img-fluid" alt={post.image_alt_attribute} />
                <h1>{post.title}</h1>      
                <p>{post.introduction}</p>
                <Link to={{
                    pathname: `blog/${post.slug}`,
                    state: {
                        id: post.id
                    }
                }}>
                
                    <button className="btn full-width">Read More</button>
                </Link>
            </div>
        </div>           
    );
}

export default PostPreview;