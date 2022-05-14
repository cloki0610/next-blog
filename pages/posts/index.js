import AllPosts from "../../components/posts/all-posts";

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

const AllPostsPage = () => {
    return <AllPosts posts={DUMMY_POST} />
};

export default AllPostsPage;