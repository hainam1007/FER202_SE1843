import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

function DetailOrchid() {
    const { id } = useParams()
    const [orchid, setOrchid] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchOrchid = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/${id}`)
                setOrchid(res.data)
            } catch (err) {
                setOrchid(null)
            } finally {
                setLoading(false)
            }
        }
        fetchOrchid()
    }, [id])

    if (loading) return <div style={{ textAlign: "center", marginTop: 40 }}>Loading...</div>
    if (!orchid) return <div style={{ textAlign: "center", marginTop: 40, color: "red" }}>Orchid not found!</div>

    return (
        <div style={{ background: "#F5F1EB", minHeight: "73.1vh", padding: "32px 0" }}>
            <div style={{
                maxWidth: 900,
                margin: "40px auto",
                background: "#fff",
                borderRadius: 18,
                boxShadow: "0 4px 24px rgba(200, 79, 182, 0.10)",
                padding: 32
            }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
                    <div style={{ flex: 1, minWidth: 260 }}>
                        <img
                            src={orchid.image || "https://via.placeholder.com/300x300?text=No+Image"}
                            alt={orchid.name}
                            style={{
                                width: "100%",
                                borderRadius: 12,
                                objectFit: "cover",
                                boxShadow: "0 2px 8px #e08bca33"
                            }}
                        />
                    </div>
                    <div style={{ flex: 2, minWidth: 260 }}>
                        <h2 style={{ color: "#c44fb6", fontWeight: 700, fontSize: 36, marginBottom: 8 }}>
                            {orchid.name}
                        </h2>
                        <div style={{ marginBottom: 12 }}>
                            {orchid.isNatural && (
                                <span style={{
                                    display: "inline-block",
                                    background: "#e0f7fa",
                                    color: "#009688",
                                    borderRadius: 8,
                                    padding: "2px 12px",
                                    fontWeight: 600,
                                    marginRight: 8
                                }}>Natural</span>
                            )}
                            {orchid.isSpecial && (
                                <span style={{
                                    display: "inline-block",
                                    background: "#ffe0f7",
                                    color: "#c44fb6",
                                    borderRadius: 8,
                                    padding: "2px 12px",
                                    fontWeight: 600
                                }}>Special</span>
                            )}
                        </div>
                        <table style={{ width: "100%", fontSize: 18, marginBottom: 18 }}>
                            <tbody>
                                <tr>
                                    <td style={{ color: "#888", fontWeight: 500, padding: "4px 8px" }}>Category:</td>
                                    <td style={{ fontWeight: 600 }}>{orchid.category || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#888", fontWeight: 500, padding: "4px 8px" }}>Origin:</td>
                                    <td style={{ fontWeight: 600 }}>{orchid.origin || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#888", fontWeight: 500, padding: "4px 8px" }}>Color:</td>
                                    <td style={{ fontWeight: 600 }}>
                                        <span style={{
                                            display: "inline-block",
                                            width: 18,
                                            height: 18,
                                            borderRadius: "50%",
                                            background: orchid.color,
                                            border: "1px solid #ccc",
                                            marginRight: 8,
                                            verticalAlign: "middle"
                                        }}></span>
                                        {orchid.color || "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#888", fontWeight: 500, padding: "4px 8px" }}>Rating:</td>
                                    <td style={{ fontWeight: 600 }}>
                                        <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                                            {Array.from({ length: orchid.rating || 0 }).map((_, idx) => (
                                                <FaStar key={idx} color="#FFD700" />
                                            ))}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#888", fontWeight: 500, padding: "4px 8px" }}>Likes:</td>
                                    <td style={{ fontWeight: 600, color: "#e08bca" }}>{orchid.numberOfLike || orchid.likes || 0}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailOrchid