"use client";
import React, { useState } from "react";
import styles from "./styles/navbar.module.css";
import { FaBars, FaUser, FaUsers } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isopen, setIsopen] = useState(false);
  const router = useRouter();
  return (
    <div className={styles.main}>
      <p className={styles.title}>
        FarmFutures<br></br>
        <span className={styles.subtitle}>Connect farmers and future</span>
      </p>
      <ul className={isopen ? styles.list : styles.list1}>
        <li>
          <Link
            href="/landingpage"
            className={styles.links}
            onClick={() => {
              setIsopen(!isopen);
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard"
            className={styles.links}
            onClick={() => {
              setIsopen(!isopen);
            }}
          >
            Dashboard
          </Link>
        </li>{" "}
        <li>
          <Link
            href="/search"
            className={styles.links}
            onClick={() => {
              setIsopen(!isopen);
            }}
          >
            Search
          </Link>
        </li>{" "}
        <li>
          <Link
            href="/scheme"
            className={styles.links}
            onClick={() => {
              setIsopen(!isopen);
            }}
          >
            Scheme
          </Link>
        </li>{" "}
        <li>
          <Link
            href="/community"
            className={styles.links}
            onClick={() => {
              setIsopen(!isopen);
            }}
          >
            Community
          </Link>
        </li>
      </ul>
      <FaUser
        className={styles.user}
        onClick={() => {
          router.push("/user");
        }}
      />
      <FaBars
        className={styles.menu}
        onClick={() => {
          setIsopen(!isopen);
        }}
      />
    </div>
  );
}

// className={styles.links}
