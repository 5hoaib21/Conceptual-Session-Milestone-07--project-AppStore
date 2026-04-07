import React from 'react';
import navLogo from '../../assets/Image/logo.png'
import { Link } from 'react-router';
import { FaGithubAlt } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className='shadow-md'>
    <div className='flex justify-between items-center gap-4 bg-white container mx-auto p-4'>

    <img src={navLogo} alt="" className='w-12.5' />
    <ul className='flex justify-between items-center gap-3 font-semibold'>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/apps'}>Apps</Link></li>
      <li><Link to={'/installedApps'}>Installation</Link></li>
      
    </ul>
    <button className='btn bg-purple-500 text-white'><FaGithubAlt />  Contribute</button>
    </div>
    </nav>
  );
};

export default Navbar;