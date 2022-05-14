import Head from "next/head";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
    return (
        <>
            <Head>
                <title>Rocky's Blog</title>
                <meta name="description" content="I create content about programming and web development." />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </>
    );
};

export default HomePage;

export const getStaticProps = () => {
    const featuredPosts = getFeaturedPosts();
    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 1800,
    };
};