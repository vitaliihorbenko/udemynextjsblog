import {Fragment} from "react";
import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";

const DUMMY_POSTS = [
    {
        title: "Getting started with Next.js",
        image: "image1.png",
        excerpt: "Lorem ipsum dolor sit amet",
        date: "05-01-2023",
        slug: "getting-started-with-nextjs"
    },
    {
        title: "Getting started with Next.js2",
        image: "image1.png",
        excerpt: "Lorem ipsum dolor sit amet",
        date: "05-01-2023",
        slug: "getting-started-with-nextjs2"
    },
    {
        title: "Getting started with Next.js3",
        image: "image1.png",
        excerpt: "Lorem ipsum dolor sit amet",
        date: "05-01-2023",
        slug: "getting-started-with-nextjs3"
    },
    {
        title: "Getting started with Next.js4",
        image: "image1.png",
        excerpt: "Lorem ipsum dolor sit amet",
        date: "05-01-2023",
        slug: "getting-started-with-nextjs4"
    }
]

const HomePage = () => {
    return (
        <Fragment>
            <Hero/>
            <FeaturedPosts posts={DUMMY_POSTS}/>
        </Fragment>
    )
}

export default HomePage;