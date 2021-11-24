import React from 'react';

const Icon = ({ children, classes, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`h-10 w-10 rounded-full flex items-center justify-center bg-gray-200 cursor-pointer ${classes}`}
    >
      <div className='h-6 w-6'>{children}</div>
    </div>
  );
};

interface Props {
  children: any;
  classes?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export default Icon;
