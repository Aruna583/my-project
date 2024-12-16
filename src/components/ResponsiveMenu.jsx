import React, { useState } from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { NavBarData } from '../utils/NavBarData';

const ResponsiveMenu = ({open, setOpen, setActiveItem}) => {
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState(null);
  return <AnimatePresence mode='wait'>
    {
        open && (
            <motion.div
            initial= {{opacity: 0, y:-100}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:-100}}
            transition={{duration:0.2}}
            className='absolute  top-20 left-0 w-full h-screen z-20'
            >
                <div className='text-xl bg-red-400 text-white rounded-md px-4 py-4 m-6'>
                    <ul className='flex flex-col gap-2'>
                        {NavBarData.map((item) => {
                            return (
                            <li 
                            key={item.id}
                            className={`inline-block py-2 px-3 text-lg cursor-pointer text-white hover:bg-rose-500 hover:text-white hover:rounded-md ${activeLink === item.link ? 'font-bold' : ''}`}
                            onClick={() => {
                                setActiveLink(item.link)
                                setActiveItem(item)
                                navigate(item.link)
                                setOpen(!open)
                            }}
                            >
                                {item.title}
                                </li>)
                            })
                            }
                    </ul>
                    </div>
            </motion.div>
        )
    }
  </AnimatePresence>
}

export default ResponsiveMenu