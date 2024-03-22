import React from 'react'
import {nav} from "../../../data/nav"

function Footer() {
  return (
    <footer>
    <nav>
      <ul>
        {nav.map((item , index)=>
        (
          <li key={index}> {item.title} </li>
        ))}
      </ul>
    </nav>
   </footer>
  )
}

export default Footer;
