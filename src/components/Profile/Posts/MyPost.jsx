import React from 'react';
import myPost from './MyPost.module.css'
import Post from './Post/Post'

const MyPost = (props) => {

    let postsElement = props.posts.map((text, index) => <Post message={text.message} id={text.id} key={index}/>);

    return (
        <div className={myPost.myPost}>
            <span className={myPost.title}>
                My Post
            </span>
            <textarea onChange={props.updateTextPost}
                      value={props.newPostText}
                      name="myPost" placeholder='your news...'
                      className={myPost.text}>
            </textarea>
            <button className={myPost.sendBtn} onClick={props.addPost}>
                Send
            </button>
            {postsElement}
        </div>
    )
}

export default MyPost;