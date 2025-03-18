import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import InventoryList from "./components/InventoryList.jsx";
import InventoryForm from "./components/InventoryForm.jsx";
import "./App.css";


const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<InventoryList />} />
        <Route path="/add-item" element={<InventoryForm/>}/>
      </Routes>
    </Router>
  );
};

export default App;