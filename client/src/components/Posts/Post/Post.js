import React from 'react'
import moment from "moment";
import { useDispatch } from "react-redux";
import {deletePost, likePost} from "../../../redux/actions/posts";

const Post = ({ setCurrentId, post }) => {

    return (
        <div className='mb-4'>
            <div className='card shadow backg'>
                <img className='card-img-top img-fluid blur' src={post.selectedFile} alt={post.title}/>
                <div className='card-img-overlay row postHeader'>
                    <div className='text-start col-8'>
                        <div className=''>
                            {post.creator}
                        </div>
                        <div>
                            {moment(post.createdAt).fromNow()}
                        </div>
                    </div>

                    <div className='col-4 text-end'>
                        <button className='search-button btn' onClick={() => setCurrentId(post._id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                 className="bi bi-three-dots search-icon" viewBox="0 0 16 16">
                                <path
                                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className='card shadow'>
                <div className='card-body row justify-content-center'>
                    <div className='col-12 text-start tags'>
                        {post.tags.map((tag) => `#${tag} `)}
                    </div>

                    <div className='col-12  text-start mt-1'>
                        <h5>
                            {post.title}
                        </h5>
                    </div>

                    <div className='col-11 text-start'>
                        {post.message}
                    </div>

                    <PostFooter post={post}/>
                </div>
            </div>
        </div>
    )
}

const PostFooter = ({ post }) => {

    const dispatch = useDispatch();

    return (
        <div className='row mt-2 footer'>
            <div className='col-6 text-start '>
                <div className='row'>
                    <div className='col-6 like-button'>
                        <button className='btn btn-primary' onClick={() => dispatch(likePost(post._id))}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-hand-thumbs-up-fill mb-1" viewBox="0 0 16 16">
                                <path
                                    d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                            </svg>
                            Like
                        </button>
                    </div>

                    <div className='col like-label'>
                        {post.likeCount}
                    </div>
                </div>
            </div>

            <div className='col-5 offset-1 text-end text-danger'>
                <button className='btn btn-danger' onClick={() => dispatch(deletePost(post._id))}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-trash-fill mb-1" viewBox="0 0 16 16">
                        <path
                            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                    Delete
                </button>
            </div>
        </div>
    )
}


export default Post