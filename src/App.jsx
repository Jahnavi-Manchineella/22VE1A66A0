// App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import UrlShortenerForm from './components/UrlShortenerForm.jsx';
import StatsPage from './components/StatsPage.jsx';
import RedirectHandler from './components/RedirectHandler.jsx';
import './App.css';

export default function App() {
  const [shortUrl, setShortUrl] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 p-6">
      <Routes>
        <Route
          path="/"
          element={
            <div className="max-w-xl mx-auto bg-white shadow-2xl rounded-2xl p-8 space-y-6">
              <h1 className="text-4xl font-bold text-center text-purple-700 mb-4">
                🔗 URL Shortener
              </h1>

              <p className="text-center text-gray-600">
                Paste your long URL and get a short one instantly ✨
              </p>

              <UrlShortenerForm onShortened={setShortUrl} />

              {shortUrl && (
                <div className="mt-6 bg-green-100 p-4 rounded-lg border border-green-300 text-green-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    ✅ <strong>Shortened URL:</strong>{' '}
                    <a
                      href={shortUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {shortUrl}
                    </a>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg"
                  >
                    📋 Copy
                  </button>
                </div>
              )}

              {copySuccess && (
                <p className="text-sm text-center text-green-600 mt-2">Copied to clipboard! ✅</p>
              )}
            </div>
          }
        />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/:shortId" element={<RedirectHandler />} />
      </Routes>
    </div>
  );
}
