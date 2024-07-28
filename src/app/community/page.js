"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./community.module.css";
import { FaUserCircle } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";

export default function Community() {
  const [data, setData] = useState([]);
  const [isloading1, setIsLoading1] = useState(false);
  const fetchInfo = async () => {
    setIsLoading1(true);
    const res = await fetch("http://localhost:3000/api/v1/buyer/getmessages", {
      credentials: "include",
    });
    const d = await res.json();
    setIsLoading1(false);
    return setData(d.data);
  };

  const [isbuying, setIsbuying] = useState(false);
  const [formData, setFormData] = useState({
    message: "sadasdasda",
  });
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmitform = async (event) => {
    event.preventDefault();
    setIsbuying(true);
    const response = await fetch(
      `http://localhost:3000/api/v1/buyer/sendmessage/${localStorage.getItem(
        "currentUser"
      )}`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
      setFormData({
        ...formData,
        ["message"]: "",
      }),
      setIsbuying(false)
    );
  };
  const bottomRef = useRef(null);
  useEffect(() => {
    fetchInfo();
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.div1} ref={bottomRef}>
        <div className={styles.chat}>
          {data &&
            data.map((val, index) => (
              <div className={styles.div3}>
                <div className={styles.head}>
                  {" "}
                  <FaUserCircle />
                  <p>{val.owner[0].username}</p>
                </div>
                <p className={styles.p1}>{val.message}</p>
                <p className={styles.time}>
                  {formatDistanceToNow(new Date(val.createdAt), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className={styles.div2}>
        <form onSubmit={handleSubmitform}>
          {" "}
          <input
            className={styles.input}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Send your message"
          ></input>
          <button className={styles.btn} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
