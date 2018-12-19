import React from 'react';
import axios from 'axios';

class NewPost extends React.Component {
    state = {
        selectedFile: null,
        title: '',
        content: ''
    }

    fileChangedHandler = (event) => {
        this.setState({selectedFile: event.target.files[0]})
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post(`${process.env.REACT_APP_API_URL}/blog/posts`, fd)
        .then(res => {
            console.log(res)
        });
    }
    uploadHandler = () => {
        const formData = new FormData()
        formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
        axios.post(`http://localhost:3001/api/v1/blog/posts`, formData)
        .then(res => {
            console.log(res)
        });
    }

    handleSubmit = (event) => {
        const { title, content } = this.state;

        return axios.post('http://localhost:3001/api/v1/blog/posts', {
            title,
            content,
          });

        event.preventDefault();
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }


    render() {
        const { title, content } = this.state;

        return(
            <div>
                <form id="new_post_form">
                    <input  
                        onChange={(e) => this.handleInputChange('title', e)}
                        value={title}
                        onChange={this.handleInputChange}
                        placeholder="Post Title"
                    />
                    <textarea 
                        onChange={(e) => this.handleInputChange('content', e)}
                        value={content}
                        placeholder="Post content"
                    />
                    <input type="file" onChange={this.fileSelectedHandler} />

                    <button onClick={this.handleSubmit}>Submit Post</button>
                </form>    
            </div>
 
        );
    }
}

export default NewPost;
