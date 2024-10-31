import React from 'react';
import myPost from './myPost.module.css'
import Post from './Post/Post'
import {useDispatch, useSelector} from "react-redux";
import {addPostReducer, updateTextPostReducer} from "../../../redux/slices/profileSlice";


const MyPost = () => {
    // Вытаскиваем данные из хранилища
    // Здесь state — это все состояние

    const posts = useSelector((state) => state.profileSlice.textPostData);
    const newPostText = useSelector((state) => state.profileSlice.newPostText);
    // console.log(newPostText)
    // Возвращает метод store.dispatch() текущего хранилища
    const dispatch = useDispatch();

    let postsElement = posts.map((text, index) => <Post message={text.message} id={text.id} key={index}/>);

    return (
        <div className={myPost.myPost}>
            <span className={myPost.title}>
                My Post
            </span>
            <textarea onChange={(e) => dispatch(updateTextPostReducer(e.target.value))}
                      value={newPostText}
                      name="myPost" placeholder='your news...'
                      className={myPost.text}>
            </textarea>
            <button className={myPost.sendBtn} onClick={() => dispatch(addPostReducer())}>
                Send
            </button>
            {postsElement}
        </div>
    )
}

export default MyPost;