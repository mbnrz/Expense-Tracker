/* eslint-disable array-callback-return */
import React from "react";

const Result = ({ url }) => {
  let plus = 0;
  let minus = 0;
  return (
    <div>
      {url.map((data) => {
        if (data.amount > 0) {
          plus += data.amount;
        } else {
          minus += Math.abs(data.amount);
        }
      })}

      <div
        style={{ boxShadow: " 1px 3px 13px rgba(0, 0, 0, 0.527)" }}
        className="result"
      >
        <div className="income">
          <h3>درآمد</h3>
          <h3 className="pay1">{plus} تومان </h3>
        </div>
        <hr className="hr" />
        <div className="expense">
          <h3>هزینه</h3>
          <h3 className="pay2">{minus} تومان </h3>
        </div>
      </div>
    </div>
  );
};

export default Result;
