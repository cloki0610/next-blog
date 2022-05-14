import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_POST = {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2015-02-29",
    slug: "getting-started-with-nextjs",
    content: "# This is the first post"
};

const PostContent = () => {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
        </article>
    );
};

export default PostContent;