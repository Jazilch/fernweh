'use es6';

/* eslint-disable import/prefer-default-export */

import axios from 'axios';
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);
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
      setData(response.data);
    } catch (error) {
      setHasError(true);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
  }, [url]);
  return [data, isLoading, hasError];
}

export { useFetch };
