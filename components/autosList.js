import Card from "./card";

import classes from "./autosList.module.css";

const AutosList = ({ cars }) => {
  return (
    <ul className={classes["autos-list"]}>
      {cars.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </ul>
  );
};

export default AutosList;
