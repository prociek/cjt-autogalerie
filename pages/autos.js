import AutosList from "@/components/autosList";
import React from "react";
import { getAllCars } from "../utils/api";

const Autos = ({ cars }) => {
  return <AutosList cars={cars} />;
};

export async function getStaticProps() {
  const cars = await getAllCars("autos");

  return {
    props: {
      cars,
    },
  };
}
export default Autos;
