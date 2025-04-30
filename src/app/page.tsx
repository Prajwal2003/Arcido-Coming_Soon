"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "ARCIDO TECH", href: "#" },
  { label: "ARCIDO STUDIO", href: "#" },
  { label: "ABOUT US", href: "#" },
  { label: "ARCIDO FLOW", href: "#" },
  { label: "ARCIDO DIGITAL", href: "#" },
];

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 300,
  fontSize: 13,
  letterSpacing: 1,
  padding: '0 8px',
  lineHeight: '80px',
};

export default function Home() {
  const [imgOffset, setImgOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const x = Math.random() * 100 - 50; // -50 to +50
      const y = Math.random() * 100 - 50; // -50 to +50
      setImgOffset({ x, y });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <style>{`
        .arcido-nav-link {
          position: relative;
          display: inline-block;
          transition: color 0.2s;
          text-decoration: none !important;
        }
        .arcido-nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 1px;
          background: #e0e0e0;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
          margin-bottom: 25px;
        }
        .arcido-nav-link:hover::after {
          transform: scaleX(1);
        }
        .arcido-nav-link:hover {
          color: #e0e0e0 !important;
        }
        .arcido-login-btn {
          transition: background 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .arcido-login-btn:hover {
          background: #fff !important;
          color: #18191b !important;
          box-shadow: 0 2px 8px 0 #0002;
        }
        .arcido-signup-btn {
          transition: background 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .arcido-signup-btn:hover {
          background: #e0e0e0 !important;
          color: #18191b !important;
          box-shadow: 0 2px 8px 0 #0002;
        }
      `}</style>
      <nav
        style={{
          width: "100%",
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 4vw",
          height: 80,
          position: "relative",
          zIndex: 1,
          marginTop: 20,
        }}
      >
        {/* Left: Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/arcido-logo.png"
            alt="Arcido Logo"
            width={140}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </div>
        {/* Right: Nav Links + Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href="https://www.instagram.com/arcido.tech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" style={navLinkStyle} className="arcido-nav-link">{navLinks[0].label}</a>
          <a href="https://www.instagram.com/arcido.studios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" style={navLinkStyle} className="arcido-nav-link">{navLinks[1].label}</a>
          <a href="https://www.instagram.com/arcido.flow?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" style={navLinkStyle} className="arcido-nav-link">{navLinks[3].label}</a>
          <a href="https://www.instagram.com/arcido.digital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" style={navLinkStyle} className="arcido-nav-link">{navLinks[4].label}</a>
        </div>
      </nav>
      {/* Coming Soon Hero Section */}
      <div
        style={{
          minHeight: "calc(100vh - 80px)",
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "relative",
          zIndex: 1,
          background: 'transparent',
          paddingLeft: "4vw",
        }}
      >
        {/* Left: Text and Socials */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1 }}>
          <h1
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: 70,
              letterSpacing: 2,
              margin: 0,
              textAlign: "left",
            }}
          >
            Coming Soon
          </h1>
          <p
            style={{
              color: "#e0e0e0",
              fontSize: "1.1rem",
              marginTop: 16,
              marginBottom: 40,
              textAlign: "left",
              maxWidth: 400,
            }}
          >
            Exciting things are coming soon! For updates and more information, connect with us on our socials. Stay tuned!
          </p>
          <div style={{ display: "flex", gap: 25, marginTop: 0 }}>
            <a href="https://www.instagram.com/the.arcido?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="45" height="45" viewBox="0 0 32 32" fill="none"><rect width="40" height="40" rx="8" fill="#fff" fillOpacity="0.1"/><path d="M21.333 10.667a2 2 0 0 1 2 2v6.666a2 2 0 0 1-2 2H10.667a2 2 0 0 1-2-2v-6.666a2 2 0 0 1 2-2h10.666Zm-5.333 2.666a3.333 3.333 0 1 0 0 6.667 3.333 3.333 0 0 0 0-6.667Zm4-0.333a0.667 0.667 0 1 0 0 1.333 0.667 0.667 0 0 0 0-1.333Zm-4 1.333a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" fill="#fff"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCS2cQoZXzuBBrfwZcylolbQ" target="_blank" rel="noopener" aria-label="YouTube">
              <svg width="45" height="45" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#fff" fillOpacity="0.1"/><g><path d="M32.8 15.2c-.2-.8-.8-1.4-1.6-1.6C29.6 13 20 13 20 13s-9.6 0-11.2.6c-.8.2-1.4.8-1.6 1.6C7 16.8 7 20 7 20s0 3.2.6 4.8c.2.8.8 1.4 1.6 1.6C10.4 27 20 27 20 27s9.6 0 11.2-.6c.8-.2 1.4-.8 1.6-1.6.6-1.6.6-4.8.6-4.8s0-3.2-.6-4.8zM17.6 23.2v-6.4L24 20l-6.4 3.2z" fill="#fff"/></g></svg>
            </a>
            <a href="https://www.linkedin.com/company/arcido/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg width="45" height="45" viewBox="0 0 32 32" fill="none"><rect width="40" height="40" rx="8" fill="#fff" fillOpacity="0.1"/><path d="M12.667 13.333h2.666v1.333h.04c.372-.704 1.28-1.447 2.637-1.447 2.82 0 3.333 1.857 3.333 4.273v4.174h-2.667v-3.707c0-.885-.016-2.025-1.233-2.025-1.234 0-1.422.964-1.422 1.96v3.772h-2.666v-7.333Zm-4 0h2.667v7.333H8.667v-7.333Zm1.333-2.667a1.333 1.333 0 1 1 0-2.666 1.333 1.333 0 0 1 0 2.666Z" fill="#fff"/></svg>
            </a>
          </div>
        </div>
        {/* Right: Hero Image */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            minWidth: 0,
            position: 'relative',
            top: `${-40 + imgOffset.y}px`,
            right: `${100 - imgOffset.x}px`,
            transition: 'top 6s cubic-bezier(0.5,0,0.2,1), right 6s cubic-bezier(0.5,0,0.2,1)',
          }}
        >
          <Image
            src="/herosection.png"
            alt="Hero Section"
            width={400}
            height={400}
            style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </>
  );
}
