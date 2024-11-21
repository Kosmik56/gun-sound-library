import React, { useState } from "react";

const API = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to fetch articles
  const fetchArticles = async (searchTerm) => {
    setLoading(true);
    setError("");
    try {
        const response = await fetch(
            `https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=gun&prop=pageimages|extracts&exintro&explaintext&piprop=thumbnail&pithumbsize=300&origin=*`
          );
      if (!response.ok) {
        throw new Error("Failed to fetch data from API");
      }
      const data = await response.json();
      setArticles(data.query.search);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchArticles(query);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Wikimedia Article Search</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for articles"
          style={{ padding: "10px", marginRight: "10px", width: "300px" }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {articles.map((article) => (
          <li key={article.pageid}>
            <a
              href={`https://en.wikipedia.org/wiki/${article.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default API;
