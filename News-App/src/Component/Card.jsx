import React from "react";

const Card = ({ data }) => {
  // console.log(data);
  const readMore = (url) => {
    window.open(url,"_blank");
  }
  return (
    <>
      <div className="cardContainer">
        {data.map((i,index) => {
            if(!i.urlToImage){
                return null
            }else{
                return (
                    <div className="card" key={index}>
                      <img src={i.urlToImage} />
                      <div className="cardContent">
                        <a className="Title" onClick={()=>readMore(i.url)}>{i.title}</a>
                        <p>{i.description}</p>
                        <button onClick={()=>readMore(i.url)}>Read More</button>
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
