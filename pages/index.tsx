import React, { useState } from 'react';
import Router from 'next/router';

import DashboardView from '../components/Shared/DashboardView';
import SearchField from '../components/Shared/SearchField';
import DropDown from '../components/Shared/DropDown';
import Card from '../components/Reusable/Card';

const IndexPage = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [countries, setCountries] = useState([
    {
      id: 1,
      country: 'Rwanda',
      population: '12.9 million',
      capital: 'Kigali',
      currency: 'RWF',
      flag: 'images/rwanda.png',
      isAllowed: true,
    },
    {
      id: 2,
      country: 'United States Of American',
      population: '329.5 million',
      capital: 'Washington, D.C',
      currency: 'USD',
      flag: 'images/usa.png',
      isAllowed: false,
    },
    {
      id: 3,
      country: 'France',
      population: '67.39 million',
      capital: 'Paris',
      currency: 'EURO',
      flag: 'images/france.png',
      isAllowed: false,
    },
    {
      id: 4,
      country: 'Belgium',
      population: '12.9 million',
      capital: 'Paris',
      currency: 'EURO',
      flag: 'images/belgium.png',
      isAllowed: true,
    },
  ]);
  return (
    <DashboardView
      top='MY LIST'
      middle='VISITED'
      bottom='TO VISIT'
      topUrl='/'
      middleUrl='/'
      bottomUrl='/'
      title='MY LIST'
      isShownArrowBack={false}
    >
      <>
        <div className='m-5 px-5 flex flex-col md:flex-row justify-between items-start'>
          <div className='md:my-0 my-5'>
            <SearchField />
          </div>
          <div className={`w-60 ${isOpenDropDown ? 'h-60' : 'h-12'}`}>
            <DropDown
              isOpen={isOpenDropDown}
              onClick={() => setIsOpenDropDown(!isOpenDropDown)}
            />
          </div>
        </div>
        <div
          className={`ml-0 md:ml-10 mr-60 min-h-96 w-screen md:w-full flex md:flex-row flex-col md:justify-start md:items-start justify-center items-center ${
            isOpenDropDown ? '-mt-48' : 'mt-0'
          }`}
        >
          {countries.map((country) => (
            <React.Fragment key={country.id}>
              <div className='mr-3'>
                <Card
                  country={country.country}
                  population={country.population}
                  capital={country.capital}
                  currency={country.currency}
                  url={country.flag}
                  isAllowed={country.isAllowed}
                  onClick={() =>
                    Router.push({
                      pathname: '/list',
                      query: { id: country.id },
                    })
                  }
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </>
    </DashboardView>
  );
};

export default IndexPage;
