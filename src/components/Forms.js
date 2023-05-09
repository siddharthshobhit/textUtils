import React, { useState } from "react";

export default function Forms(props) { 
  // useText("Tanvi");
  let entyeredText;
  let wordArray = [];
  const Capitalise = () => {
    const lower = text.toLowerCase();
    useText(lower.charAt(0).toUpperCase() + lower.slice(1));
    props.showAlert("success", "Capitalized the text");
  };

  const LowerCase = () => {
    useText(text.toLowerCase());
    props.showAlert("success", "Converted text to lower case");
  };

  const UpperCase = () => {
    useText(text.toUpperCase());
    props.showAlert("success", "Converted text to upper case");
  };

  const RemoveExtraSpace = () => {
    let allText = text.split(" ");
    let pushIntoArray = [];
    allText.map((element) => { 
      if (element != "") {
        pushIntoArray.push(element);
      }
    }); 
    useText(pushIntoArray.join(" "));
    props.showAlert("success", "Removed extra space");
  };

  const CountAllOccurance = () => {
    let strArray = text.split("");
    strArray.filter((x) => x);
    let newArray = JSON.parse(JSON.stringify(strArray));
    let pushIntoArray = [];
    strArray.forEach((element) => {
        let count = 0; 
      if (element != " ") {
        newArray.forEach((element1) => {
          if (element1 != " " && element == element1) {
            count++;
          }
        });
        if (element && count) pushIntoArray.push(element + count);
        let uniqueArray = [...new Set(pushIntoArray)];
        let uniqueString;
        uniqueArray.forEach((element) => {
          if (element) {
            if (uniqueString) {
              uniqueString = uniqueString + element;
            } else {
              uniqueString = element;
            }
          }
        });
           countOccurance(uniqueString);
      }

     
      props.showAlert("success", "Counting all occurance");
    });
  };

  const HandleChnage = (event) => {
      entyeredText = event.target.value; 
      if (entyeredText) wordArray = entyeredText.split(" "); 
    useText(event.target.value);
  };

  const [text, useText] = useState("");

  //   const [textArray, setText] = useState('');

  const [allText, countOccurance] = useState("");
  return (
    <div
      style={{
        backgroundColor: props.reqProps.backgroundColor,
        color: props.reqProps.color,
      }}
    >
      <div
        className="container"
        style={{
          backgroundColor: props.reqProps.backgroundColor,
          color: props.reqProps.color,
        }}
      >
        <h1 className="my-3">{props.header}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={HandleChnage}
          rows="8"
          name="myInput"
          style={{
            backgroundColor: "grey",
            color: props.reqProps.color,
          }}
        />
        <button
          className={`btn btn-${props.reqProps} mt-3 mx-2`}
          onClick={Capitalise}
          style={{
            backgroundColor: props.reqProps.color,
            color: props.reqProps.backgroundColor,
          }}
        >
          Capitalise
        </button>
        <button
          className={`btn btn- btn-${props.reqProps} mt-3 mx-2`}
          onClick={UpperCase}
          style={{
            backgroundColor: props.reqProps.color,
            color: props.reqProps.backgroundColor,
          }}
        >
          Upper Case
        </button>
        <button
          className={`btn btn- btn-${props.reqProps} mt-3 mx-2`}
          style={{
            backgroundColor: props.reqProps.color,
            color: props.reqProps.backgroundColor,
          }}
          onClick={LowerCase}
        >
          Lower Case
        </button>
        <button
          className={`btn btn- btn-${props.reqProps} mt-3 mx-2`}
          onClick={CountAllOccurance}
          style={{
            backgroundColor: props.reqProps.color,
            color: props.reqProps.backgroundColor,
          }}
        >
          Count Occurance
        </button>
        <button
          className={`btn btn-${props.reqProps} mt-3 mx-2`}
          style={{
            backgroundColor: props.reqProps.color,
            color: props.reqProps.backgroundColor,
          }}
          onClick={RemoveExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>
      <div className="container my-2">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").filter((x) => x.length != 0).length} words,{" "}
          {text.split("").filter((x) => x != " ").length} characters,{" "}
          {0.08 * text == "" ? 0 : text?.split(" ").length} minutes to read it.
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to print here"}</p>
        <h2>Occurance</h2>
        <p>{allText}</p>
      </div>
    </div>
  );
}
