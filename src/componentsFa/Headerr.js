import React, { useState } from "react";
import "./Header.css";
import List from "./List";
import { useFetch } from "../hooks/useFetch";
import Result from "./Result";
import Balance from "./Balance";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Headerr = () => {
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

  const [show, setShow] = useState(false);
  // let navigate = useNavigate()
  const languageHandler = () => {
    if (show == false) {
      setShow(true);
    }
  };

  let navigate = useNavigate();
  const languageHandlerr = () => {
    navigate("/");
  };

  return (
    <form>
      <div style={{ margin: "-15px" }} className="container">
        {/* change language */}

        <div
          class="containe"
          onClick={languageHandlerr}
          style={{
            position: "relative",
            right: "134.4.5px",
            left: "-21px",
            top: "-5.3px",
            marginRight: "250px",
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
              EN
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

        <h1 className="title">ردیاب هزینه ها</h1>
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
        <h2 style={{ textAlign: "right" }} id="balancee">
          تاریخچه
        </h2>
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
        <h2 style={{ textAlign: "right" }} className="x" id="balanceee">
          اضافه کردن معامله جدید{" "}
        </h2>
        <hr />
        <h4 style={{ textAlign: "right", marginRight: "45px" }} id="title1">
          {" "}
          : نام
        </h4>
        <input
          style={{
            textAlign: "right",
            borderRadius: "4px",
            border: "none",
            boxShadow: "1px 3px 13px rgba(0, 0, 0, 0.227)",
            height: "30px",
            paddingRight: "10px",
          }}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          id="input"
          type="text"
          placeholder="...تایپ نام"
        />
        <h4 style={{ textAlign: "right", marginRight: "45px" }} id="amount1">
          {" "}
          : مقدار
        </h4>
        <input
          style={{
            textAlign: "right",
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
          اضافه کردن معامله
        </button>
      </div>
    </form>
  );
};

export default Headerr;
