import * as React from 'react';

import Switch from '../Shared/Switch';

const DarkMode = () => {
  return (
    <div className='flex items-center'>
      <span className='mb-2'>DARK MODE</span>
      <Switch />
    </div>
  );
};
export default DarkMode;
