import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

const About = () => {
  const navigate = useNavigate();
  const { colors } = useTheme();

  return (
    <div
      style={{
        background: colors.surface,
        padding: "48px 0",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1350, margin: "0 auto", padding: "0 24px" }}>
        <h1
          style={{
            fontWeight: 700,
            fontSize: 48,
            marginBottom: 24,
            color: colors.text,
          }}
        >
          About Us
        </h1>
        <p
          style={{
            fontSize: 20,
            color: colors.textSecondary,
            marginBottom: 18,
          }}
        >
          Welcome to{" "}
          <span style={{ color: colors.primary, fontWeight: 600 }}>
            Orchid Garden
          </span>{" "}
          – a unique platform dedicated to showcasing the beauty and diversity
          of orchids from around the world. Our application is designed for
          orchid lovers, collectors, and anyone passionate about these
          extraordinary flowers.
        </p>
        <p
          style={{
            fontSize: 18,
            color: colors.textSecondary,
            marginBottom: 18,
          }}
        >
          At Orchid Garden, we gather and present detailed information about
          various orchid species, including their origin, color, category, and
          special characteristics. Our mission is to inspire appreciation for
          orchids and provide a visually engaging experience for all visitors.
        </p>
        <p
          style={{
            fontSize: 18,
            color: colors.textSecondary,
            marginBottom: 18,
          }}
        >
          Whether you are a seasoned collector or just starting to explore the
          world of orchids, our app offers a rich gallery, easy navigation, and
          up-to-date details to help you discover and enjoy the wonders of
          orchids.
        </p>
        <blockquote
          style={{
            borderLeft: `4px solid ${colors.primary}`,
            paddingLeft: 16,
            fontStyle: "italic",
            color: colors.primary,
            background: colors.background,
            margin: "32px 0",
            fontSize: 18,
            padding: "16px",
            borderRadius: "0 8px 8px 0",
          }}
        >
          We are passionate about connecting people with the natural beauty of
          orchids and celebrating their incredible variety.
        </blockquote>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 32,
            justifyContent: "center",
          }}
        >
          <button
            style={{
              background: colors.primary,
              color: "#fff",
              border: "none",
              borderRadius: 24,
              padding: "12px 32px",
              fontWeight: 600,
              fontSize: 18,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => navigate("/Orchids")}
            onMouseEnter={(e) => (e.target.style.background = colors.secondary)}
            onMouseLeave={(e) => (e.target.style.background = colors.primary)}
          >
            Go to orchids
          </button>
          <button
            style={{
              background: colors.background,
              color: colors.primary,
              border: `2px solid ${colors.primary}`,
              borderRadius: 24,
              padding: "12px 32px",
              fontWeight: 600,
              fontSize: 18,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => navigate("/Contact")}
            onMouseEnter={(e) => {
              e.target.style.background = colors.primary;
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = colors.background;
              e.target.style.color = colors.primary;
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
