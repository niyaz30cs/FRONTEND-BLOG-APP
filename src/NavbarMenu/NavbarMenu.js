import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Routes, Route } from "react-router-dom";
import "./NavbarMenu.css";
import Home from "../Component/Home";
import Bollywood from "../Component/Bollywood";
import Hollywood from "../Component/Hollywood";
import Technology from "../Component/Technology";
import Fitness from "../Component/Fitness";
import Food from "../Component/Food";
import DataPackage from "../DataStore/DataPackage";
import Details from "../DetailsComponent/Details";

function NavbarMenu() {
  // console.log("hello");
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar2">
        <div className="mainsiren">
          <div className="head2">
            <div className="bend2">The</div>
            <div className="siren">Siren</div>
          </div>
        </div>
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* <li>
              <NavLink
                to="/"
                id="gohome"
                // activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                <div className="head3">
                  <div className="bend2">The</div>
                  <div className="siren">Siren</div>
                </div>
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                // exact
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/bollywood"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Bollywood
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/hollywood"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Hollywood
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/technology"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Technology
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/fitness"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Fitness
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/food"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Food
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ?"fas fa-times" : "fas fa-bars"}></i> */}
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
      <DataPackage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/hollywood" element={<Hollywood />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/food" element={<Food />} />
          <Route path="/Details/:id" element={<Details/>}/>
        </Routes>
      </DataPackage>
    </>
  );
}

export default NavbarMenu;
