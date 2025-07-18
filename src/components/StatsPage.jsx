// Fetch stats once and show them using UrlStatsTable
import React, { useEffect, useState } from 'react';
import { getUrlStats } from '../utils/urlService.js';
import UrlStatsTable from './UrlStatsTable.jsx';

export default function StatsPage() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    getUrlStats().then(setStats);
  }, []);

  return (
    <>
      <h2>URL Statistics</h2>
      <UrlStatsTable stats={stats} />
    </>
  );
}
