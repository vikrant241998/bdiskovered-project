import React from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SearchIcon from "@mui/icons-material/Search";
import CropFreeIcon from '@mui/icons-material/CropFree';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Crop } from "@mui/icons-material";
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="nav-Container flex">
        <div className="nav-left-box w-1/5 h-20 bg-white0 "></div>
        <div className="nav-right-box w-4/5 h-20 bg-white0 flex">
          
          <div className="nav-left  h-20 bg-white flex justify-evenly items-center">
            <DehazeIcon className="DehazeIcon-icon mx-3" style={{ color: "#9c9fa6"}} />
            <SearchIcon className="SearchIcon-icon mx-2" style={{ color: "#9c9fa6"}}/>
            <input type="text" id="search" placeholder=" &nbsp; Search projects" className="input-search outline-none border-none rounded w-44 h-5 text-xs" />
          </div>

          <div className="nav-right h-20 bg-white-400 flex justify-end items-center">
          <a href="https://www.google.com/" > 
            <CropFreeIcon style={{ color: "#9c9fa6",   fontSize: "18px"}} />
          </a>
            <div className="dot-icon mx-10">
              <span className="dot-span w-1.5 h-1.5 rounded-full" style={{backgroundColor: "#ffc107"}}>.</span>
              <a href="https://www.google.com/" > 
            <EmailIcon style={{ color: "#9c9fa6",  fontSize: "20px", marginBottom:"5px"}}/>
          </a>
            
            </div>
            
            <div className="dot-icon">
              <span className="dot-span w-1.5 h-1.5 rounded-full" style={{backgroundColor: "#dc3545"}}>.</span>
          <a href="https://www.google.com/" > 
            <NotificationsNoneIcon style={{ color: "#9c9fa6", fontSize:"22px", marginBottom:"4px"}}/>
          </a>
          
            </div>
            
            <span className="img-icon">
            <img src="faces/face1.jpg" className="img-profile" />
              <span className="img-span mx-3">.</span>
              <span className="profile-text">David Greymaax 
                <span className="aero">&#8964;</span>
              </span>
            </span>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
