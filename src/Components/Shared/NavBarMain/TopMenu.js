import React from 'react';
import TopNavbar from './TopNavbar';

const TopMenu = () => (
  <div className="sticky-top" style={{ zIndex: 1000 }}>
    <TopNavbar />
  </div>
);

export default TopMenu;
