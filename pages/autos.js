import Card from "../components/card";
import { getAllCars } from "../utils/api";

import classes from "./autos.module.css";

const Autos = ({ cars }) => {
  return (
    <ul className={classes["autos-list"]}>
      {cars.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const cars = await getAllCars();

  return {
    props: {
      cars,
    },
  };
}

export default Autos;
