import React from "react";
import TForm from "./TForm";
import "./TeamForm.css";

function TeamForm() {
  return (
    <div>
        <div className="formTitle">
            Find your future teammates!
        </div>

        <TForm/>

        <div className="disclaimerTxt">
            Once you submit this form, you will receive a confirmation email that we have received your submission.
            Soon, you will receive an email containing contact information of your teammates.
        </div>
    </div>
  );
}

export default TeamForm;
