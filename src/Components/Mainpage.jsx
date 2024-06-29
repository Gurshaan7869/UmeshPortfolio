import React from 'react';
import { Outlet } from 'react-router-dom';

const Mainpage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <Outlet />
    </div>
  );
};

export default Mainpage;
