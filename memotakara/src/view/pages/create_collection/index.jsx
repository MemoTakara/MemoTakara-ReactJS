import "./index.css";
import React, { useState } from "react";
import { memoData } from "../../../data/data.jsx";

function CreateCollection() {
  const [collections, setCollections] = useState(memoData);

  const addNewCollection = () => {
    const newCollection = {
      id: collections.length,
      title: "New Collection",
      rate: 0,
      cards: 0,
      new: 0,
      learn: 0,
      due: 0,
      writing: false,
      tags: [],
      front_lang: "en",
      back_lang: "vi",
      create_date: "2024-07-14",
      privacy: "public",
      create_by: "@newuser",
      flashcard: [],
    };
    setCollections([...collections, newCollection]);
  };

  return (
    <div>
      <h1>CreateCollection</h1>
      <ul>
        {collections.map((collection) => (
          <li key={collection.id}>{collection.title}</li>
        ))}
      </ul>
      <button onClick={addNewCollection}>Add New Collection</button>
    </div>
  );
}

export default CreateCollection;
