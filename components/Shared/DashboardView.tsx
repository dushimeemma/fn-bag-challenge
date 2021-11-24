import React from 'react';
import Router from 'next/router';

import DarkMode from '../Reusable/DarkMode';
import Icon from '../Reusable/Icon';
import Avatar from './Avatar';
import Siderbar from './Siderbar';
import Bell from '../../assets/images/bell.svg';
import Left from '../../assets/images/arrow-left.svg';
import Moon from '../../assets/images/moon.svg';

const DashboardView = ({
  children,
  title,
  top,
  middle,
  bottom,
  topUrl,
  middleUrl,
  bottomUrl,
  isShownArrowBack,
}: Props) => {
  return (
    <div className='flex flex-1 overflow-x-hidden overflow-y-auto'>
      <Siderbar
        top={top}
        middle={middle}
        bottom={bottom}
        topUrl={topUrl}
        middleUrl={middleUrl}
        bottomUrl={bottomUrl}
      />
      <div className='flex flex-col w-4/5 min-h-screen'>
        <div className='flex md:hidden flex-row items-center justify-around w-screen bg-white shadow-lg h-16'>
          <span>Where in the world?</span>
          <div className='flex flex-row items-center justify-start'>
            <div className='w-5 h-5 mr-2'>
              <Moon />
            </div>
            <span className='capitalize'>Dark Mode</span>
          </div>
        </div>
        <div
          className={`m-5 md:flex ${
            !isShownArrowBack ? 'hidden' : 'flex'
          } justify-between items-center h-8`}
        >
          <div
            className={`${
              isShownArrowBack ? 'w-24' : 'w-32'
            } px-3 py-1 ml-5 flex flex-row items-center justify-center cursor-pointer border-2 border-blue-50 md:border-0`}
            onClick={() =>
              Router.push({
                pathname: '/',
              })
            }
          >
            {isShownArrowBack ? (
              <div
                className={`w-5 h-5 ${isShownArrowBack ? 'md:mt-0 mt-2' : ''}`}
              >
                <Left />
              </div>
            ) : null}
            <span className='mx-2 -mt-1'>{title}</span>
          </div>
          <div
            className={`w-2/5 ${
              isShownArrowBack ? 'hidden md:flex' : 'flex'
            } items-center justify-around`}
          >
            <DarkMode />
            <Icon classes='mb-2'>
              <Bell />
            </Icon>
            <div className='flex items-center justify-around'>
              <span className='text-gray-400 mx-1'>Hey,</span>
              <span className='font-bold mx-1'> Jane</span>
            </div>
            <Avatar />
          </div>
        </div>

        <div className='h-auto'>{children}</div>
      </div>
    </div>
  );
};
interface Props {
  children: any;
  title: any;
  top: string;
  middle: string;
  bottom: string;
  topUrl: string;
  middleUrl: string;
  bottomUrl: string;
  isShownArrowBack: boolean;
}

export default DashboardView;
