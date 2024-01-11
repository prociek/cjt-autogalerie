import AutosList from "@/components/autosList";
import { getAllCars } from "../../utils/api";

const Kaufen = ({ cars }) => {
  return <AutosList cars={cars} />;
};

export default Kaufen;

export async function getStaticProps() {
  const cars = await getAllCars("kaufen");

  return {
    props: {
      cars,
    },
  };
}
