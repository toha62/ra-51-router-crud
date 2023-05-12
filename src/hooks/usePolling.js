import {useState, useEffect, useRef} from 'react';

export default function usePolling(url, interval, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);
  const timestampRef = useRef();  
  
  useEffect(() => {    
    const fetchData = async () => {
      console.log('polling');

      const timestamp = Date.now();
      timestampRef.current = timestamp;

      setLoading(true);

      try {
        const response = await fetch(url);
      
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
        
    const intervalId = setInterval(fetchData, interval);
    
    return () => {clearInterval(intervalId); console.log('clear interval')};    
  }, [url, interval]);

  return [data, isLoading, hasError];
}
