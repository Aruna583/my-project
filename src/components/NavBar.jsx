import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { NavBarData } from '../utils/NavBarData';
import { CgArrowLeft, CgMenuBoxed } from 'react-icons/cg';
import { FaAngleLeft } from "react-icons/fa6";
import ResponsiveMenu from './ResponsiveMenu';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../utils/searchSlice';
import { CgSearch } from 'react-icons/cg';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null);
    const [searchTerm, setSearchTerm] = useState('')
    const [activeItem, setActiveItem] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    
    const handleSearchQuery = (e) => {
        e.preventDefault();
        if(searchTerm.trim()){
        dispatch(setSearchQuery(searchTerm))
        navigate('/filter-data')
    }
    }
    console.log(activeItem)

  return (
    <>
    <nav className={`bg-white w-full h-36 md:h-40 lg:drop-shadow-xl md:drop-shadow-md flex justify-center items-center px-2 fixed ${activeItem ? 'h-24' : ''}`}>
       <div className='container flex justify-between'>
        <div>
            <img src={Logo} alt='divine-logo' className={`h-8 md:h-12 w-20 md:w-44 ${activeItem ? 'hidden md:block': ''}`}/>
        </div>
        <div className={`pt-1 relative md:w-52  ${activeItem ? 'hidden md:block': ''}`}>
           <form onSubmit={handleSearchQuery}>
           <input
            className={`border border-gray-400 rounded-sm p-2 w-32 md:w-full` }
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Search Astrologers...'
            />
           </form>
           <CgSearch className='absolute right-1 md:right-0 md:inset-x-44 top-4 text-red-500' />
        </div>
        <div className='hidden md:block '>
            <ul className='flex gap-2'>
            {NavBarData.map((item) => {
                return (
                <li 
                key={item.id}
                className={`inline-block py-2 px-3 text-lg cursor-pointer text-slate-900 hover:bg-rose-500 hover:text-white hover:rounded-md ${activeLink === item.link ? 'font-bold' : ''}`}
                onClick={() => {
                    setActiveLink(item.link)
                    setActiveItem(item)
                    navigate(item.link)
                }}
                >
                    {item.title}
                </li>)
            })}
            <button 
            className='text-white rounded-md bg-rose-500 w-32 h-10'
            onClick={() => alert('Get App Clicked')}
            >
                GetApp
            </button>
            </ul>
        </div>
        {activeItem && (
            <div className='flex gap-6 w-56'>
            <FaAngleLeft className='md:hidden  w-2 h-4 text-slate-900' onClick={() => {setOpen(!open)}}/>
            <p className='text-sm text-slate-900 md:hidden'>Connect With {activeItem.title}</p>
            </div>
        )}
        <div 
        className='md:hidden'
        onClick={() => setOpen(!open)}
        >
            <CgMenuBoxed className='h-7 w-8 text-slate-900'/>
        </div>
        </div> 
        
    </nav>
    {open && <ResponsiveMenu open={open} setOpen={setOpen} setActiveItem={setActiveItem}/>}

    </>
  )

}

export default NavBar