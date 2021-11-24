import React from 'react';

import DashboardView from '../components/Shared/DashboardView';
import Country from '../components/Reusable/Country';

const List = () => {
  return (
    <DashboardView
      top='CHECKLIST'
      middle='VISITED'
      bottom='TO VISIT'
      topUrl='/'
      middleUrl='/'
      bottomUrl='/'
      title='BACK'
      isShownArrowBack={true}
    >
      <div className='md:w-full w-screen h-auto flex flex-col md:flex-row items-center justify-center my-5 md:my-20'>
        <div className='md:w-96 w-80 h-96  mx-10'>
          <img
            src={'images/belgium.png'}
            alt='rwanda'
            className='w-full h-full'
          />
        </div>
        <div className='w-auto h-96 mx-0  md:mx-10 flex flex-col justify-between items-start md:items-center'>
          <div className='flex md:flex-row flex-col md:items-center items-start justify-around w-full px-0 md:px-5'>
            <div className='flex flex-col justify-around items-start md:w-1/2 w-full'>
              <span className='font-bold my-10 text-lg'>Belgium</span>
              <span className='font-medium'>Native Name: Belgie</span>
              <span className='font-medium'>Population: 11,319.511</span>
              <span className='font-medium'>Region: Europe</span>
              <span className='font-medium'>Sub Region: Western Europe</span>
              <span className='font-medium'>Capital: Brussels</span>
            </div>
            <div className='flex flex-col justify-around items-start md:w-1/2 w-full'>
              <span className='font-medium mt-20'>Top Level Domain: .be</span>
              <span className='font-medium'>Currencies: Euro</span>
              <span className='font-medium'>
                Languages: Dutch, French, German
              </span>
            </div>
          </div>
          <div className='flex flex-col md:flex-row w-full items-center justify-start'>
            <span className='font-bold ml-0 md:ml-5 w-full my-5 md:my-0'>
              Border Countries:
            </span>
            <div className='flex flex-row w-full items-center justify-start mb-5 md:mb-0'>
              <Country country='France' />
              <Country country='Germany' />
              <Country country='Netherlands' />
            </div>
          </div>
        </div>
      </div>
    </DashboardView>
  );
};

export default List;
