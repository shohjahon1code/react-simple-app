import React, { useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const incrementReducer = (state, action) => {
  if (action.type === "INCREMENT_NUM") {
    return {
      value: state.value + 1,
    };
  }
};

const Home = (props) => {
  const [incrementState, dispatchIncr] = useReducer(incrementReducer, {
    value: 0,
  });

  const incrementhandler = () => {
    dispatchIncr({ type: "INCREMENT_NUM" });
  };

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <button onClick={incrementhandler}>click</button>
      <p>{incrementState.value}</p>
    </Card>
  );
};

export default Home;
