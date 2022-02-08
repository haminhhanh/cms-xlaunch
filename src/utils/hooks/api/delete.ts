import React, { useEffect, useState } from 'react';
import { api } from '@/utils/apis';

function deleteData(endPoind = '', id = '') {
  const [isLoading, setIsLoading] = useState(true);
  const [mess, setMess]: any = useState(null);

  useEffect(() => {
    api
      .delete(`/${endPoind}/${id}`)
      .then(function (response: any) {
        setMess('success');
        setIsLoading(false);
      })
      .catch(function (error: any) {
        console.log('error', error);
        setIsLoading(false);
        setMess('error');
      });
  }, []);

  return { isLoading, mess };
}
export default deleteData;
