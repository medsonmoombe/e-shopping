import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {FiMail} from "react-icons/fi";
import {CiLocationOn} from "react-icons/ci";
import {BsTelephoneInbound, BsTwitter} from "react-icons/bs";
import styles from "./Contact.module.scss";


const Contact = () => {
  const form = useRef();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const text = document.getElementById('text');

  const sendEmail = (e) => {
    e.preventDefault();
    text.value=""
    name.value =""
    email.value =""

    emailjs
      .sendForm(
        process.env.REACT_APP_UNSPLASH_KEY,
        "template_5mzw8tu",
        form.current,
        "QORArzL44LdXjYdP1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section >
      <h2 style={{fontSize:"30px", textAlign:"center", marginBottom:"20px"}}>Contact Us</h2>
      <div className={styles.contactSection}>
      <form ref={form} onSubmit={sendEmail} className={styles.contactform}>
        <label>Name</label>
        <input type="text" name="user_name" id="name"/>
        <label>Email</label>
        <input type="email" name="user_email" id="email"/>
        <label>Message</label>
        <textarea name="message" id="text"/>
        <button type="submit" value="Send" className={styles.Cbutton}>
          submit
        </button>
      </form>
      <div className={styles.leftDiv}>
        <h2 className={styles.contDetails}>Our Contact Information</h2>
        <p className={styles.para}>Fill out the form or contact us via other channels listed below </p>
        <ul>
          <li><FiMail/>medsonmoombe21@gmail.com</li>
          <li><BsTelephoneInbound/>+260 961914936</li>
          <li><CiLocationOn/>Lusaka, Zambia</li>
          <li><BsTwitter/>@emmanue78388405</li>
        </ul>
      </div>
      </div>
    </section>
  );
};

export default Contact;
