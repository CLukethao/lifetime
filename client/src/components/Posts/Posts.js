
import React from 'react'
import { useSelector } from "react-redux";
import Post from './Post/Post'

const Posts = ({ setCurrentId }) => {

    const posts = useSelector((state) => state.posts);
    console.log(posts)

    return (
        !posts.length ? <div className="spinner-border text-primary" role="status"></div> : (

                <div className='row'>
                    {posts.map((post) => (
                        <div key={post._id} className='col-12 col-sm-6'>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </div>
                    ))}
                </div>

            )
    )
}

export default Posts