import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import  { useRef } from 'react'
import emailjs from 'emailjs-com'

const   Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c4r7fhe', 'template_k3y741g', form.current, 'BFAF8-IJEGhtrJRx2')
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>shz.ann91@gmail.com</h5>
                <a href="mailto:shz.ann91@gmail.com" target="_blank">Send a message</a>
            </article>
            <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon'/>
                <h4>Messanger</h4>
                <h5>tutorials</h5>
                <a href="https://www.messenger.com" target="_blank">Send a message</a>
            </article>
            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
                <h4>WhatsUP</h4>
                <h5>89009650362</h5>
                <a href="https://api/whatsapp.com/send?phone89009650362" target="_blank">Send a message</a>
            </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>SEnd Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
