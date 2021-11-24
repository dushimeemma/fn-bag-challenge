import React from 'react';

const Country = ({ country }: Props) => {
  return (
    <div className='w-24 h-8 border-2 border-gray-200 flex items-center justify-center mx-0 md:mx-3 cursor-pointer'>
      <span className='mx-5'>{country}</span>
    </div>
  );
};

interface Props {
  country: string;
}

export default Country;
