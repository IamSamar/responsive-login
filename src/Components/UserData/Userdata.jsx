import React from "react";
import "../../App.css";
import UserTable from "./UserTable.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

function Userdata(props) {
  // declaring variables for active users , inactive users, apidata and to show loader
  const [activeUsers, getActiverUsers] = useState(0);
  const [inactiveUsers, getInactiveUsers] = useState(0);
  const [apiData, getApiData] = useState([]);
  const [showLoader, setLoader] = useState(false);

  const getUsers = async () => {
    setLoader(true);
    // making api call to get the data
    await axios
      .post(
        "https://ic3haoorgj.execute-api.ap-south-1.amazonaws.com/api/auth",
        {
          username: "developer@uitest.com",
          password: "react2020",
        }
      )
      .then((resp) => {
        // receving response and loading response in variables
        getActiverUsers(resp.data.data.activeUsers);
        getInactiveUsers(resp.data.data.inactiveUsers);
        getApiData(resp.data.data.userLogs);
        setLoader(false);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    //calling function to get user data through api
    getUsers();
    return () => {};
  }, []);

  return (
    <>
      {/* loader variable is true then show loader else show content */}
      {showLoader ? (
        <div class="spinner-border text-success loader" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <div className="row mt-5">
            <div className="col-sm">
              <div className="background m-0 p-0">
                <div className="active-user-container shadow p-1 mb-2 pl-5 bg-white rounded">
                  {/* Active Users Loader here */}
                  <p className="mt-2">Active Users</p>
                  <p className="font-weight-bold display-4">{activeUsers}</p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="background m-0 p-0">
                <div className="active-user-container shadow p-1 mb-2 pl-5 bg-white rounded">
                  {/* Inactive Users Loaded Here */}
                  <p className="mt-2">In Active Users</p>
                  <p className="font-weight-bold display-4">{inactiveUsers}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="shadow p-1 mb-2 pl-5 bg-white rounded">
                <p className="mt-3 mb-5">User Logs</p>
                {/* table component called here */}
                <UserTable data={apiData} />
                {/* table component ends */}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Userdata;
