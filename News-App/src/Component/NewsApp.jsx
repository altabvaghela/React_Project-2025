import React, { useEffect, useState } from "react";
import Card from "./Card";

const NewsApp = () => {
  const [search, setSearch] = useState("india"); 
  const [newsData, setNewsData] = useState([]);

  const API_KEY = "1ef29abecc94484e92e3d195f1eaba48";

  
  const getData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
      );
      const jsonData = await response.json();
      console.log(jsonData.articles);
      setNewsData(jsonData.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  
  useEffect(() => {
    getData();
  }, [search]); 

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  
  const handleCategoryClick = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <nav>
        <div>
          <h1>Top's News</h1>
        </div>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleInput}
          />
          <button onClick={() => getData()}>Search</button>
        </div>
      </nav>
      <div>
        <p className="nav-p">Stay Updated With Top's News</p>
      </div>
      <div className="categoryBtn">
        {/* Category Buttons */}
        <button onClick={handleCategoryClick} value="sports">
          Sport
        </button>
        <button onClick={handleCategoryClick} value="politics">
          Politics
        </button>
        <button onClick={handleCategoryClick} value="entertainment">
          Entertainment
        </button>
        <button onClick={handleCategoryClick} value="health">
          Health
        </button>
        <button onClick={handleCategoryClick} value="fitness">
          Fitness
        </button>
      </div>
      {/* Display News */}
      <div>{newsData.length > 0 ? <Card data={newsData} /> : <p>Loading News...</p>}</div>

      <footer>
        <p className="footer-p">&copy; 2025 Your Website. All Rights Reserved.</p>
        <p>
          Made in India
          <a href="https://yourwebsite.com" target="_blank" className="footer-a"></a>
        </p>
      </footer>
    </>
  );
};

export default NewsApp;
