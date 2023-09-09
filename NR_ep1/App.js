import React from "react";
import ReactDOM  from "react-dom/client";


const heading = React.createElement("h1", {id:"heading1"}, "This is me Akhil Sharma")
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);



// JSX(transpiled before t reaches Js) => parcel => babel is doing


//JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)
const JSXheading = <h1>Akhil form JSX</h1>
//if more than one line tag enclose in ()
const heading2 = (<h1>
  Hello my name is akhil sharma, I am from Haryana!!!!
</h1>)

console.log(JSXheading);
root.render(JSXheading);
