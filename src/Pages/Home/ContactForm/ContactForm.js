import React from 'react';

const ContactForm = () => {
    return (
        <section className='contact-form'>
            <p>Contact Us</p>
            <h2>Stay connected with us</h2>
            <div>
                <input type="email" name="" id="" placeholder='Your Email' />
                <input type="text" placeholder='Subject' />
                <textarea name="" id="" cols="30" rows="10" placeholder='Your message'></textarea>
            </div>
        </section>
    );
};

export default ContactForm;