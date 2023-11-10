import React, { useEffect, useState } from "react";
import { RealTimeUpdate } from "../hooks/RealTimeUpdate";
import { addDoc, collection } from "firebase/firestore";
import db from "../FireBase/config";

const AddNewTransition = () => {
  let [name, setName] = useState("");
  let [amount2, setAmount2] = useState("0");
  let amount = parseInt(amount2);

  const postHandler = async () => {
    const Post = collection(db, "task");
    await addDoc(Post, {
      name,
      amount,
    });
    setAmount2("");
    setName("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h5 style={{ fontWeight: "550" }}>Add New Transition</h5>
      <hr />
      <h6 style={{ fontWeight: "600" }}>Name : </h6>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="mb-3"
        type="text"
        placeholder="Type Name..."
      />

      <h6 style={{ fontWeight: "600" }}>Amount : </h6>
      <input
        value={amount2}
        onChange={(e) => {
          setAmount2(e.target.value);
        }}
        type="number"
        placeholder="Type Amount..."
      />
      <button onClick={postHandler} className="mt-3" id="addBtn">
        Add Transition
      </button>
    </div>
  );
};

export default AddNewTransition;
