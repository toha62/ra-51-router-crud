import {useState, useEffect, useRef} from 'react';

export default function useLoadData(url, opts='') {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const timestampRef = useRef();    

  useEffect(() => {    
    const fetchData = async () => {
      const timestamp = Date.now();
      timestampRef.current = timestamp;

      setLoading(true);

      try {
        const response = await fetch(`${url}/${opts}`);
        
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const recievedData = await response.json();

        if (timestampRef.current === timestamp) {
          setData(recievedData);
        }

        setError(null);
      } catch (e) {
        console.log('ERROR load - ', e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();    
  }, []);

  return [data, loading, error];
}
