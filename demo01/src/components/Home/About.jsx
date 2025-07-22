import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    return (
        <div style={{ background: "#FAF7F2", padding: "48px 0" }}>
            <div style={{ maxWidth: 1350, margin: "0 auto", padding: "0 24px" }}>
                <h1 style={{
                    fontWeight: 700,
                    fontSize: 48,
                    marginBottom: 24,
                    color: "#222"
                }}>About Us</h1>
                <p style={{ fontSize: 20, color: "#444", marginBottom: 18 }}>
                    Welcome to <span style={{ color: "#c44fb6", fontWeight: 600 }}>Orchid Garden</span> – a unique platform dedicated to showcasing the beauty and diversity of orchids from around the world. Our application is designed for orchid lovers, collectors, and anyone passionate about these extraordinary flowers.
                </p>
                <p style={{ fontSize: 18, color: "#444", marginBottom: 18 }}>
                    At Orchid Garden, we gather and present detailed information about various orchid species, including their origin, color, category, and special characteristics. Our mission is to inspire appreciation for orchids and provide a visually engaging experience for all visitors.
                </p>
                <p style={{ fontSize: 18, color: "#444", marginBottom: 18 }}>
                    Whether you are a seasoned collector or just starting to explore the world of orchids, our app offers a rich gallery, easy navigation, and up-to-date details to help you discover and enjoy the wonders of orchids.
                </p>
                <blockquote style={{
                    borderLeft: "4px solid #c44fb6",
                    paddingLeft: 16,
                    fontStyle: "italic",
                    color: "#7d3c98",
                    background: "#f8e6f3",
                    margin: "32px 0",
                    fontSize: 18
                }}>
                    We are passionate about connecting people with the natural beauty of orchids and celebrating their incredible variety.
                </blockquote>
                <div style={{ display: "flex", gap: 16, marginTop: 32, justifyContent: "center" }}>
                    <button
                        style={{
                            background: "#c44fb6",
                            color: "#fff",
                            border: "none",
                            borderRadius: 24,
                            padding: "12px 32px",
                            fontWeight: 600,
                            fontSize: 18,
                            cursor: "pointer"
                        }}
                        onClick={() => navigate('/Orchids')}
                    >
                        Go to orchids
                    </button>
                    <button
                        style={{
                            background: "#fff",
                            color: "#c44fb6",
                            border: "2px solid #c44fb6",
                            borderRadius: 24,
                            padding: "12px 32px",
                            fontWeight: 600,
                            fontSize: 18,
                            cursor: "pointer"
                        }}
                        onClick={() => navigate('/Contact')}
                    >
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;