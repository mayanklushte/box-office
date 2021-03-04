import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavList, LinkStyled } from './Navs.styled';

// create array of routes and passing it in map function
//  saves us from retyping and
// don't forget to use key function while mapping childs
const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Stareed' },
];

const Navs = () => {
  const location = useLocation();

  return (
    <div>
      <NavList>
        {LINKS.map(item => (
          <li key={item.to}>
            <LinkStyled
              to={item.to}
              className={item.to === location.pathname ? 'active' : ''}
            >
              {item.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Navs;
