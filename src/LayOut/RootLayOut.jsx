import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayOut = () => {
  return (
    <div>
     <Navbar />
      <Outlet></Outlet>
      <Footer />



      {/* Toast Container */}
       <ToastContainer />
    </div>
  );
};

export default RootLayOut;