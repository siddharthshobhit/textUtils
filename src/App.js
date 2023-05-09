import "./App.css";
import Navbar from "./components/Navbar";
import Forms from "./components/Forms";
import About from "./components/About";
import React, { useState } from "react";
import Alerts from "./components/Alerts";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App(props) {
  let newObj = [
    {
      name: "Sid",
      address: "Noida",
    },
  ];

  let navObj = {
    name: "TextUtils",
    homeText: "Home",
    aboutText: "About",
  };

  let copiedObj = JSON.parse(JSON.stringify(newObj));
  copiedObj[0].name = "SIDD";
  const [mode, setMode] = useState({ backgroundColor: "#FFF", color: "black" });

  const [alert, setAlert] = useState(null);

  const showAlert = (type, message, color) => {
    setAlert({
      type: type,
      message: message,
      color: color,
    });

    // setTimeout(() => {
    //   setAlert(null)
    // }, 3000);
  };
  // setInterval(() => {
  // }, 2000);

  const toggleMode = () => {
    if (mode.backgroundColor === "#FFF") {
      setMode({ backgroundColor: "#676464", color: "#FFF" });
      document.body.style.backgroundColor = "#676464";
      showAlert("warning", "Do you really wanth to switch the theme?");
    } else {
      setMode({ backgroundColor: "#FFF", color: "black" });
      document.body.style.backgroundColor = "#fff";
      showAlert("success", "Do you really wanth to switch the theme?");
    }
  };

  const changeTheme = (e) => {
    if (e.target.value === "danger") {
      // document.body.style.backgroundColor = "#dc3545";
      setMode({ backgroundColor: "#dc3545", color: "black" });
      document.body.style.backgroundColor = "#dc3545";
      // showAlert("warning", "Do you really wanth to switch the theme?");
    } else if (e.target.value === "warning") {
      setMode({ backgroundColor: "#ffc107", color: "black" });
      document.body.style.backgroundColor = "#ffc107";
    } else {
      setMode({ backgroundColor: "#198754", color: "black" });
      document.body.style.backgroundColor = "#198754";
      // showAlert("success", "Do you really wanth to switch the theme?");
    }
  };

  return (
    <div
      style={{
        backgroundColor: mode.backgroundColor,
        color: mode.color,
      }}
    >
      <Router>
        <Navbar
          name={navObj.name}
          homeText={navObj.homeText}
          aboutText={navObj.aboutText}
          mode={mode}
          toggleMode={toggleMode}
          reqProps={mode}
          changeTheme={changeTheme}
        ></Navbar>
        <Alerts alert={alert} />
        <div className="container">
          <Routes>
            <Route
              path="/textUtils"
              element={
                <Forms
                  header="Enter Text To Analyze"
                  reqProps={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
            <Route path="/about" element={<About reqProps={mode} />}></Route>
            {/* <Route
              path="/"
              element={
                <Forms
                  header="Enter Text To Analyze"
                  reqProps={mode}
                  showAlert={showAlert}
                />
              }
            ></Route> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
