import React, { useState } from "react";
import "./Header.css";
import List from "./List";
import { useFetch } from "../hooks/useFetch";
import Result from "./Result";
import Balance from "./Balance";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Header = () => {
  let [name, setName] = useState("");
  let [amount, setAmount] = useState(0);
  let amount1 = parseFloat(amount);
  let { data, isLoading, error } = useFetch("https://k4x8gn-3000.csb.app/task");

  const ClickHandler = () => {
    axios.post("https://k4x8gn-3000.csb.app/task", {
      name: name,
      amount: amount1,
    });
    window.setTimeout(() => {
      window.location.reload();
    }, 1000);
    setName("");
    setAmount("");
  };

  let navigate = useNavigate();
  const languageHandler = () => {
    navigate("/Fa");
  };

  return (
    <form>
      <div className="container">
        {/* change language */}

        <div
          class="containe"
          onClick={languageHandler}
          style={{
            position: "relative",
            right: "-267px",
            top: "-5.3px",
            marginRight: "230px",
          }}
        >
          <div class="languageDropdown">
            <p
              style={{
                marginBottom: "-15px",
                fontSize: "14px",
                marginTop: "20px",
              }}
            >
              FA
            </p>
            <p>
              <span
                style={{ marginTop: "-1px" }}
                class="material-symbols-outlined"
              >
                language
              </span>
            </p>
          </div>
        </div>

        {/* change language */}

        <h1 className="title">Expense Tracker</h1>
        <div>
          {error && <p className="error">{error}</p>}
          {isLoading && <p className="loading">"Loading...</p>}
          {data && <Balance url={data} />}
        </div>
        <div>
          {error && <p className="error">{error}</p>}
          {isLoading && <p className="loading">"Loading...</p>}
          {data && <Result url={data} />}
        </div>
        <br />
        <br />
        <br />
        <h2 id="balancee">History</h2>
        <hr />

        <ul className="list">
          {/* const sign = task.amount > 0 ? "+" : "-"; */}

          {/* <li className={"plus"}>
            book
            <span>1000</span>
            <button className="delete-btn">x</button>
          </li> */}
          <div>
            {error && <p className="error">{error}</p>}
            {isLoading && <p className="loading">"Loading...</p>}
            {data && <List url={data} />}
          </div>
        </ul>
        <br />
        <h2 className="x" id="balanceee">
          Add New Transaction{" "}
        </h2>
        <hr />
        <h4 id="title1">Name :</h4>
        <input
          style={{
            borderRadius: "4px",
            border: "none",
            boxShadow: "1px 3px 13px rgba(0, 0, 0, 0.227)",
            height: "30px",
            paddingLeft: "10px",
          }}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          id="input"
          type="text"
          placeholder="Enter Name..."
        />
        <h4 id="amount1">Amount : </h4>
        <input
          style={{
            borderRadius: "4px",
            border: "none",
            boxShadow: "1px 3px 13px rgba(0, 0, 0, 0.227)",
            height: "30px",
            paddingLeft: "10px",
          }}
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          id="input"
          type="number"
          placeholder="Enter Amount..."
        />
        <br />
        <button className="btn" type="button" onClick={ClickHandler}>
          Add Transaction
        </button>
      </div>
    </form>
  );
};

export default Header;
