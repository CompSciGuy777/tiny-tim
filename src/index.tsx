import React, { useState } from "react";
import { render } from "react-dom";
import InputGreeter from "./Views/inputGreeter";
import { Button } from "reactstrap";
import { useSpring, animated } from "react-spring";
import TableList from "../src/Views/tablelist";

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.scss";

function App() {
  const [isToggled, setToggle] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const buttonDivProps = useSpring({
    opacity: isToggled ? 0.7 : 1,
    transform: isToggled
      ? "translate3d(100px, 0px, 0px)"
      : "translate3d(0px, 0px, 0px)"
  });
  const subTitleDivProps = useSpring({
    transform: isToggled
      ? "translate3d(0px, 300px, 0px)"
      : "translate3d(0px, 0px, 0px)"
  });

  const titleDivProps = useSpring({
    backgroundColor: isToggled ? "yellow" : "white",
    fontWeight: isToggled ? "bold" : "normal"
  });

  return (
    <>
      <div className="App">
        <animated.h1 style={titleDivProps}>Hello CodeSandbox</animated.h1>
        <animated.h2 style={subTitleDivProps}>
          Start editing to see some magic happen!
        </animated.h2>
        <div
          className="d-flex flex-row justify-content-center
        p-2"
        >
          <input
            className="mx-2"
            type="text"
            name={"firstName"}
            placeholder="First Name"
            onChange={e => {
              setFirstName(e.currentTarget.value);
            }}
          />
          <input
            className="mx-2"
            type="text"
            name={"lastName"}
            placeholder="Last Name"
            onChange={e => {
              setLastName(e.currentTarget.value);
            }}
          />
        </div>
        <animated.div style={buttonDivProps}>
          <Button
            className="fun-button"
            color={"primary"}
            onClick={() => {
              setToggle(!isToggled);
            }}
          >
            Hello
          </Button>
        </animated.div>
        <InputGreeter firstName={firstName} lastName={lastName} />
        {!isToggled && <TableList />}
      </div>
    </>
  );
}

export default App;

const rootElement = document.getElementById("root");
render(<App />, rootElement);
