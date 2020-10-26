import React from "react";
import SideBar from "./Sidebar.jsx";
import Userdata from "./UserData/Userdata.jsx";

function Dashboard() {
  return (
    <div className="container p-0 m-0">
      <div className="row">
        <div className="d-none d-md-block d-lg-block d-xl-block">
          <SideBar />
        </div>
        <div className="col mt-5">
          <Userdata />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
