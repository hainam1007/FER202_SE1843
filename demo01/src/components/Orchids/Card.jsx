import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useTheme } from "../../contexts/ThemeContext";

function Card(props) {
  const navigate = useNavigate();
  const { colors } = useTheme();

  return (
    <div
      className="relative card orchid-card"
      style={{
        width: "16rem",
        height: "25rem",
        margin: "0px 3px 20px 3px",
        backgroundColor: colors.surface,
        color: colors.text,
        cursor: "pointer",
        transition: "all 0.2s",
        border: `1px solid ${colors.border}`,
      }}
      onClick={() => navigate(`/orchids/${props.orchids.Id}`)}
    >
      <div className="card-body" style={{ margin: "auto" }}>
        <img
          src={props.orchids.image}
          className="card-img-top"
          alt="..."
          style={{ width: "13rem", height: "8rem" }}
        />
        <h5 className="card-title" style={{ color: colors.text }}>
          {props.orchids.name}
        </h5>
        <p className="card-text" style={{ color: colors.textSecondary }}>
          <span className="flex items-center">
            Color:
            <div
              className="w-4 h-4 rounded-full ml-2 border border-black"
              style={{ backgroundColor: props.orchids.color }}
            ></div>
          </span>
          Category: {props.orchids.category}
          <br />
          Origin: {props.orchids.origin}
          <br />
          Likes: {props.orchids.numberOfLike}
          <br />
          <div className="flex">
            Rating:{" "}
            <span className="mt-1 flex">
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
              backgroundColor: colors.primary,
              borderColor: colors.primary,
              pointerEvents: "none", // Không cho click vào button nữa
              userSelect: "none",
            }}
          >
            <p
              className="py-2 flex justify-center items-center"
              style={{
                width: "100%",
                margin: 0,
                color: "white",
              }}
            >
              Information
            </p>
          </a>
        </div>
        <style>
          {`
    .orchid-card:hover {
      box-shadow: 0 8px 32px ${colors.primary}55, 0 2px 8px ${colors.primary}33;
      transform: translateY(-8px) scale(1.04);
      border: 1.5px solid ${colors.primary};
    }
    .orchid-card:hover .info-btn {
      background-color: ${colors.secondary} !important;
      border-color: ${colors.secondary} !important;
      transition: all 0.2s;
    }
    .info-btn {
      transition: all 0.2s !important;
    }
  `}
        </style>
      </div>
    </div>
  );
}

export default Card;
