import React from "react";

const PokeCard = ({ data }) => {
  return (
    <li>
      <a href="" className="card">
        <img
          src={`/sprites/${data.key + 1}.png`}
          alt={data.name}
          className="card__image"
        />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <img
              className="card__thumb"
              src={`/sprites/${data.key + 1}.png`}
              alt={data.name}
            />
            <div className="card__header-text">
              <h3 className="card__title">{data.name.toUpperCase()}</h3>
              <span className="card__status">{data.description}</span>
            </div>
          </div>
          <p className="card__description">{data.description}</p>
          <button class="button-55" role="button">
            Read More...
          </button>
        </div>
      </a>
    </li>
  );
};

export default PokeCard;
