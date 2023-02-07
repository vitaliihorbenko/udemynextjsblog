import PostHeader from "./PostHeader";

import classes from "/assets/styles/components/posts/postDetail/postContent.module.css";
import ReactMarkdown from "react-markdown";

const PostContent = ({post}) => {
    const imagePath = `/img/posts/${post.slug}/${post.image}`
    return <article className={classes.content}>
        <PostHeader title={post.title} image={imagePath}/>
        <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
}

export default PostContent