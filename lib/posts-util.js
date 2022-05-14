import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

const getPostData = (fileName) => {
    // Get file content
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    // use matter to split meta data and content
    const { data, content } = matter(fileContent);

    const postSlug = fileName.replace(/\.md$/, '');

    const postData = {
        slug: postSlug,
        ...data,
        content,
    };
    return postData;
};

export const getAllPosts = () => {
    const postFiles = fs.readdirSync(postsDirectory);

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    });

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);
    return sortedPosts;
};

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter(post => post.isFeatured);

    return featuredPosts;
};