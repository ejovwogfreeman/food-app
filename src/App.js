import React, { useEffect, useState, Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
// import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";

function App() {
  
  const [show, setShow] = useState(-100);
  const goUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    window.addEventListener(
      "scroll",
      (scroll = () => {
        let top = window.pageYOffset || document.documentElement.scrollTop;
        if (top > 500) {
          setShow(10);
        } else {
          setShow(-100);
        }
      })
    );
    //goUp();

    try {
      let data = JSON.parse(localStorage.getItem("token"));
      //console.log(data)
      if (data) {
        fetch(process.env.REACT_APP_API_URL + "api/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": data.data,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            //console.log(data)
            setUsername(data.username);
            setAffiliate(data.affiliate);
            setCart(data.cart.length);
            setEmail(data.email);
          })
          .catch((error) => {
            //console.log(error);
            return;
          });
      }
    } catch (error) {
      //console.log(error);
      return;
    }
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return (
    <Router>
      {/* <Navbar/> */}
        <Routes>
          <Route
            exact
            path="/"
            element={<Home/>}
          />
          {/* {<Route path="/*" element={<Page404 />} /> } */}
          <Route
            path='/signup'
            element = {<Signup/>}
          />
          <Route
            path='/signin'
            element = {<Signin/>}
          />
          <Route
            path='/dashboard'
            element = {<Dashboard/>}
          />
        </Routes>
        <Box
          sx={{
            "& > :not(style)": {
              m: 1,
              position: "fixed",
              bottom: show,
              right: 20,
              transition: "all 1s",
            },
          }}
        >
          <Fab size="medium" color="#E2B887" aria-label="top" onClick={goUp}>
            <KeyboardArrowUpRoundedIcon sx={{ fontSize: 30 }} />
          </Fab>
        </Box>
    </Router>
  );
}

export default App;