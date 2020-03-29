import React from 'react';

import './navigation.css';
import NavLinks from './NavLinks';


const MainHeader = props => {
return <header className="main-header">
  <h2>Tools Library</h2>
  <NavLinks />
</header>;
};

export default MainHeader;
