import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

const PostItem = (props) => {
    const { title, image, excerpt, date, slug } = props.post;
    const imagePath = `/images/posts/${slug}/${image}`
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <li className={classes.post}>
            <Link>
                <a>
                    <div className={classes.image}>
                        <Image
                            src={imagePath}
                            alt={`Image of ${title}`}
                            width={300}
                            height={200}
                        />
                    </div>
                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
};

export default PostItem;