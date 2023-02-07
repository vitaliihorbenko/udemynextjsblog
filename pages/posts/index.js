import AllPosts from "../../components/posts/AllPosts";
import {getAllPosts} from "../../helpers/postsUtil";

const AllPostsPage = (props) => {
    return <AllPosts posts={props.posts}/>
}

export const getStaticProps = () => {
    const allPosts = getAllPosts()
    return {
        props: {
            posts: allPosts
        }
    }
}
export default AllPostsPage;