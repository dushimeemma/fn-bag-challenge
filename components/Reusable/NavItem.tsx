import React from 'react';

const NavItem = ({ children, classes }: Props) => {
  return <span className={`mx-5 capitalize ${classes}`}>{children}</span>;
};

interface Props {
  children: any;
  classes?: string;
}

export default NavItem;
