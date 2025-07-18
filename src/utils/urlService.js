// src/services/urlService.js

const STORAGE_KEY = "urlDatabase";

// Load database from localStorage
function loadDatabase() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error("Error loading database from localStorage:", e);
    return {};
  }
}

// Save database to localStorage
function saveDatabase(db) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  } catch (e) {
    console.error("Error saving database to localStorage:", e);
  }
}

// Shorten URL and store it
export async function shortenUrl(originalUrl) {
  const shortId = Math.random().toString(36).substring(2, 7);
  const db = loadDatabase();
  db[shortId] = originalUrl;
  saveDatabase(db);
  return `http://localhost:3000/${shortId}`;
}

// Retrieve original URL by shortId
export async function getOriginalUrl(shortId) {
  const db = loadDatabase();
  return db[shortId] || null;
}

// Return stats for all shortened URLs
export async function getUrlStats() {
  const db = loadDatabase();
  return Object.entries(db).map(([shortId, originalUrl]) => ({
    shortUrl: `http://localhost:3000/${shortId}`,
    originalUrl,
    clicks: Math.floor(Math.random() * 100), // You can later track real clicks
  }));
}
