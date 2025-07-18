// src/components/RedirectHandler.jsx

import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOriginalUrl } from "../utils/urlService";

export default function RedirectHandler() {
  const { shortId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function redirect() {
      const originalUrl = await getOriginalUrl(shortId);
      if (originalUrl) {
        window.location.href = originalUrl;
      } else {
        navigate("/notfound");
      }
    }
    redirect();
  }, [shortId, navigate]);

  return <p>Redirecting...</p>;
}
