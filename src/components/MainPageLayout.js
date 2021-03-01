import React from 'react';
import Navs from './Navs';
import Title from './Title';

// here by using children we are trying to grab a content of Home.js and Starred.js
// where we wrap MainPageLayout component arround them

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Are you looking for Movie or an Actor?"
      />
      <Navs />
      {children}
    </div>
  );
};

export default MainPageLayout;
