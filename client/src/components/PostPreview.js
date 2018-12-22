import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';
 

const PostPreview = props => {
    const post = props.post;
    

    return(
        <div className='post-preview'>            
            <img src={post.image_url} className="img-fluid" alt={post.image_alt_attribute} />
            <h1>{post.title}</h1>

            <Link to={{
                pathname: `blog/${post.slug}`,
                state: {
                    id: post.id
                }
            }}>
                <button>Read More</button>
            </Link>

        </div>
    );
}

export default PostPreview;