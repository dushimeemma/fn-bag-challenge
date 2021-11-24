import React from 'react';

import BagLogo from '../../assets/images/logo.svg';
import NavItem from '../Reusable/NavItem';
import NavLink from '../Reusable/Navlink';

const Siderbar = ({
  top,
  middle,
  bottom,
  topUrl,
  middleUrl,
  bottomUrl,
}: Props) => {
  return (
    <div className='min-h-screen border-r-2 border-gray-300 w-1/5 hidden md:block'>
      <NavLink href='/' classes='flex w-full mx-5 mt-5 mb-10'>
        <BagLogo />
      </NavLink>
      <NavLink href={topUrl} classes='flex w-full mx-5'>
        <NavItem>{top}</NavItem>
      </NavLink>
      <NavLink href={middleUrl} classes='flex w-full mx-5'>
        <NavItem>{middle}</NavItem>
      </NavLink>
      <NavLink href={bottomUrl} classes='flex w-full mx-5'>
        <NavItem>{bottom}</NavItem>
      </NavLink>
    </div>
  );
};

interface Props {
  top: string;
  middle: string;
  bottom: string;
  topUrl: string;
  middleUrl: string;
  bottomUrl: string;
}

export default Siderbar;
