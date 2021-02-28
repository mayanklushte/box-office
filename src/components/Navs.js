import React from 'react'
import { Link } from 'react-router-dom'

// create array of routes and passing it in map function
//  saves us from retyping and 
// don't forget to use key function while mapping childs 
const LINKS = [
  {to:'/', text:'Home'},
  {to:'/starred', text:'Stareed'}
]

const navs = () => {
  return (
    <div>
      <ul>
        {
          LINKS.map(item => <li key={item.to}><Link to={item.to}>{item.text}</Link></li>)
        }
        
        
      </ul>
    </div>
  )
}

export default navs
