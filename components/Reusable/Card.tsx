import React from 'react';

import Icon from '../Reusable/Icon';
import Trash from '../../assets/images/delete.svg';
import Check from '../../assets/images/check.svg';

const Card = ({
  country,
  population,
  capital,
  currency,
  url,
  isAllowed,
  onClick,
}: Props) => {
  return (
    <div
      className='h-auto w-64 md:w-52 bg-gray-200 rounded-lg  pb-2 mb-5 md:mb-0 cursor-pointer'
      onClick={onClick}
    >
      <div className='h-36 w-full rounded-lg'>
        <img src={url} alt='rwanda' className='w-full h-full rounded-lg' />
      </div>
      <div className='h-52 w-full flex flex-col items-start justify-around mx-5 mt-5'>
        <span className='font-bold w-40'>{country}</span>
        <span className='font-thin'>Population: {population}</span>
        <span className='font-thin'>Capital: {capital}</span>
        <span className='font-thin'>Currency: {currency}</span>
      </div>
      <div className='flex flex-row items-center justify-end mb-5'>
        <Icon classes='mx-2 text-white'>
          <Trash />
        </Icon>
        <Icon classes={`mx-2 text-white ${isAllowed ? 'bg-green-400' : ''}`}>
          <Check />
        </Icon>
      </div>
    </div>
  );
};

interface Props {
  country: string;
  population: string;
  capital: string;
  currency: string;
  url: string;
  isAllowed: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export default Card;
