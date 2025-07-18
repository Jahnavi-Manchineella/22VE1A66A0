// Present a stats array in tabular form
import React from 'react';

export default function UrlStatsTable({ stats }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Short URL</th>
          <th>Original URL</th>
          <th>Clicks</th>
        </tr>
      </thead>
      <tbody>
        {stats.map((s) => (
          <tr key={s.shortUrl}>
            <td>{s.shortUrl}</td>
            <td>{s.originalUrl}</td>
            <td>{s.clicks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
