export async function getAllCars(path) {
  const response = await fetch(
    `https://cjt-autogalerie-default-rtdb.europe-west1.firebasedatabase.app/${path}.json`
  );
  const data = await response.json();

  const Cars = [];
  for (const key in data) {
    const car = { id: key, ...data[key] };
    Cars.push(car);
  }
  return Cars;
}
