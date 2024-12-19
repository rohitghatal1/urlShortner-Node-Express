import React from 'react'

export default function urlShortnet() {
    return (
        <div>
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
    )
}
