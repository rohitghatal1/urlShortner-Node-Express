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
        <section className="urlSection">
          <div className="form">
            <Form layout='vertical' onFinish={handleFormSubmission}>
              <Form.Item label="Long url" name="longUrl">
                <Input />
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit'>
                  Send
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div className="output">
            <label htmlFor="short Url">Shortned Url</label>
            <p className='flex items-center justify-between'>The shorted Url is: {shortUrl}
              <Button onClick={deleteData}>Delete</Button>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
