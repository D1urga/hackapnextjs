"use client";
import React, { useState } from "react";
import styles from "./user.module.css";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function User() {
  const router = useRouter();
  const [isbuy, setIsbuy] = useState(false);
  const [isbuying, setIsbuying] = useState(false);
  const [isselling, setIsselling] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    // setCurrentValue(false);
    const response = await fetch("http://localhost:3000/api/v1/user/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(formData),
    });
    const data = await response.json();
    // setData(data.data);
    localStorage.clear();
    router.push("/");
    // setCurrentValue(true);
  };

  const [formData, setFormData] = useState({
    opentobuy: "sadasdasda",
    quantity: "123",
    note: "dasdasdsa",
    isorganic: "organic",
  });
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const [formData1, setFormData1] = useState({
    opentosell: "sadasdasda",
    quantity: "123",
    note: "dasdasdsa",
    price: "234",
    isorganic: "organic",
  });
  const handleInputChange1 = (event) => {
    setFormData1({
      ...formData1,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmitform = async (event) => {
    event.preventDefault();
    setIsbuying(true);
    const response = await fetch(
      `http://localhost:3000/api/v1/buyer/buy/${localStorage.getItem(
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
      setIsbuying(false)
    );
  };
  const handleSubmitform1 = async (event) => {
    event.preventDefault();
    setIsselling(true);

    const response = await fetch(
      `http://localhost:3000/api/v1/seller/sell/${localStorage.getItem(
        "currentUser"
      )}`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData1),
      },
      setIsselling(false)
    );
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.profile}> User Profile</h1>
      <div className={styles.outer_div}>
        <div className={styles.div1}>
          <FaUserCircle className={styles.user} />
          <p className={styles.p1}>Anoop Chaudhary</p>
          <p className={styles.p2}>anoop@gmail.com</p>

          <p className={styles.popularity}>
            Popularity <span className={styles.star}> ★★★★★</span>
          </p>

          <div className={styles.options}>
            <p
              onClick={() => {
                setIsbuy(true);
              }}
              className={isbuy === false ? styles.op2 : styles.op1}
            >
              Buy
            </p>
            <p
              onClick={() => {
                setIsbuy(false);
              }}
              className={isbuy === false ? styles.op1 : styles.op2}
            >
              Sell
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <button className={styles.logout} type="submit">
              Log Out
            </button>
          </form>
        </div>
        <div className={styles.div2}>
          <h2 className={styles.heading1}>
            Current Status - {isbuy ? "Buying" : "Selling"}
          </h2>
          {isbuy ? (
            <div className={styles.buy}>
              <form onSubmit={handleSubmitform}>
                {" "}
                <p className={styles.pp}>Open to buy</p>
                <input
                  name="opentobuy"
                  value={formData.opentobuy}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="ex .. rice , wheat ."
                ></input>{" "}
                <p className={styles.pp}>is Organic ?</p>
                <input
                  name="isorganic"
                  value={formData.isorganic}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="is organic ."
                ></input>{" "}
                <p className={styles.pp}>Quantity</p>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="8060"
                ></input>
                <p className={styles.pp}>Leave a note</p>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleInputChange}
                  className={styles.input1}
                  placeholder="Please leave a notice here .."
                ></textarea>
                <button className={styles.btn1} type="submit">
                  {isbuying ? "Posting" : "Post"}
                </button>
              </form>
            </div>
          ) : (
            <div className={styles.sell}>
              <form onSubmit={handleSubmitform1}>
                <p className={styles.pp}>Open to sell</p>
                <input
                  className={styles.input}
                  name="opentosell"
                  value={formData1.opentosell}
                  onChange={handleInputChange1}
                  placeholder="ex .. rice , wheat ."
                ></input>{" "}
                <p className={styles.pp}>is Organic</p>
                <input
                  className={styles.input}
                  name="isorganic"
                  value={formData1.isorganic}
                  onChange={handleInputChange1}
                  placeholder="is organic."
                ></input>{" "}
                <p className={styles.pp}>Quantity</p>
                <input
                  type="number"
                  name="quantity"
                  value={formData1.quantity}
                  onChange={handleInputChange1}
                  className={styles.input}
                  placeholder="8060"
                ></input>
                <p className={styles.pp}>Price</p>
                <input
                  type="number"
                  name="price"
                  value={formData1.price}
                  onChange={handleInputChange1}
                  className={styles.input}
                  placeholder="8060"
                ></input>
                <p className={styles.pp}>Leave a note</p>
                <textarea
                  className={styles.input1}
                  name="note"
                  value={formData1.note}
                  onChange={handleInputChange1}
                  placeholder="Please leave a notice here .."
                ></textarea>
                <button className={styles.btn1} onSubmit="submit">
                  {isselling ? "Posting" : "Post"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
