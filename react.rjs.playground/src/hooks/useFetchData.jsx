import { useState, useEffect } from 'react';

// Custom hook pour récupérer les données d'une API
const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //utilsation d'une fonction locale car useEffect doit retourner un CLeanup code pas une promesse
    const fetchData = async() => {
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
