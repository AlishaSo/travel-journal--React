import React from 'react';
import Data from './data';

import Header from './components/Header';
import Destination from './components/Destination';

export default function App() {
  const destinations = Data.map(destination => {
    return (
      <Destination 
        key={destination.id}
        {...destination}
      />
    )
  });

  return (
    <>
      <Header />
      <main>
        {destinations}
      </main>
    </>
  )
}