import React from 'react'
import { nav } from '../../../data/nav'

const navItem = ({item}) => {

  const styles=
  {
    display:"inline",
    margin:"0 1rem",
    listStyleImage: `url(${nav.image})`
  }

  return (
  <li className='navigationContainer'
   style={styles}  
  
  >
    <a className='navigation' href={item.URL}>{item.title}</a>
  </li>
  )
}

export default navItem
