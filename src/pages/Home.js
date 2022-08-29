import React, { useEffect, Suspense, lazy } from "react";
// import "../css/Home.css";
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Meals from '../components/Meals'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {

  return (
    <div>
      <Navbar/>
      <Header/>
      <Meals/>
      <Newsletter/>
      <Footer/>
    </div>      
  );
};

export default Home;
