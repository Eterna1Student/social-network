import post from './Post.module.css'

const Post = (props) => {
    return (
        <div className={post.wrap}>
            <div className={post.avatar}>
                <img src="../../avatar.jpg" alt="photo" />
            </div>
            <p className={post.text}>
                { props.message }
            </p>
        </div>
    )
}

export default Post;