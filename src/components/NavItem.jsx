import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavItem = ({item, activeLink, setActiveLink, setActiveItem, setOpen}) => {
    const navigate = useNavigate()
  return (
    <li
    key={item.id}
    className={`inline-block py-2 px-3 text-lg cursor-pointer text-slate-900 hover:bg-rose-500 hover:text-white hover:rounded-md ${activeLink === item.link ? 'font-bold' : ''}`}
    onClick={() => {
        setActiveItem(item);
        setActiveLink(item.link);
        navigate(item.link);
        setOpen((preOpen) => !preOpen)
    }}           
    >
        {item.title}
    </li>
  )
}

export default NavItem