import React from 'react';

import Dropdown from '../../assets/images/dropdown.svg';

const DropDown = ({ onClick, isOpen }: Props) => {
  return (
    <div
      className={`flex flex-col ${
        isOpen ? 'h-80' : 'h-12'
      } w-60 justify-around`}
    >
      <div
        className='flex items-center justify-center bg-gray-200 h-12 w-50 px-3 py-1 rounded-md cursor-pointer'
        onClick={onClick}
      >
        <span className='mx-5'>Filter by region</span>
        <div className='mr-3 w-6 h-6'>
          <Dropdown />
        </div>
      </div>

      {isOpen && (
        <div className='flex flex-col items-start justify-center bg-gray-100 h-3/4 w-50 px-3 py-1 rounded-md my-2 z-10'>
          <span className='my-2 mx-10'>Africa</span>
          <span className='my-2 mx-10'>America</span>
          <span className='my-2 mx-10'>Asia</span>
          <span className='my-2 mx-10'>Europe</span>
          <span className='my-2 mx-10'>Oceania</span>
        </div>
      )}
    </div>
  );
};

interface Props {
  isOpen?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default DropDown;
