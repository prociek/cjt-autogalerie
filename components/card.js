import Image from "next/image";

import classes from "./card.module.css";

const Card = ({ image, marke, modell, baujahr, preis }) => {
  return (
    <li className={classes.card}>
      <div>
      <Image src={image} alt={marke + modell} width={640} height={212} />

      </div>
      <div>
        <h2>{marke + " " + modell}</h2>
        <time>{baujahr}</time>
        <span className={classes.preis}>{preis}</span>
      </div>
    </li>
  );
};

export default Card;
