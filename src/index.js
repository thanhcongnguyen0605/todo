import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

const rootElement = document.getElementById("root");

const getData = async () => {
  const data = window.localStorage.getItem("data");
  if (data) {
    console.log("data from LocalStorage", data);
  } else {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    if (result.status === 200) {
      console.log("data from AXIOS get", result.data);
      localStorage.setItem("data", JSON.stringify(result.data.slice(0, 50)));
    } else {
      throw new Error("Can not get data");
    }
  }
};
getData();

ReactDOM.render(
  <BrowserRouter>
    <script>{}</script>
    <App />
  </BrowserRouter>,
  rootElement
);
