"use client";
import React, { useState, useEffect } from "react";
import styles from "./scheme.module.css";
import { FaSearch } from "react-icons/fa";

export default function Scheme() {
  const [data, setData] = useState([]);
  const [isloading, setisloading] = useState(false);

  const fetchInfo = async () => {
    setisloading(true);
    const res = await fetch(
      `https://sevasetu.onrender.com/api/v1/schemes/getScheme`,
      {
        credentials: "include",
      }
    );
    const d = await res.json();
    setisloading(false);
    return setData(d.data);
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.options}>
          <p className={styles.p4}>
            please choose general or jobs for category filtering
          </p>
          <div>
            <button className={styles.btn1}>general</button>
            <button className={styles.btn2}>Jobs</button>
          </div>
        </div>
        <div className={styles.search_bar}>
          <input
            className={styles.input}
            placeholder="please search here ..."
          ></input>
          <FaSearch className={styles.search_icon} />
        </div>
        {!isloading ? (
          <div className={styles.schemes}>
            {data &&
              data.map((data, index) => (
                <div key={index} className={styles.card}>
                  <p className={styles.p1}>{data.title}</p>
                  <p className={styles.p2}>{data.category}</p>
                  <p className={styles.p3}>{data.description}</p>
                  <div className={styles.comment}>
                    <button className={styles.btn3}>comment</button>
                    <button className={styles.btn4}>share</button>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <p style={{ textAlign: "center" }}>Loading please wait ..</p>
        )}
      </div>
    </div>
  );
}
