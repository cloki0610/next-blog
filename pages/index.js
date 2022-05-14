import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
    return (
        <>
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