import React from 'react'
import useFetchData from './hooks/useFetchData'

const DisplayFetchedData = ({postid}) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${postid}`;
  const { data, loading } = useFetchData(url);

  return (
    loading ? <div>Loading...</div>
      : <textarea readOnly rows="10" className="full-width" value={JSON.stringify(data, null, 2)} />
  )
}

export default DisplayFetchedData;