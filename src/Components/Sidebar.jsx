import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Sidebar() {
  return (
    <div className="background-col  side-bar-width height">
        
      <div className="menuConatiner ml-4 pt-4">
        <div className="mb-5">
            {/* User Link */}
          <Link className="text-white"> Users</Link>
        </div>
        <div className="mb-2">
            {/* Dashboard Link here */}
          <Link className="text-white"> Dashboard</Link>
        </div>
        <div className="mb-2">
            {/* Logs Link Here */}
          <Link className="text-white">Logs</Link>
        </div>
        <div className="mb-2">
            {/* Signout Link */}
          <Link className="text-white">Signout</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
