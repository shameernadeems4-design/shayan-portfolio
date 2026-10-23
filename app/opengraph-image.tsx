import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0b",
          padding: "72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(245,242,234,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,242,234,0.06) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(228,185,95,0.5)",
              color: "#e4b95f",
              fontSize: 26,
            }}
          >
            SN
          </div>
          <div
            style={{
              color: "#cbc7bd",
              fontSize: 18,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            Design Studio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: "#e4b95f",
              fontSize: 20,
              letterSpacing: 8,
              textTransform: "uppercase",
            }}
          >
            {site.title}
          </div>
          <div
            style={{
              color: "#f5f2ea",
              fontSize: 88,
              lineHeight: 1,
              letterSpacing: -2,
            }}
          >
            Graphic · Print · Web
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #26262c",
            paddingTop: 24,
            color: "#8f8b83",
            fontSize: 22,
          }}
        >
          <span>{site.name}</span>
          <span>Self-initiated concept portfolio</span>
        </div>
      </div>
    ),
    size,
  );
}
