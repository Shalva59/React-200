import React from 'react'
import NavItem from './navItem';
import {nav} from "../../../data/nav"
import Logo from "../../assets/logo"

const Header = () => {

  return (
   <header className='h-screen'>
    <Logo/>
    <nav>
      <ul className='flex-col'>
        {nav.map((item , index)=>
        (
          <NavItem key={index} item={item}/>
        ))}
      </ul>
    </nav>
    <div/>
   </header>
  )
}

export default Header;
