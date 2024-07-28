import React from "react";
import styles from "./styles/footer.module.css";
import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const txt = `Welcome to FarmFutures, your gateway to modern farming solutions. Our platform offers access to the latest agricultural innovations, expert advice, and real-time data, ensuring you stay ahead in the ever-evolving world of agriculture.
   Join us to transform your farming experience, enhance your yields, and cultivate a prosperous future.`;
  return (
    <div className={styles.main_div}>
      <div className={styles.outer_div}>
        <div className={styles.div1}>
          <p className={styles.d1p1}>FarmFutures</p>
          <p className={styles.d1p2}>Connect farmers and future</p>
          <p className={styles.pp}>{txt}</p>
        </div>
        <div className={styles.div2}>
          <p className={styles.d2p1}>Information</p>
          <p className={styles.pp}>Agriculture</p>
          <p className={styles.pp}>Commerce</p>{" "}
          <p className={styles.pp}>Defence</p>{" "}
          <p className={styles.pp}>Environment & forest</p>{" "}
          <p className={styles.pp}>Food & public distribution</p>{" "}
          <p className={styles.pp}>Governance & Administrations</p>{" "}
          <p className={styles.pp}>Housing</p>{" "}
          <p className={styles.pp}>Industries</p>{" "}
          <p className={styles.pp}>Information & broadcasting</p>{" "}
          <p className={styles.pp}>Law & Justice</p>{" "}
          <p className={styles.pp}>Rural</p>{" "}
          <p className={styles.pp}>Social Developement</p>{" "}
        </div>
        <div className={styles.div3}>
          {" "}
          <p className={styles.d2p1}>About the Government</p>
          <p className={styles.pp}>Constitution of India</p>{" "}
          <p className={styles.pp}>Government Directory</p>
          <p className={styles.pp}>Indian Parliament</p>{" "}
          <p className={styles.pp}>Publications</p>
          <p className={styles.pp}>President of India</p>{" "}
          <p className={styles.pp}>Vice-President of India</p>
          <p className={styles.pp}>Prime Minister of India</p>{" "}
          <p className={styles.pp}>Cabinet Ministers</p>
          <p className={styles.pp}>Members of Parliament</p>{" "}
        </div>
        <div className={styles.div4}>
          {" "}
          <p className={styles.d2p1}>Miscellaneous</p>{" "}
          <p className={styles.pp}>Blogs</p>{" "}
          <p className={styles.pp}>FarmFutures</p>{" "}
          <p className={styles.pp}>information</p>{" "}
          <p className={styles.pp}>Contact Us</p>
          <p className={styles.pp}>Privacy Policy</p>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.icons}>
        <FaInstagram className={styles.icon} />
        <FaLinkedinIn className={styles.icon} />
        <FaFacebookF className={styles.icon} />{" "}
        <FaTwitter className={styles.icon} />{" "}
        <FaGithub className={styles.icon} />
      </div>
      <div className={styles.intro}>
        <p className={styles.pp1}>Designed and Developed by</p>
        <p className={styles.pp2}>Anoop Kumar Chaudhary</p>
      </div>
    </div>
  );
}
