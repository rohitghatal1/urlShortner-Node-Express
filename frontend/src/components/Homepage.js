import React from 'react';
import { Form, Input } from "antd"

export default function Homepage() {
  return (
    <div>
      <div className="homePage px-2 py-3 flex justify-center items-center">
        <h2 className="text-center">Url Shortner</h2>
        <section className="urlSection">
          <div className="form">
            <Form layout='vertical'>
              <Form.Item label="Long url">
                <Input></Input>
              </Form.Item>
            </Form>
          </div>

          <div className="output">
            <label htmlFor="short Url">Shortned Url</label>
            <p></p>
          </div>
        </section>
      </div>
    </div>
  )
}
