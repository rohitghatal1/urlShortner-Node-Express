import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UrlShortner from './UrlShortner';


export default function Homepage() {
  const [shortUrl, setShortUrl] = useState();

  // const [previousResults, setPreviousResults] = useState([]);

  const getShortUrl = async () => {
    const response = axios.get('');
    setShortUrl(response?.data?.data);
  }

  useEffect(() => {
    getShortUrl();
  }, [])
  return (
    <div>
      <div className="homePage px-2 py-3 flex justify-center items-center">
        <h2 className="text-center">Url Shortner</h2>
        <div className='p-2'>
          <p>Easy process for shorting the url and redirection</p>
        </div>
        <UrlShortner />
      </div>
    </div>
  )
}
