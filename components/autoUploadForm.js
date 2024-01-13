import { useState } from "react";
import { storage } from "../firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import classes from "./autoUploadForm.module.css";

const AutoUploadForm = ({ fetchUrl }) => {
  const [marke, setMarke] = useState("");
  const [modell, setModell] = useState("");
  const [baujahr, setBaujahr] = useState("");
  const [preis, setPreis] = useState("");
  const [image, setImage] = useState(null);

  async function uploadImage(e) {
    if (image == null) return;

    const imageRef = ref(storage, `images/${image.name + Math.random()}`);

    await uploadBytes(imageRef, image);
    const url = await getDownloadURL(imageRef);
    return url;
  }

  async function onSubmitHandler(e) {
    e.preventDefault();
    const url = await uploadImage();
    fetch(fetchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ marke, modell, baujahr, image: url, preis }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.message))
      .catch((err) => console.log(err));
  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className="form-control">
        <label htmlFor="marke">Marke</label>
        <input
          onChange={(e) => setMarke(e.target.value)}
          type="text"
          placeholder="Marke"
          id="marke"
        />
      </div>

      <div className="form-control">
        <label htmlFor="modell">Modell</label>
        <input
          onChange={(e) => setModell(e.target.value)}
          type="text"
          placeholder="Modell"
          id="model"
        />
      </div>

      <div className="form-control">
        <label htmlFor="baujahr">baujahr</label>
        <input
          onChange={(e) => setBaujahr(e.target.value)}
          type="date"
          id="baujahr"
        />
      </div>

      <div className="form-control">
        <label htmlFor="preis">preis</label>
        <input
          onChange={(e) => setPreis(e.target.value)}
          type="number"
          step="0.01"
          placeholder="0.00"
          id="preis"
        />
      </div>

      <div className="form-control">
        <label htmlFor="image">Bild</label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          name="bild"
          type="file"
          accept="image/*"
          id="image"
        />
      </div>
      <button>Speichern</button>
    </form>
  );
};

export default AutoUploadForm;
