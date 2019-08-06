'use es6';

/* eslint-disable import/prefer-default-export */

import axios from 'axios';
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function fetchUrl() {
    setLoading(true);
    try {
      const response = await axios(url, {
        headers: {
          'x-rapidapi-host': process.env.REACT_APP_X_RAPIDAPI_HOST,
          'x-rapidapi-key': process.env.REACT_APP_X_RAPIDAPI_KEY
        }
      });
      setQuotes(response.data.Quotes);
    } catch (error) {
      setHasError(true);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
  }, [url]);
  return [quotes, isLoading, hasError];
}

export { useFetch };
