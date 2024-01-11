import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

import classes from "./navigation.module.css";

const Navigation = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  function openMenu() {
    setIsNavActive(true);
  }
  function closeMenu() {
    setIsNavActive(false);
  }

  return (
    <nav className={classes.navigation}>
      <Link onClick={closeMenu} href="/">
        <h1>Logo</h1>
      </Link>
      {isNavActive ? (
        <>
          <button className={classes.toggle} onClick={closeMenu}>
            <RxCross2 />
          </button>

          <ul className={classes.list}>
            <li>
              <Link onClick={closeMenu} className={classes.link} href="/kaufen">
                Ich kauf dein Auto
              </Link>
            </li>
            <li>
              <Link onClick={closeMenu} className={classes.link} href="/autos">
                Autos
              </Link>
            </li>

            <li>
              <Link
                onClick={closeMenu}
                className={classes.link}
                href="/impressum"
              >
                Imprssum
              </Link>
            </li>

            <li>
              <Link
                onClick={closeMenu}
                className={classes.link}
                href="/leistungen"
              >
                Leistungen
              </Link>
            </li>

            <li>
              <Link
                onClick={closeMenu}
                className={classes.link}
                href="/kontakt"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </>
      ) : (
        <button className={classes.toggle} onClick={openMenu}>
          <GiHamburgerMenu />
        </button>
      )}
    </nav>
  );
};

export default Navigation;
