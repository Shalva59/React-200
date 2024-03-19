import React from 'react'
import NavItem from './navItem';
const Header = ({navigation}) => {

  return (
   <header>
    <nav>
      <ul className='flex'>
        {navigation.map((item , index)=>
        (
          <NavItem key={index} item={item}/>
        ))}
      </ul>
    </nav>
   </header>
  )
}

export default Header;
