import React from 'react'
import './Error.css';

export default function Error() {
  return (
    <div className='error-container'>
      <div className="error-section">
        <h3 id="show-error">Oops! Page Not Found</h3>
        <h1>404</h1>
        <h3 id='content-page'>This is page is outside of the universe</h3>
        <p id="information-pargraph"> The page you're looking for seems to have gone on vacation. Don't worry, we're on it!</p>
        <button>Go to homepage</button>
        <p id="information-contact">If you believe this is a mistake or need further assistance, feel free to contact us.</p>
      </div>

    </div>
  )
}