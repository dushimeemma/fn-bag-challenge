import * as React from 'react';

import Search from '../../assets/images/search.svg';

const SearchField = () => {
  return (
    <div className='flex items-center justify-start bg-gray-200 h-12 w-80 px-3 py-1 rounded-md'>
      <div className='mr-3 w-6 h-6'>
        <Search />
      </div>
      <input
        placeholder='Search For a Country ....'
        className='h-6 w-full focus:outline-none placeholder-black bg-transparent'
      />
    </div>
  );
};
export default SearchField;
