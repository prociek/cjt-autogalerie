import React, { useState } from "react";

import classes from "./add-auto.module.css";

const AddAuto = () => {
  const [marke, setMarke] = useState("");
  const [modell, setModell] = useState("");
  const [baujahr, setBaujahr] = useState("");
  const [image, setImage] = useState("");
  function onSubmitHandler(e) {
    e.preventDefault();
    fetch("/api/backend/add-auto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ marke, modell, baujahr, image }),
    });
  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className="form-control">
        <label htmlFor="marke">Marke</label>
        <input
          onChange={(e) => setMarke(e.target.value)}
          type="text"
          id="marke"
        />
      </div>

      <div className="form-control">
        <label htmlFor="modell">Modell</label>
        <input
          onChange={(e) => setModell(e.target.value)}
          type="text"
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
        <label htmlFor="image">Image</label>
        <input
          onChange={(e) => setImage(e.target.value)}
          type="image"
          id="image"
        />
      </div>
      <button>submit</button>
    </form>
  );
};

export default AddAuto;
