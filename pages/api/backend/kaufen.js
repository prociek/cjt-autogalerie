export default function handler(req, res) {
  fetch(
    "https://cjt-autogalerie-default-rtdb.europe-west1.firebasedatabase.app/kaufen.json",
    {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).catch((err) => console.log(err));
  res.status(201).json({ message: "done" });
}
