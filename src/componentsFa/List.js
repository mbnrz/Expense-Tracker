import axios from "axios";
import React from "react";

const List = ({ url }) => {
  const deletHandler = (id) => {
    axios.delete(`https://k4x8gn-3000.csb.app/task/${id}`);
    window.setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <>
      {url.map((data) => {
        let sign2 = data.amount > 0 ? "plus" : "minus";
        return (
          <li key={data.id} className={sign2}>
            {data.name}
            <span style={{ position: "relative", right: "-80px" }}>
              تومان {Math.abs(data.amount)}
            </span>
            <span
              onClick={(id) => {
                deletHandler(data.id);
              }}
            >
              <span
                onClick={(id) => {
                  deletHandler(data.id);
                }}
              >
                <span
                  onClick={(id) => {
                    deletHandler(data.id);
                  }}
                >
                  <button
                    onClick={(id) => {
                      deletHandler(data.id);
                    }}
                    className="delete-btn"
                  >
                    <span
                      onClick={(id) => {
                        deletHandler(data.id);
                      }}
                    >
                      X
                    </span>
                  </button>
                </span>
              </span>
            </span>
          </li>
        );
      })}
    </>
  );
};

export default List;
