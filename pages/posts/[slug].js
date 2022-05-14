import Head from "next/head";

import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lib/posts-util";

const PostDetailPage = (props) => {
    return (
        <>
            <Head>
                <title>{props.post.title}</title>
                <meta name="description" content={props.post.excerpt} />
            </Head>
            <PostContent post={props.post} />
        </>
    );
};

export default PostDetailPage;

export const getStaticPaths = () => {
    const postFileNames = getPostFiles();
    const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''));
    return {
        paths: slugs.map(slug => ({ params: { slug: slug } })),
        fallback: 'blocking',
    };
};

export const getStaticProps = (context) => {
    const { params } = context;
    const postData = getPostData(params.slug);
    return {
        props: {
            post: postData
        },
        revalidate: 600,
    };
};