import React from "react";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import "./App.css";
import Settings from "./Pages/Settings";
import Usage from "./Pages/Usage";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Header from "./components/Header";
import Details from "./Pages/Details";
import NotFound from "./Pages/NotFound";


function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header/>
        </div>
        <Routes>
          <Route path="usage" element={<Usage />} />
          <Route path="settings" element={<Settings />} />
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="details/:userId" element={<Details/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
