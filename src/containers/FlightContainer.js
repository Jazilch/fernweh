'use es6';

import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import HeroText from '../components/HeroText';
import FlightForm from '../components/FlightForm';
import FlightResults from '../components/FlightResults';

const FlightContainer = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [url, setUrl] = useState('');

  const [quotes, isLoading] = useFetch(url);

  return (
    <>
      <HeroText />
      <FlightForm
        origin={origin}
        destination={destination}
        setOrigin={setOrigin}
        setDestination={setDestination}
        setUrl={setUrl}
      />
      <FlightResults quotes={quotes} isLoading={isLoading} />
    </>
  );
};

export default FlightContainer;
