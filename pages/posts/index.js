import Head from "next/head";

import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = (props) => {
    return (
        <>
            <Head>
                <title>All Posts</title>
                <meta name="description" content="A list of all my previouse content." />
            </Head>
            <AllPosts posts={props.posts} />
        </>
    );
};

export default AllPostsPage;

export const getStaticProps = () => {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        },
        revalidate: 1800,
    };
};