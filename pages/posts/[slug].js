import PostContent from "../../components/posts/postDetail/PostContent";
import {getPostData, getPostsFiles} from "../../helpers/postsUtil";

const SinglePostPage = (props) => {
    return <PostContent post={props.post}/>
}

export function getStaticProps(context) {
    const {params} = context;
    const {slug} = params;
    const postData = getPostData(slug);
    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const postsFileNames = getPostsFiles()
    const slugs = postsFileNames.map(fileName => fileName.replace(/\.md$/, ""));
    console.log(slugs)
    return {
        paths: slugs.map(slug => ({params: {slug: slug}})),
        fallback: false
    }
}

export default SinglePostPage;