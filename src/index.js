import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { loadWASM } from "onigasm"; // peer dependency of 'monaco-textmate'

// ReactDOM.render(<App />, document.getElementById("root"));

// const Ap = () => {
//   const monacoRef = React.useRef(null);
//   const monacoEditorRef = React.useRef(null);
//   return <MonacoEditor ref={{ monacoRef, monacoEditorRef }} />;
// };

loadWASM("/onigasm.wasm").then(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
