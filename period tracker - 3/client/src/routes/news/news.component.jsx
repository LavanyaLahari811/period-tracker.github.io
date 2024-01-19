import "./news.styles.scss";
import { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=women%27s+health&apiKey=0e9110d855bd4fd7a75e857313e3ef98"
      );
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="news-container">
      
      <ul className="article-list">
        {news.map((article, index) =>
          article.urlToImage ? (
            <li key={index} className="article-item">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="items"
              >
                <div className="article-image">
                  <img src={article.urlToImage} alt={article.title} />
                </div>
                <div className="article-content">
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-description">{article.description}</p>
                </div>
              </a>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default News;
