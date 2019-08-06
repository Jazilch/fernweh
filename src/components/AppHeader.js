'use es6';

import React from 'react';
import { Menu } from 'antd';

const AppHeader = () => (
  <>
    <div className="app__logo">
      <img
        src="https://cdn2.hubspot.net/hubfs/2676636/Fernweh-App/fernweh-logo-1.png"
        width="100"
        alt="fernweh"
      />
    </div>
    <Menu theme="dark" mode="horizontal" />
  </>
);

export default AppHeader;
