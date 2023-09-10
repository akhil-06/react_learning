import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// JSX(transpiled before t reaches Js) => parcel => babel is doing

//JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)
// const JSXheading = <h1>Akhil form JSX</h1>
//if more than one line tag enclose in ()
const heading2 = (<h1>
  Hello my name is akhil sharma, I am from Haryana!!!!
</h1>)
// console.log(JSXheading);

const HeadingComponent = () => {
  return <h1>This is functional Component</h1>;
};


const TitleComponent = () => {
  return (<h1>This is title component 😇</h1>)
}
const HeadingComponent2 = () => (
  <div id="container">
    <TitleComponent/>
    <h1 className="heading1">This is functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading2);
root.render(<HeadingComponent2/>)

// React Component
