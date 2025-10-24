import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const handleMessage = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAIL_USER_ID
    ).then((result) => {
        e.target.reset();
        toast.success("Thanks for Your Message");
      }, (error) => {
        console.log(error.text);
        e.target.reset();
        toast.error("Failed to send email. Please try again.");
      });
  };

  return (
    <>
      <form ref={form} onSubmit={handleMessage} className="contact-form">
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <input className="form-control" id="contact_name" name="contact_name" placeholder="Name*" type="text" required />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input className="form-control" id="contact_email" name="contact_email" placeholder="Email*" type="email" required />
              <span className="alert-error"></span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input className="form-control" id="contact_phone" name="contact_phone" placeholder="Phone" type="number" />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group comments">
              <textarea className="form-control" id="contact_description" name="contact_description" placeholder="Tell Us About Project *" type="text" required />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <button type="submit" name="submit" id="submit">
              Send Message
            </button>
          </div>
        </div>
        <div className="col-lg-12 alert-notification">
          <input type="hidden" name="source" value="QDotData" />
          <div id="message" className="alert-msg"></div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
