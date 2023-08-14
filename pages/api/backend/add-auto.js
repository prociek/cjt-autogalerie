export default function handler(req, res) {
  fetch(
    "https://cjt-autogalerie-default-rtdb.europe-west1.firebasedatabase.app/autos.json",
    {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  // res.stauts(201).json({message: "done"})
}
