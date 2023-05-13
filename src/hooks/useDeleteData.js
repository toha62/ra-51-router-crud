import { useState, useEffect } from 'react';

export default function useDeleteData(url, id) {  
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState(null);  

  useEffect(() => {
    const deleteData = async () => {
      if (!id) {
        return;
      }
      setDeleting(true);
      console.log('deleting');
      try {
        const response = await fetch(`${url}/${id}`, {
          method: 'DELETE',          
        });
        console.log('URL: ', url, 'RESP', response, JSON.stringify(id));
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        setError(null);
      } catch (e) {
        console.log('ERROR - ', e);
        setError(e);
      } finally {
        setDeleting(false);
      }
    };

    deleteData();
  }, [id]);

  return [deleting, error];
}
