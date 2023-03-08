import React from "react";
import styles from "../styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faTiktok,
  faUber,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftFooter}>
        <p>Bringing the taste of Italy to your doorstep.</p>
      </div>
      <div className={styles.rightFooter}>
        <p>Find us on socials </p>
        <div style={{ color: "#fafafa", display: "flex" }}>
          <FontAwesomeIcon
            icon={faSquareFacebook}
            style={{ margin: "0 4px" }}
          />
          <FontAwesomeIcon
            icon={faSquareInstagram}
            style={{ margin: "0 4px" }}
          />
          <FontAwesomeIcon icon={faTiktok} style={{ margin: "0 4px" }} />
          <FontAwesomeIcon icon={faUber} style={{ margin: "0 4px" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
