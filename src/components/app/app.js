import React from "react";
import Header from "../header/header";
import ItemsList from "../items-list/item-list";
import TotalPanel from "../total-panel/total-panel";
import './app.css'

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content-container">
          <ItemsList />
          <TotalPanel />
        </div>
      </div>
    </>
  )
}

export default App;