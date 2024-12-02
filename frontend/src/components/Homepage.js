import React from 'react';
import { Button, Form, Input } from "antd"

export default function Homepage() {
  const handleFormSubmission = (e) => {

  }
  return (
    <div>
      <div className="homePage px-2 py-3 flex justify-center items-center">
        <h2 className="text-center">Url Shortner</h2>
        <section className="urlSection">
          <div className="form">
            <Form layout='vertical' onFinish={handleFormSubmission}>
              <Form.Item label="Long url">
                <Input></Input>
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
            <p>The Long Url is</p>
            <span>

            </span>
          </div>
        </section>
      </div>
    </div>
  )
}
