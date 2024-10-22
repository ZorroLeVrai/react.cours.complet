import { useState, useEffect } from 'react';

// Custom hook pour récupérer les données d'une API
const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //utilsation d'une fonction locale car useEffect doit retourner un Cleanup code pas une promesse
    const fetchData = async() => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetchData;
