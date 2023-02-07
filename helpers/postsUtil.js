import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
    return fs.readdirSync(postsDirectory);
}

export const getPostData = (postIdentifier) => {
    const postSlug = postIdentifier.replace(/\.md$/, "") // removes the file extension
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8")
    console.log(fileContent)
    const {data, content} = matter(fileContent)

    return {
        slug: postSlug,
        ...data,
        content
    };
}
export const getAllPosts = () => {
    const postFiles = getPostsFiles(postsDirectory)
    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile)
    })

    return allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)
}

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();

    return allPosts.filter(post => post.isFeatured)
}