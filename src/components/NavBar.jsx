import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { NavBarData } from '../utils/NavBarData';
import { CgMenuBoxed } from 'react-icons/cg';
import ResponsiveMenu from './ResponsiveMenu';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../utils/searchSlice';
import { CgSearch } from 'react-icons/cg';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null);
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    
    const handleSearchQuery = (e) => {
        console.log(e.target.value)
        e.preventDefault();
        if(searchTerm.trim()){
        dispatch(setSearchQuery(searchTerm))
        navigate('/filter-data')
    }
    }

  return (
    <>
    <nav className='bg-white w-full h-16 md:h-40 md:drop-shadow-xl drop-shadow-md flex justify-center items-center px-2'>
       <div className='container flex justify-between'>
        <div>
            <img src={Logo} alt='divine-logo' className='h-8 md:h-12 w-20 md:w-44'/>
        </div>
        <div className='pt-1 lg:w-32 hidden lg:block relative'>
           <form onSubmit={handleSearchQuery}>
           <input
            className='border border-gray-400 rounded-sm p-2' 
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Search Astrologers...'
            />
           </form>
           <CgSearch className='absolute right-0 inset-44 top-4 text-red-500' />
        </div>
        <div className='hidden md:block'>
            <ul className='flex items-center gap-4'>
            {NavBarData.map((item) => {
                return (
                <li 
                key={item.id}
                className={`inline-block py-2 px-3 text-lg cursor-pointer blue-gray-900 ${activeLink === item.link ? 'font-bold' : ''}`}
                onClick={() => {
                    setActiveLink(item.link)
                    navigate(item.link)
                }}
                >
                    {item.title}
                </li>)
            })}
            <button className='text-white rounded-md bg-rose-500 w-32 h-10'>
                GetApp
            </button>
            </ul>
        </div>
        <div 
        className='md:hidden'
        onClick={() => setOpen(!open)}
        >
            <CgMenuBoxed className='h-7 w-8 text-slate-900'/>
        </div>
        </div> 
        
    </nav>
    <ResponsiveMenu open={open} setOpen={setOpen}/>

    </>
  )

}

export default NavBar