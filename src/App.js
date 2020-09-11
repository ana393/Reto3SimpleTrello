import React from "react";
import Header from "./components/Header/Header.jsx";
import Board from "./components/Board/Board.jsx";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./Redux/store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Board />
      </div>
    </Provider>
  );
}

export default App;
