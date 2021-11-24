import React from 'react';
import { useRouter } from 'next/router';

const NavLink = ({ children, href, classes }) => {
  const router = useRouter();
  const styles = `mb-6 flex w-full items-center hover:active-nav ${
    router.pathname === href && 'active-nav'
  }`;

  const handleClick = async (e: any) => {
    e.preventDefault();
    await router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={`${classes} ${styles}`}>
      {children}
    </a>
  );
};

export default NavLink;
