import React from 'react';
import { FaHome, FaWallet } from "react-icons/fa";
import { IoMdReorder } from "react-icons/io";
import { FaRegUser, FaPenToSquare } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";
import { PiPencilSimple } from "react-icons/pi";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { CiChat1 } from "react-icons/ci";
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <div className="layout-container">
        <nav className='Sidebar'>
          <h1 style={{ fontWeight: '700px', textAlign: 'center' }}><b>Sedap.</b></h1>
          <p >ModernAdminDashboard</p>
          <br /><br /><br />
          <div className='Links'>
            <ul>
              <Link to='/'><li><FaHome size={20} /> Dashboard</li></Link><br />
              <Link to='/orderlist'><li><IoMdReorder size={20} /> Order List</li></Link><br />
              <Link to='/customer'><li><FaRegUser size={15} /> Customer</li></Link><br />
              <Link to='/analytics'><li><SiGoogleanalytics size={20} /> Analytics</li></Link><br />
              <Link to='/reviews' ><li><PiPencilSimple size={20} /> Reviews</li></Link><br />
              <Link to='/food'><li><MdEmojiFoodBeverage size={20} /> Foods</li></Link><br />
              <Link to='/FoodDetails' ><li><FaPenToSquare size={20} />Foods Details</li></Link><br />
              <Link to='/CustomerDetails'><li><FaRegUser size={15} />Customer Details</li></Link><br />
              <Link to='/Calender'><li><SlCalender size={20} /> Calender</li></Link><br />
              <Link to='/Chat'><li><CiChat1 size={20} /> Chat</li></Link><br />
              <Link to='/Wallet'><li><FaWallet size={20} /> Wallet</li></Link><br />
            </ul>
          </div>
          <br />
        </nav>
        <div className="content-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};








