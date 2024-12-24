import React, { useState } from 'react'
import { Button, Form, Input } from "antd"
import axios from 'axios';
import { FaRegPaperPlane } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

export default function UrlShortner() {
    const [formData, setFormData] = useState("");
    const [shortUrl, setShortUrl] = useState();

    // ---------------------form submission handlere ----------------------------- 
    const handleFormSubmission = async (values) => {
        await axios.post('urlShort', values);
        setFormData(values);
    }
    const deleteData = async () => {
        await axios.delete('', "Rohit")
    }
    return (
        <div className='p-2'>
            <section className="urlSection">
                <div className="form">
                    <Form layout='vertical' onFinish={handleFormSubmission}>
                        <Form.Item label="Long url" name="longUrl">
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit' className='flex items-center gap-1'>
                                <FaRegPaperPlane />
                                Send
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

                <div className="output">
                    <label htmlFor="short Url">Shortned Url</label>
                    <p className='flex items-center justify-between'>The shorted Url is: {shortUrl}
                        <Button onClick={deleteData} className='flex items-center gap-1'><FaRegTrashAlt color="red" />
                            Delete</Button>
                    </p>
                </div>
            </section>
        </div>
    )
}
