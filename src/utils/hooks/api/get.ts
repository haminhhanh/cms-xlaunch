import React, { useEffect, useState } from 'react';
import { api } from '@/utils/apis';

function useFetchData(endPoind = '', params = {}) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get(`/${endPoind}`)
      .then(function (response: any) {
        setData(response);
        setIsLoading(false);
      })
      .catch(function (error: any) {
        console.log('error', error);
        setIsLoading(false);
      });
  }, []);

  return { isLoading, data };
}
export default useFetchData;
