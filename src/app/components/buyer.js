import React from "react";
import styles from "./styles/buyer.module.css";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { format } from "date-fns";

export default function Buyer({
  username,
  opentobuy,
  quantity,
  note,
  date,
  int,
  isorg,
}) {
  return (
    <div>
      {" "}
      <div className={styles.main}>
        <div className={styles.intro}>
          <FaUserCircle className={styles.logo} />
          <p className={styles.p1}>{username}</p>
        </div>
        <p className={styles.p2}>{isorg}</p>
        <p className={styles.p2}>{opentobuy}</p>
        <p className={styles.p3}>{quantity}</p>
        <p className={styles.p4}>{note}</p>
        <p className={styles.p5}>{format(Date(date), "dd/MM/yyyy")}</p>
        <button
          className={styles.btn}
          onClick={() => {
            alert("Message sent to the owner");
          }}
        >
          Interested to {int}
        </button>
      </div>
    </div>
  );
}
