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
        <li>
          <Link className={classes.link} href="/autos">
            Autos
          </Link>
        </li>

        <li>
          <Link className={classes.link} href="/impressum">
            Imprssum
          </Link>
        </li>

        <li>
          <Link className={classes.link} href="/leistungen">
            Leistungen
          </Link>
        </li>

        <li>
          <Link className={classes.link} href="/kontakt">
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
