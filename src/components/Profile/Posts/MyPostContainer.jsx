import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addPostReducer, updateTextPostReducer} from "../../../redux/slices/profileSlice";
import MyPost from "./MyPost";


const MyPostContainer = () => {
    // Вытаскиваем данные из хранилища
    // Здесь state — это все состояние

    const posts = useSelector((state) => state.profileSlice.textPostData);

    const newPostText = useSelector((state) => state.profileSlice.newPostText);
    // console.log(newPostText)
    // Возвращает метод store.dispatch() текущего хранилища
    const dispatch = useDispatch();

    let addPost = () => dispatch(addPostReducer())
    let updateTextPost = (e) => dispatch(updateTextPostReducer(e.target.value))


    return (
        <MyPost posts={posts}
                newPostText={newPostText}
                addPost={addPost}
                updateTextPost={updateTextPost}
        />
    )
}

export default MyPostContainer;