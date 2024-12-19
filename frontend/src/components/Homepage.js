import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from "antd"
import axios from 'axios';


export default function Homepage() {
  const [formData, setFormData] = useState("");
  const [shortUrl, setShortUrl] = useState();
  const [previousResults, setPreviousResults] = useState([]);
  const handleFormSubmission = async (values) => {
    await axios.post('urlShort', values);
    setFormData(values);
  }

  const getShortUrl = async () => {
    const response = axios.get('');
    setShortUrl(response?.data?.data);
  }

  const deleteData = async () => {
    await axios.delete('', "Rohit")
  }

  useEffect(() => {
    getShortUrl();
  }, [])
  return (
    <div>
      <div className="homePage px-2 py-3 flex justify-center items-center">
        <h2 className="text-center">Url Shortner</h2>
      </div>
    </div>
  )
}
