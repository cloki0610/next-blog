import Head from "next/head";

import ContactForm from "../components/contact/contact-form";

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Contact Me</title>
                <meta name="description" content="Reach me with your name and e-mail!" />
            </Head>
            <ContactForm />
        </>
    );
};

export default ContactPage;