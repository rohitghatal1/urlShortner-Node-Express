import React from 'react';

export default function Homepage() {
  return (
    <div>
      <div className="homePage px-2 py-3 border-b-2 border-gray-500">
        <h2 className="text-center">Url Shortner</h2>
        <section className="urlSection">
          <div className="form">
            <form action="">
              <label htmlFor="url">Enter url to short</label>
              <input type="text" placeholder='long url' />
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
