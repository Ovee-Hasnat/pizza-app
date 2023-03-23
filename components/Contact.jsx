import { Button, TextField } from "@mui/material";
import React from "react";

import styles from "../styles/contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1085.1811700573764!2d90.42495801121618!3d23.81504911073499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c64c103a8093%3A0xd660a4f50365294a!2sNorth%20South%20University!5e0!3m2!1sen!2sbd!4v1679570994255!5m2!1sen!2sbd"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <p>Our Outlets</p>
          <li>
            &#10148; House no. 10, Road no. 12, Block E, Niketon, Gulshan-1,
            Dhaka-1212, Bangladesh.
          </li>
          <li>
            &#10148; House no. 24, Road no. 2, Block D, Bashundhara R/A,
            Dhaka-1229, Bangladesh.
          </li>
        </div>
        <div className={styles.right}>
          <div className={styles.formWrapper}>
            <p>Send us a message</p>
            <TextField
              className={styles.email}
              id="standard-basic"
              label="Email Address"
              variant="standard"
              size="small"
              required
            />
            <TextField
              className={styles.text}
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={3}
              size="small"
            />
            <Button variant="contained" color="success">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
