import React from "react";
import Link from "next/link";

import classes from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <Link href="/">
        <h1>Logo</h1>
      </Link>
      <ul className={classes.list}>
        <Link className={classes.link} href="/autos">
          <li>Autos</li>
        </Link>
        <Link className={classes.link} href="/impressum">
          <li>Imprssum</li>
        </Link>
        <Link className={classes.link} href="/kontakt">
          <li>Kontakt</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
