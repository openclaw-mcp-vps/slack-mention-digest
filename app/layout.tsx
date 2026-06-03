import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SlackDigest – Daily digest of Slack mentions you missed",
  description: "Aggregates all your Slack mentions, replies, and DMs into a clean daily email digest with full context. Never miss an important message again."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a0fafe9b-9192-4444-980b-505101c08346"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
