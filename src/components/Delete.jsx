import React, { useState } from "react";
import { pendingActive } from "../services/pendingActive";

function Delete(props) {
  const [info, setInfo] = useState("");

  console.log("Iam delete ", props.delete);
  const msisdn = props.delete;
  // function to delete number
  const onDelete = () => {
    // return
    const { Success, Message } = pendingActive(msisdn);
    if (Success) {
      setInfo(Message);

      console.log("Iam success ", Success, "message:", Message);
    }
    if (!Success) {
      setInfo(Message);
      console.log("Iam not success ", Success, "message:", Message);

    }
  };

  function removeDelete() {
    document.querySelector(".delete-card").style.display = "none";
    window.location.reload();
  }
  return (
    <div className="delete-card">
      <h1>Are you sure you want to delete this number?</h1>
      <button className="delete-button" onClick={onDelete}>
        Yes
      </button>
      <button className="delete-button2" onClick={removeDelete}>
        Cancel
      </button>
    </div>
  );
}

function Success() {
  return (
    <div className="delete-card">
      <h1>Number Deleted Successfully</h1>
      <button className="button">Back</button>
    </div>
  );
}

export default Delete;
export { Success };
