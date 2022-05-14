import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POST = [
    {
        title: "Getting Started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt: "NextJS",
        date: "2015-02-29",
        slug: "getting-started-with-nextjs"
    },
    {
        title: "Getting Started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt: "NextJS",
        date: "2015-02-29",
        slug: "getting-started-with-nextjs"
    },
    {
        title: "Getting Started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt: "NextJS",
        date: "2015-02-29",
        slug: "getting-started-with-nextjs"
    },
];

const HomePage = () => {
    return (
        <>
            <Hero />
            <FeaturedPosts posts={DUMMY_POST} />
        </>
    );
};

export default HomePage;