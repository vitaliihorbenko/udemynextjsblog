import {Fragment} from "react";
import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import {getFeaturedPosts} from "../helpers/postsUtil";

const HomePage = (props) => {
    return (
        <Fragment>
            <Hero/>
            <FeaturedPosts posts={props.posts}/>
        </Fragment>
    )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();
    return {
        props: {
            posts: featuredPosts
        }
    }
}

export default HomePage;