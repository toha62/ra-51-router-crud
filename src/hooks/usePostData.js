import { useState, useEffect } from 'react';

export default function usePostData(url, data) {  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);  

  useEffect(() => {
    const postData = async () => {
      if (!data) {
        return;
      }
      setLoading(true);
      console.log('posting');
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(data),
        });
        console.log('URL: ', url, 'RESP', response, JSON.stringify(data));
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        setError(null);
      } catch (e) {
        console.log('ERROR - ', e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    postData();
  }, [data]);

  return [loading, error];
}
