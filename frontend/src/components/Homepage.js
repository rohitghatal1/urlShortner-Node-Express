import React from 'react';
import { Form } from "antd"

export default function Homepage() {
  return (
    <div>
      <div className="homePage px-2 py-3 flex justify-center items-center">
        <h2 className="text-center">Url Shortner</h2>
        <section className="urlSection">
          <div className="form">
            <Form layout='vertical'>
              <Form.Item label="Long url">

              </Form.Item>
            </Form>
          </div>
        </section>
      </div>
    </div>
  )
}
