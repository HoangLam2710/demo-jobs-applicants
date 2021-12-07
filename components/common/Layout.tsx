import React, { useContext, useEffect } from "react";
import Router from "next/dist/client/router";
import { ToastContainer } from "react-toastify";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import checkLogin from "../../lib/utils/checkLogin";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }: any) => {
  useEffect(() => {
    const currentUser = window.localStorage.getItem("user");
    const isLoggedIn = checkLogin(currentUser);
    if (!isLoggedIn) {
      Router.push("/");
    }
  }, []);

  return (
    <>
      <Sidebar />
      <div className="mainContent">
        <Navbar />
        {children}
      </div>
      {/* show popup alert */}
      <ToastContainer />
    </>
  );
};

export default Layout;
