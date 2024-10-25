import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Layout/Header";
import Sidenav from "./components/Layout/Sidenav";
import Homepage from "./components/Home/Home";
import ComboBoxpage from "./components/Components/ComboBoxpage";
import Buttonpage from "./components/Components/Buttonpage";
import ButtonGrouppage from "./components/Components/Buttongrouppage";
import Checkboxpage from "./components/Components/Checkboxpage";
import FloatingActionButtonpage from "./components/Components/FloatingActionButtonpage";
import RadioButtonpage from "./components/Components/RadioButtonpage";
import Ratingpage from "./components/Components/Ratingpage";
import Selectpage from "./components/Components/Selectpage";
import Sliderpage from "./components/Components/Sliderpage";
import Switchpage from "./components/Components/Switchpage";
import Textfieldpage from "./components/Components/Textfieldpage";
import Transferlistpage from "./components/Components/Transferlistpage";
import Togglebuttonpage from "./components/Components/Togglebuttonpage";
import Listpage from "./components/Components/Listpage";
import Tablepage from "./components/Components/Tablepage";
import Tooltippage from "./components/Components/Tooltippage";
import Dialogpage from "./components/Components/Dialogpage";
import Accordionpage from "./components/Components/Accordionpage";
import Aboutpage from "./components/About/About";
import Footer from "./components/Layout/Footer";

const ColoredLine = ({ color, height }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: height
    }}
  />
);

function App() {
  return (
    <Router>
      <nav className="navbar navbar-light sticky-top bg-white flex-md-nowrap p-0">
        <Header />
      </nav>
      <ColoredLine color="blue" height={5} />
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar sideNavScroll">
            <Sidenav />
          </nav>
          <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<Aboutpage />} />
              <Route path="/combobox" element={<ComboBoxpage />} />
              <Route path="/button" element={<Buttonpage />} />
              <Route path="/buttongroup" element={<ButtonGrouppage />} />
              <Route path="/checkbox" element={<Checkboxpage />} />
              <Route path="/floatingactionbutton" element={<FloatingActionButtonpage />} />
              <Route path="/radiobutton" element={<RadioButtonpage />} />
              <Route path="/rating" element={<Ratingpage />} />
              <Route path="/select" element={<Selectpage />} />
              <Route path="/slider" element={<Sliderpage />} />
              <Route path="/switch" element={<Switchpage />} />
              <Route path="/textfield" element={<Textfieldpage />} />
              <Route path="/transferlist" element={<Transferlistpage />} />
              <Route path="/togglebutton" element={<Togglebuttonpage />} />
              <Route path="/list" element={<Listpage />} />
              <Route path="/table" element={<Tablepage />} />
              <Route path="/tooltip" element={<Tooltippage />} />
              <Route path="/dialog" element={<Dialogpage />} />
              <Route path="/accordion" element={<Accordionpage />} />
            </Routes>
          </div>
        </div>
        <ColoredLine color="blue" height={5} />
        <div className="position-relative">
          <div className="position-absolute top-0 end-0">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}


export default App;


