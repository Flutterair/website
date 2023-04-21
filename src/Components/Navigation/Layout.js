import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import CreateAccount from "../Pages/CreateAccount";
import ErrorPage from "../Pages/ErrorPage";
import LoginPage from "../Pages/LoginPage";

export default function Layout() {
  return (
    <>
      {/* Routes Defined also with component to load up */}
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/createaccount" element={<CreateAccount/>}></Route>
        <Route path="/admin.dashboard/signin" element={<LoginPage/>}></Route>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </>
  );
}
