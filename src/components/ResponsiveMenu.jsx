import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import { Link } from 'react-router-dom';

const ResponsiveMenu = ({open, setOpen}) => {
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
                    <ul className='gap-4'>
                        <Link to='/' onClick={() => setOpen(!open)}><li>Home</li></Link>
                        <Link to='/Services' onClick={() => setOpen(!open)}><li>Services</li></Link>
                        <Link to='/astrologers' onClick={() => setOpen(!open)}><li>Astrologers</li></Link>
                        <Link to='/blogs' onClick={() => setOpen(!open)}><li>Blogs</li></Link>
                    </ul>
                </div>
            </motion.div>
        )
    }
  </AnimatePresence>
}

export default ResponsiveMenu