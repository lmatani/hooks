
import { useState, useEffect } from 'react';


const useFecthCharacters = (apiUrl) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('No se ha podido realizar la petición. Inténtalo más tarde.');
        }
        const result = await response.json();
        setData(result);
       } catch (error) {
        setError(error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [apiUrl]);
  
    return { 
        data,
        error };
  }

export default useFecthCharacters;
