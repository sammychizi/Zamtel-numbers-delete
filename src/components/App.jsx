import React, { useState } from "react";
import NoInput from "./Errors";
import Delete, { Success } from "./Delete";
import { pendingActive } from "../services/pendingActive";

function App() {
  const [msisdn, setMsisdn] = useState("");
  const [error, seterror] = useState(false);
  const [view, setView] = useState(false);
  const [info, setInfo] = useState("");

  // attempt to dim background when delete card is displayed
  // function dimBackground() {
  //   document.getElementsByClassName("card").style.filter = "blur(5px)";
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (msisdn === "" || msisdn.length < 12) {
      seterror(true);
    } else {
      seterror(false);
      // setMsisdn(event.target.value);
      setView(true);
      // dimBackground();
    }
  };

  const handleChange = (event) => {
    setMsisdn(event.target.value);
  };

  console.log("Iam msisdn ", msisdn);

  return (
    <div className="container">
      {/* <Success /> */}
      {/* <Delete /> */}
      <div className="card">
        <h1>Enter MSISDN</h1>
        {error ? <NoInput /> : null}
        {view ? <Delete delete={msisdn} /> : null}
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            onChange={handleChange}
            placeholder="260955111111"
            value={msisdn}
          />
          <button className="button" type="submit" required>
            Delete
          </button>
        </form>
        <div>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
