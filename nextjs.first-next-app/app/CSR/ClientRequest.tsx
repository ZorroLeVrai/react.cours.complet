'use client';
import React, { useState, useEffect } from 'react';

export function ClientRequest() {
    const [data, setData] = useState(null)
   
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments/1')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        setData(result);
      }
   
      fetchData().catch((e) => {
        // handle the error as needed
        console.error('An error occurred while fetching the data: ', e)
      })
    }, [])
   
    return <pre>{data ? `Your data: ${JSON.stringify(data)}` : 'Loading...'}</pre>
}