import React from "react";

const Card = ({ title, price, storage, maxUsers, dataLimit }) => {
  return (
    <>
      <div className={`card ${title}`}>
        <h3 className="title">{title}</h3>
        <h1 className="price">
          <span>$</span>
          {price}
        </h1>
        <p className="storage">{storage}</p>
        <p className="max-users">{maxUsers}</p>
        <p className="data-limit">{dataLimit}</p>
        <button className="card-btn">Learn More</button>
      </div>
    </>
  );
};

export default Card;
