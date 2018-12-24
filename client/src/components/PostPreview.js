import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';
 

const PostPreview = props => {
    const post = props.post;
    

    return(
        <div className='post-preview'> 
            <div className="row post-listing">
                <div className="col-xs-4">
                    <img src={post.image_url} className="img-fluid" alt={post.image_alt_attribute} />
                </div>
                <div className="col-xs-8">
                    <h1>{post.title}</h1>
                    <p>{post.introduction}</p>
                    <Link to={{
                        pathname: `blog/${post.slug}`,
                        state: {
                            id: post.id
                        }
                    }}>
                        <button>Read More</button>
                    </Link>
                </div>
            </div>           
            



        </div>
    );
}

export default PostPreview;