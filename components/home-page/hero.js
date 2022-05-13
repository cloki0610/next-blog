import Image from "next/image";

import classes from "./hero.module.css";

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/lalafell_icon3.png"
                    alt="An image of my icon"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I'm Rocky</h1>
            <p>I blog about web development - especially frontend framworks and API.</p>
        </section>
    );
};

export default Hero;