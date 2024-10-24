import React from 'react';
import myPost from './myPost.module.css'
import Post from './Post/Post'



const MyPost = (props) => {
    console.log(props)
    let postsElement = props.textsPots.map((text, index) => <Post message={text.message} id={text.id} key={index}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        let action = {
            type: 'ADD-POST'
        }
        props.dispatch(action)
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {
            type: 'UPDATE-NEW-POST-TEXT',
            newText: text
        }
        props.dispatch(action)

    }

    return (
        <div className={myPost.myPost}>
            <span className={myPost.title}>
                My Post
            </span>
            <textarea onChange={ onPostChange }
                      value={props.newPostText}
                      ref={newPostElement}
                      name="myPost" placeholder='your news...'
                      className={myPost.text}>
            </textarea>
            <button className={myPost.sendBtn} onClick={ addPost }>
                Send
            </button>
            {postsElement }
        </div>
    )
}

export default MyPost;