import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arcido.in",
  description: "DIGITAL DONE RIGHT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Users/starkz/Desktop/Work/Arcido/arcido/src/app/arcido.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Particles.js container */}
        <div id="particles-js" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'auto',
        }}></div>
        {/* Remove Stats overlay and stats.js script */}
        <Script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" strategy="afterInteractive" />
        {/* Custom script to initialize particles.js only */}
        <Script id="particles-init" strategy="afterInteractive">
          {`
            function initParticles() {
              particlesJS("particles-js", {
                "particles": {
                  "number": { "value": 160, "density": { "enable": true, "value_area": 800 } },
                  "color": { "value": "#ffffff" },
                  "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } },
                  "opacity": { "value": 1, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0, "sync": false } },
                  "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 4, "size_min": 0.3, "sync": false } },
                  "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
                  "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 600 } }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": { "enable": true, "mode": ["bubble"] },
                    "onclick": { "enable": true, "mode": ["push", "repulse"] },
                    "resize": true
                  },
                  "modes": {
                    "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
                    "bubble": { "distance": 250, "size": 6, "duration": 2, "opacity": 0.8, "speed": 3 },
                    "repulse": { "distance": 200, "duration": 0.4 },
                    "push": { "particles_nb": 4 },
                    "remove": { "particles_nb": 2 }
                  }
                },
                "retina_detect": true
              });
            }
            function waitForParticlesJS() {
              if (window.particlesJS) {
                initParticles();
              } else {
                setTimeout(waitForParticlesJS, 50);
              }
            }
            waitForParticlesJS();
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
