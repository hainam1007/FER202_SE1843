import React from 'react';

function OurContact() {
    return (
        <div style={{ background: "#faf7f2", minHeight: "90px", padding: "40px 0" }}>
            <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 24px" }}>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 60,
                        justifyContent: "center",
                        alignItems: "flex-start",
                        width: "100%",
                    }}
                >
                    <div style={{ minWidth: 260, flex: 1, textAlign: "center" }}>
                        <h2 style={{ color: "#c44fb6", fontWeight: 700, fontSize: 38, marginBottom: 20 }}>Address</h2>
                        <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 5 }}>
                            National University Student Community House
                        </div>
                    </div>
                    <div style={{ minWidth: 220, flex: 1, textAlign: "center" }}>
                        <h2 style={{ color: "#c44fb6", fontWeight: 700, fontSize: 38, marginBottom: 20 }}>Phones</h2>
                        <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 5 }}>098 651 0235</div>
                    </div>
                    <div style={{ minWidth: 260, flex: 1, textAlign: "center" }}>
                        <h2 style={{ color: "#c44fb6", fontWeight: 700, fontSize: 38, marginBottom: 20 }}>Email</h2>
                        <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 5 }}>
                            orchidgardenshop@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurContact;