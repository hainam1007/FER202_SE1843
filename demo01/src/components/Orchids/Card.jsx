import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router';

function Card(props) {
  const navigate = useNavigate();
  return (
    <div
      className="relative card orchid-card"
      style={{
        width: "16rem",
        height: "25rem",
        margin: "0px 3px 20px 3px",
        backgroundColor: "white",
        cursor: "pointer",
        transition: "all 0.2s"
      }}
      onClick={() => navigate(`/orchids/${props.orchids.Id}`)}
    >
      <div className="card-body" style={{ margin: "auto" }}>
        <img src={props.orchids.image} className="card-img-top" alt="..." style={{ width: "13rem", height: "8rem" }} />
        <h5 className="card-title">{props.orchids.name}</h5>
        <p className="card-text " >
          <span className="flex items-center">
            Color:
            <div
              className="w-4 h-4 rounded-full ml-2 border border-black"
              style={{ backgroundColor: props.orchids.color }}
            ></div>
          </span>
          Category: {props.orchids.category}<br />
          Origin: {props.orchids.origin}<br />
          Likes: {props.orchids.numberOfLike}<br />
          <div className="flex" >
            Rating: <span className="mt-1 flex">
              {Array.from({ length: props.orchids.rating }).map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </span>
          </div>
        </p>
        <div className="flex justify-center items-center">
          <a
            className="absolute bottom-0 left-0 w-full h-15 btn btn-primary flex justify-center items-center rounded-b-lg info-btn"
            style={{
              backgroundColor: "#E08BCA",
              borderColor: "#E08BCA",
              pointerEvents: "none", // Không cho click vào button nữa
              userSelect: "none"
            }}
          >
            <p
              className="py-2 flex justify-center items-center"
              style={{
                width: "100%",
                margin: 0
              }}
            >Information
            </p>
          </a>
        </div>
        <style>
          {`
    .orchid-card:hover {
      box-shadow: 0 8px 32px #c44fb655, 0 2px 8px #e08bca33;
      transform: translateY(-8px) scale(1.04);
      border: 1.5px solid #c44fb6;
    }
    .orchid-card:hover .info-btn {
      background-color: #c44fb6 !important;
      border-color: #c44fb6 !important;
      transition: all 0.2s;
    }
    .info-btn {
      transition: all 0.2s !important;
    }
  `}
        </style>
      </div>
    </div >
  )
}

export default Card