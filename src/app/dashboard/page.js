"use client";
import React, { useState, useEffect } from "react";
import styles from "./dashboard.module.css";
import Buyer from "../components/buyer.js";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [isloading1, setIsLoading1] = useState(false);
  const [isloading2, setIsLoading2] = useState(false);
  const [data1, setData1] = useState([]);

  const fetchInfo = async () => {
    setIsLoading1(true);
    const res = await fetch(
      "https://farmfuturebackend.onrender.com/api/v1/buyer/allbuyers",
      {
        credentials: "include",
      }
    );
    const d = await res.json();
    setIsLoading1(false);
    return setData(d.data);
  };
  const fetchInfo1 = async () => {
    setIsLoading2(true);
    const res = await fetch(
      "https://farmfuturebackend.onrender.com/api/v1/seller/allseller",
      {
        credentials: "include",
      }
    );
    const d = await res.json();
    setIsLoading2(false);
    return setData1(d.data);
  };
  useEffect(() => {
    fetchInfo();
    fetchInfo1();
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.div1}>
          <h2 className={styles.head1}>Buyers</h2>
          {!isloading1 ? (
            <div className={styles.grid1}>
              {data &&
                data.map((val, index) => (
                  <Buyer
                    key={index}
                    username={val.owner[0].username}
                    opentobuy={val.opentobuy}
                    quantity={val.quantity}
                    note={val.note}
                    int="buy"
                    isorg={val.isorganic}
                  />
                ))}
            </div>
          ) : (
            <p>Loading Please Wait..</p>
          )}
        </div>
        <div className={styles.div2}>
          <h2 className={styles.head1}>Sellers</h2>
          {!isloading2 ? (
            <div className={styles.grid1}>
              {data &&
                data1.map((val, index) => (
                  <Buyer
                    key={index}
                    username={val.owner[0].username}
                    opentobuy={val.opentobuy}
                    quantity={val.quantity}
                    note={val.note}
                    int="sell"
                    isorg={val.isorganic}
                  />
                ))}
            </div>
          ) : (
            <p>Loading Please wait ..</p>
          )}
        </div>
      </div>
    </div>
  );
}
