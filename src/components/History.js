import React from "react";
import { RealTimeUpdate } from "../hooks/RealTimeUpdate";
import { deleteDoc, doc } from "firebase/firestore";
import db from "../FireBase/config";

const History = () => {
  const { collectionn } = RealTimeUpdate("task");
  const deleteHandler = async (id) => {
    try {
      const Delete = doc(db, "task", id);
      await deleteDoc(Delete);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div style={{ margin: "30px 0 0 0" }}>
      <h5 style={{ fontWeight: "550" }}>History</h5>
      <hr />
      <ul id="list">
        {collectionn.map((data) => {
          let sign = data.amount > 0 ? "plus" : "minus";
          return (
            <li className={sign} id="item">
              <div>
                <button
                  onClick={(id) => {
                    deleteHandler(data.id);
                  }}
                  id="deleteBtn"
                >
                  X
                </button>
                <h5>{data.name}</h5>
                <h5>${data.amount}</h5>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
