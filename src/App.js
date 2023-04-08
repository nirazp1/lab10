import request from 'browser-request';
import { useState } from 'react';

function useNewsAPI() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = () => {
    request.get(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY',
      (err, res, body) => {
        if (err) {
          console.error(err);
        } else {
          const data = JSON.parse(body);
          setArticles(data.articles);
        }
      }
    );
  };

  return [articles, fetchArticles];
}
;