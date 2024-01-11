import Link from "next/link";

const Menu = () => {
  return (
    <ul>
      <li>
        <Link href="/backend/neue-auto">Neue Auto</Link>
      </li>
      <li>
        <Link href="/backend/kaufen">Kaufen</Link>
      </li>
    </ul>
  );
};

export default Menu;
