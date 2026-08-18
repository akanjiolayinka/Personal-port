import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "OlayinkaCodes — Olayinka Akanji, Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0B0D10",
          backgroundImage:
            "radial-gradient(ellipse 60% 55% at 30% 35%, rgba(217,164,65,0.16), transparent 60%), radial-gradient(ellipse 55% 50% at 75% 70%, rgba(79,184,174,0.14), transparent 65%)",
          padding: "80px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", color: "#4FB8AE", fontSize: 26, letterSpacing: 4 }}>
          SOFTWARE ENGINEER
        </div>
        <div
          style={{
            display: "flex",
            color: "#E7E5E0",
            fontSize: 68,
            fontWeight: 700,
            marginTop: 24,
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          Backend systems, built from scratch.
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop: 56 }}>
          <div style={{ display: "flex", color: "#D9A441", fontSize: 30 }}>
            {"> "}
          </div>
          <div style={{ display: "flex", color: "#8B8F94", fontSize: 30, marginLeft: 10 }}>
            olayinka
          </div>
          <div style={{ display: "flex", color: "#D9A441", fontSize: 30, marginLeft: 2 }}>
            Codes
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
