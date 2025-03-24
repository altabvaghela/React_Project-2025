import React from "react";

const Card = ({ data }) => {
  const readMore = (url) => {
    window.open(url, "_blank"); 
  };

  return (
    <>
      <div className="cardContainer">
        {data.map((item, index) => {
          if (!item.urlToImage) {
            return null; 
          } else {
            return (
              <div className="card" key={index}>
                <img src={item.urlToImage} alt="News" />
                <div className="cardContent">
                  <a className="Title" onClick={() => readMore(item.url)}>
                    {item.title}
                  </a>
                  <p>{item.description}</p>
                  <button onClick={() => readMore(item.url)}>Read More</button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Card;
