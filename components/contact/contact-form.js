import { useRef } from "react";

import classes from "./contact-form.module.css";

const ContactForm = () => {
    const emailInputRef = useRef();
    const nameInputRef = useRef();
    const messageInputRef = useRef();

    const sendMessageHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredName = nameInputRef.current.value;
        const enteredMessage = messageInputRef.current.value;

        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
    };
    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={sendMessageHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your E-mail</label>
                        <input type="email" id="email" ref={emailInputRef} required />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" ref={nameInputRef} required />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" rows="5" ref={messageInputRef} required />
                </div>
                <div className={classes.actions}>
                    <button>Send Message</button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;