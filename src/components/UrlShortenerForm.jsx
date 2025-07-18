// UrlShortenerForm.js
// Form for submitting a long URL
import React, { useState } from 'react';
import { shortenUrl } from '../utils/urlService.js';

export default function UrlShortenerForm({ onShortened }) {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) return;
    const shortUrl = await shortenUrl(url);
    onShortened(shortUrl);   // pass up to <App/>
    setUrl('');              // clear input
  };

  return (
    <form onSubmit={handleSubmit} className="url-form">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        required
      />
      <button type="submit">Shorten</button>
    </form>
  );
}
