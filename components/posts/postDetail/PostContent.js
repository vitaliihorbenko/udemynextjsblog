import PostHeader from "./PostHeader";

import classes from "/assets/styles/components/posts/postDetail/postContent.module.css";

const DUMMY_POST = {
    title: "Getting started with Next.js",
    image: "image1.png",
    excerpt: "Lorem ipsum dolor sit amet",
    date: "05-01-2023",
    slug: "getting-started-with-nextjs",
    content: "# This is a first post"
}

const PostContent = () => {
    const imagePath = `/img/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
    return <article className={classes.content}>
        <PostHeader title={DUMMY_POST.title} image={imagePath}/>
        {DUMMY_POST.content}
    </article>
}

export default PostContent