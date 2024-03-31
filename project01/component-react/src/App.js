import React from "react";
import MyComponent from "./MyComponentClass";
import Counter from "./Counter";
import Say from "./Say";

const App = () => {
  return (
    <div>
      <Say />
      <Counter />
      <MyComponent name="Class" />
      <hr />
      <MyComponent name="SideBar" />
      <hr />
      <MyComponent><s>리액트</s>입니다.</MyComponent>
    </div>
  );
};

export default App;