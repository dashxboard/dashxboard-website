import { ImageResponse } from "next/og";
import { Logo } from "@/components/icons/Logo";

export const alt =
  "Dashxboard - Community-driven platform for Stronghold ecosystem";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5ff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage:
              "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "20px 30px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Logo width="56" height="56" />
            <div
              style={{
                display: "flex",
                fontSize: 48,
                fontWeight: "bold",
                color: "#09090b",
              }}
            >
              Dashxboard
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              color: "#71717a",
              maxWidth: "600px",
              lineHeight: 1.4,
              textAlign: "center",
            }}
          >
            The community-driven platform that empowers the Stronghold (SHx)
            ecosystem.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
