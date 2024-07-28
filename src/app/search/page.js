"use client";
import React, { useState, useEffect } from "react";
import styles from "./search.module.css";
import { FaUser, FaUserCircle } from "react-icons/fa";

export default function Search() {
  const [data, setData] = useState([]);
  const [isloading1, setIsLoading1] = useState(false);
  const fetchInfo = async () => {
    setIsLoading1(true);
    const res = await fetch(
      "https://farmfuturebackend.onrender.com/api/v1/user/getAllUser",
      {
        credentials: "include",
      }
    );
    const d = await res.json();
    setIsLoading1(false);
    return setData(d.data);
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.list}>
        {data &&
          data.map((val, index) => (
            <div className={styles.outer_div} key={index}>
              <div className={styles.header}>
                <FaUserCircle className={styles.logo} />
                <p>{val.username}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
