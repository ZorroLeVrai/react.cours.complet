import React, { useEffect } from 'react';
import useFetch from './useFetch'; // Import the custom hook


const FetchDemo = () => {
    const { fetchData, data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');

    // Optionally, you can trigger fetching in `useEffect`, or on a button click, etc.
    useEffect(() => {
      // Automatically trigger the request on mount
        fetchData();
    }, [fetchData]);
  
  
    return (
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && (
          <div>
            <h3>Fetched Data:</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  
}

export default FetchDemo;