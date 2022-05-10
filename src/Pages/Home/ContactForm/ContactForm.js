import React from 'react';
import './ContactForm.css'

const ContactForm = () => {
    return (
        <section className='contactForm my-10 mx-10'>
            <p className='text-center text-xl text-primary'>Contact Us</p>
            <h2 className='text-center text-3xl text-white'>Stay connected with us</h2>
            <div className='flex items-center justify-center flex-col'>
                <input className='w-9/12 my-3 pl-3 rounded-md' type="email" name="" id="" placeholder='Your Email' />
                <input className='w-9/12 my-3 mb-10 pl-3 rounded-md' type="text" placeholder='Subject' />
                <textarea name="" className='pl-3 w-9/12' id="" rows="3" placeholder='Your message'></textarea>
            </div>
        </section>
    );
};

export default ContactForm;