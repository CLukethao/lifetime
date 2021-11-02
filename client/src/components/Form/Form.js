import React, { useState, useEffect } from 'react'
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import {createPost, updatePost} from "../../redux/actions/posts";




const Form = ({ currentId, setCurrentId }) => {

    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
    });

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    const dispatch = useDispatch();

    useEffect(() => {
        if (post) {
            setPostData(post)
        }
    }, [post])

    const handleSubmit = (e) => {

        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData))
        }

        else {
            dispatch(createPost(postData));
        }

        clear();
    }

    const clear = () => {
        setCurrentId(null);

        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: '',
        })
    }

    return (
        <div className='form mb-4'>

            <h1>FORMS!</h1>
                <div className="input-group mb-3">
                    <input className='form-control' type='text' id='creator' placeholder='Creator' value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})}/>
                </div>

                <div className="input-group mb-3">
                    <input className='form-control' type='text' id='title' placeholder='Title' value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})}/>
                </div>

                <div className="input-group mb-3">
                    <input className='form-control' type='text' id='message' placeholder='Message' value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})}/>
                </div>

                <div className="input-group mb-3">
                    <input className='form-control' type='text' id='tags' placeholder='Tags (coma seperated)' value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})}/>
                </div>

                <div className="input-group mb-3">
                    <FileBase type='file' multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/>
                </div>

                <div className="d-grid gap-2">
                    <button className='btn btn-primary btn-block' type='submit' onClick={handleSubmit}>Submit</button>
                    <button className='btn btn-danger' onClick={clear}>clear</button>
                </div>

        </div>
    )
}

export default Form