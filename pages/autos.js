import React from "react";

import { getAllCars } from "../utils/api";

const Autos = ({ cars }) => {
  return (
    <div>
      {cars.map((car) => (
        <li key={car.id}>{car.marke}</li>
      ))}
    </div>
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
