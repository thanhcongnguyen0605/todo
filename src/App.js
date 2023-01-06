import React from "react";
import { RecoilRoot } from "recoil";
import NewList from "./NewList";
import CompletedList from "./CompletedList";
import Overview from "./Overview";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import FormAddNewRecord from "./components/FormAddNewRecord";

const goToAddToDo = () => (window.location = "/addToDo");
const goToToDoList = () => (window.location = "/toDoList");

const ListData = (data) => (
  <div className="title">
    <NewList />

    <CompletedList />
  </div>
);

function App() {
  return (
    <div>
      <RecoilRoot>
        <div className="App">
          <header className="App-header">
            <h1>To-do List</h1>
          </header>

          <Overview />

          <button onClick={goToToDoList}>List To Do</button>
          <button onClick={goToAddToDo}>Add New List</button>

          <Routes>
            <Route path="/addToDo" element={<FormAddNewRecord />} />
            <Route path="/toDoList" element={<ListData />} />
          </Routes>
        </div>
      </RecoilRoot>
    </div>
  );
}

export default App;
