import React from 'react'

const navItem = ({item}) => {
  return (
  <li href="/">
    <a href={item.URL}>{item.title}</a>
  </li>
  )
}

export default navItem
