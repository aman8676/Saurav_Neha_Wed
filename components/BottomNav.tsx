// // import React from "react";
// // import { FloatingDock } from "@/components/ui/floating-dock";
// // import {
// //   IconBrandGithub,
// //   IconBrandX,
// //   IconExchange,
// //   IconHome,
// //   IconNewSection,
// //   IconTerminal2,
  
// // } from "@tabler/icons-react";

// // export function FloatingDockDemo() {
// //   const links = [
// //     {
// //       title: "Home",
// //       icon: (
// //         <svg
// //           className="w-12 h-12"
// //           viewBox="0 0 512 512"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <defs>
// //             <radialGradient id="yellowBg" cx="50%" cy="40%" r="70%">
// //               <stop offset="0%" stop-color="#fff7a8" />
// //               <stop offset="50%" stop-color="#ffd84d" />
// //               <stop offset="100%" stop-color="#f4b400" />
// //             </radialGradient>
// //           </defs>

// //           <circle cx="256" cy="256" r="240" fill="url(#yellowBg)" />

// //           <circle
// //             cx="256"
// //             cy="256"
// //             r="225"
// //             fill="none"
// //             stroke="#b36a00"
// //             stroke-width="10"
// //           />

// //           <circle
// //             cx="256"
// //             cy="256"
// //             r="200"
// //             fill="none"
// //             stroke="#8a4b00"
// //             stroke-width="5"
// //             stroke-dasharray="12 14"
// //             stroke-linecap="round"
// //             opacity="0.8"
// //           />

// //           <g
// //             transform="translate(256,256) scale(7) translate(-12,-12)"
// //             fill="black"
// //           >
// //             <path d="M3 10.5L12 3L21 10.5V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V10.5Z" />
// //             <path d="M9 21V14H15V21" fill="white" />
// //           </g>
// //         </svg>
// //       ),
// //       href: "/",
// //     },

// //     {
// //       title: "Mangal_Path",
// //       icon: (
// //         <svg
// //           className="w-12 h-12"
// //           viewBox="0 0 512 512"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <defs>
// //             <radialGradient id="bgGradient" cx="50%" cy="35%" r="70%">
// //               <stop offset="0%" stop-color="#fff7cc" />
// //               <stop offset="50%" stop-color="#ffde7a" />
// //               <stop offset="100%" stop-color="#f6b21a" />
// //             </radialGradient>

// //             <linearGradient
// //               id="borderGradient"
// //               x1="0%"
// //               y1="0%"
// //               x2="100%"
// //               y2="100%"
// //             >
// //               <stop offset="0%" stop-color="#b32100" />
// //               <stop offset="100%" stop-color="#7f1400" />
// //             </linearGradient>
// //           </defs>

// //           <circle cx="256" cy="256" r="240" fill="url(#bgGradient)" />
// //           <circle
// //             cx="256"
// //             cy="256"
// //             r="230"
// //             fill="none"
// //             stroke="url(#borderGradient)"
// //             stroke-width="12"
// //           />
// //           <circle
// //             cx="256"
// //             cy="256"
// //             r="205"
// //             fill="none"
// //             stroke="#b32100"
// //             stroke-width="4"
// //             stroke-dasharray="10 12"
// //             stroke-linecap="round"
// //             opacity="0.8"
// //           />

// //           <g fill="#ffffff" opacity="0.95">
// //             <circle cx="256" cy="60" r="5" />
// //             <circle cx="256" cy="452" r="5" />
// //             <circle cx="60" cy="256" r="5" />
// //             <circle cx="452" cy="256" r="5" />
// //             <circle cx="120" cy="120" r="4" />
// //             <circle cx="392" cy="120" r="4" />
// //             <circle cx="120" cy="392" r="4" />
// //             <circle cx="392" cy="392" r="4" />
// //           </g>

// //           <g fill="#b32100">
// //             <rect x="236" y="160" width="40" height="192" rx="6" ry="6" />
// //             <rect x="184" y="236" width="192" height="40" rx="6" ry="6" />

// //             <rect x="256" y="160" width="96" height="40" rx="6" ry="6" />
// //             <rect x="336" y="256" width="40" height="96" rx="6" ry="6" />

// //             <rect x="160" y="312" width="96" height="40" rx="6" ry="6" />

// //             <rect x="160" y="160" width="40" height="96" rx="6" ry="6" />
// //           </g>

// //           <g fill="#b32100">
// //             <circle cx="216" cy="216" r="10" />
// //             <circle cx="296" cy="216" r="10" />
// //             <circle cx="216" cy="296" r="10" />
// //             <circle cx="296" cy="296" r="10" />
// //           </g>

// //           <text
// //             x="256"
// //             y="420"
// //             text-anchor="middle"
// //             font-size="28"
// //             font-weight="700"
// //             font-family="Poppins, system-ui"
// //             fill="#7f1400"
// //           >
// //             शुभ विवाह
// //           </text>
// //         </svg>
// //       ),
// //       href: "/mangal_paath",
// //     },

// //     {
// //       title: "Pre-Wedding",
// //       icon: (
// //         <svg
// //           className="w-12 h-12"
// //           viewBox="0 0 512 512"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <defs>
// //             <radialGradient id="yellowBg" cx="50%" cy="40%" r="70%">
// //               <stop offset="0%" stop-color="#fff7a8" />
// //               <stop offset="50%" stop-color="#ffd84d" />
// //               <stop offset="100%" stop-color="#f4b400" />
// //             </radialGradient>
// //           </defs>

// //           <circle cx="256" cy="256" r="240" fill="url(#yellowBg)" />

// //           <circle
// //             cx="256"
// //             cy="256"
// //             r="225"
// //             fill="none"
// //             stroke="#b36a00"
// //             stroke-width="10"
// //           />

// //           <circle
// //             cx="256"
// //             cy="256"
// //             r="200"
// //             fill="none"
// //             stroke="#8a4b00"
// //             stroke-width="5"
// //             stroke-dasharray="12 14"
// //             stroke-linecap="round"
// //             opacity="0.8"
// //           />

// //           <g
// //             transform="translate(256,256) scale(7) translate(-12,-12)"
// //             fill="black"
// //           >
// //             <path d="M4 7H7L9 5H15L17 7H20C21.1 7 22 7.9 22 9V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V9C2 7.9 2.9 7 4 7Z" />
// //             <circle cx="12" cy="14" r="5" fill="white" />
// //           </g>
// //         </svg>
// //       ),
// //       href: "/pre-wedding",
// //     },

// //     {
// //       title: "Haldi Ceremony",
// //       icon: (
// //         <svg
// //           className="w-12 h-12"
// //           viewBox="0 0 512 512"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <defs>
// //             <radialGradient id="haldiBg" cx="50%" cy="35%" r="70%">
// //               <stop offset="0%" stop-color="#ffe766" />
// //               <stop offset="60%" stop-color="#ffc533" />
// //               <stop offset="100%" stop-color="#f79b0c" />
// //             </radialGradient>

// //             <radialGradient id="shadow" cx="50%" cy="50%" r="50%">
// //               <stop offset="0%" stop-color="rgba(0,0,0,0.35)" />
// //               <stop offset="100%" stop-color="rgba(0,0,0,0)" />
// //             </radialGradient>

// //             <linearGradient
// //               id="leafGradient"
// //               x1="0%"
// //               y1="0%"
// //               x2="100%"
// //               y2="100%"
// //             >
// //               <stop offset="0%" stop-color="#5abf4b" />
// //               <stop offset="100%" stop-color="#2f7f2c" />
// //             </linearGradient>
// //           </defs>

// //           <circle cx="256" cy="256" r="230" fill="url(#haldiBg)" />
// //           <circle
// //             cx="256"
// //             cy="256"
// //             r="230"
// //             fill="none"
// //             stroke="#ffffff"
// //             stroke-width="10"
// //             stroke-opacity="0.9"
// //           />
// //           <circle
// //             cx="256"
// //             cy="256"
// //             r="210"
// //             fill="none"
// //             stroke="#aa5b00"
// //             stroke-width="4"
// //             stroke-dasharray="8 10"
// //             stroke-linecap="round"
// //             opacity="0.7"
// //           />

// //           <g fill="#ffffff" opacity="0.9">
// //             <circle cx="120" cy="130" r="4" />
// //             <circle cx="390" cy="140" r="4" />
// //             <circle cx="140" cy="360" r="4" />
// //             <circle cx="380" cy="350" r="4" />
// //           </g>

// //           <g transform="translate(90,200) rotate(-25)">
// //             <path
// //               d="M0 40 C 20 10, 50 0, 80 10 C 55 20, 35 35, 20 55 C 10 50, 3 45, 0 40 Z"
// //               fill="url(#leafGradient)"
// //             />
// //             <path
// //               d="M15 65 C 35 40, 60 30, 85 40 C 65 50, 45 70, 30 90 C 22 83, 17 75, 15 65 Z"
// //               fill="url(#leafGradient)"
// //             />
// //           </g>

// //           <g transform="translate(330,200) rotate(25)">
// //             <path
// //               d="M0 40 C 20 10, 50 0, 80 10 C 55 20, 35 35, 20 55 C 10 50, 3 45, 0 40 Z"
// //               fill="url(#leafGradient)"
// //             />
// //             <path
// //               d="M15 65 C 35 40, 60 30, 85 40 C 65 50, 45 70, 30 90 C 22 83, 17 75, 15 65 Z"
// //               fill="url(#leafGradient)"
// //             />
// //           </g>

// //           <ellipse
// //             cx="256"
// //             cy="332"
// //             rx="120"
// //             ry="24"
// //             fill="#000000"
// //             opacity="0.18"
// //           />

// //           <g transform="translate(156,245)">
// //             <rect
// //               x="10"
// //               y="55"
// //               width="180"
// //               height="70"
// //               rx="26"
// //               ry="26"
// //               fill="#9c3b00"
// //             />
// //             <rect
// //               x="20"
// //               y="60"
// //               width="160"
// //               height="55"
// //               rx="22"
// //               ry="22"
// //               fill="#c25711"
// //             />

// //             <ellipse cx="100" cy="55" rx="100" ry="26" fill="#b14807" />
// //             <ellipse cx="100" cy="50" rx="95" ry="20" fill="#f7d9a2" />

// //             <path
// //               d="M10 45
// //          C 35 20, 65 10, 100 18
// //          C 135 10, 165 20, 190 45
// //          C 170 50, 140 55, 100 57
// //          C 60 55, 30 50, 10 45 Z"
// //               fill="#ffb400"
// //             />

// //             <path
// //               d="M30 40
// //          C 55 30, 80 27, 100 30
// //          C 120 27, 145 30, 170 40
// //          C 150 42, 130 45, 100 47
// //          C 70 45, 50 42, 30 40 Z"
// //               fill="#ffd766"
// //               opacity="0.8"
// //             />
// //           </g>

// //           <g fill="#ffffff" opacity="0.9">
// //             <path
// //               d="M256 180
// //          m-6 0
// //          l6 -14
// //          l6 14
// //          l14 6
// //          l-14 6
// //          l-6 14
// //          l-6 -14
// //          l-14 -6
// //          l14 -6 z"
// //             />
// //             <circle cx="210" cy="195" r="3" />
// //             <circle cx="302" cy="200" r="3" />
// //           </g>

// //           <text
// //             x="256"
// //             y="210"
// //             text-anchor="middle"
// //             font-size="52"
// //             font-weight="700"
// //             font-family="Poppins, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
// //             fill="#7a2b00"
// //           >
// //             HALDI
// //           </text>

// //           <text
// //             x="256"
// //             y="242"
// //             text-anchor="middle"
// //             font-size="20"
// //             font-weight="500"
// //             font-family="Poppins, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
// //             fill="#7a2b00"
// //             opacity="0.8"
// //           >
// //             SHUBH VIVAH
// //           </text>
// //         </svg>
// //       ),
// //       href: "/haldi_ceremony",
// //     },

// //     {
// //       title: "Sangeet",
// //       icon: (
// //         <svg
// //           className="w-12 h-12"
// //           viewBox="0 0 512 512"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <defs>
// //             <radialGradient id="bg" cx="50%" cy="40%" r="70%">
// //               <stop offset="0%" stop-color="#fff7a8" />
// //               <stop offset="50%" stop-color="#ffd84d" />
// //               <stop offset="100%" stop-color="#f4b400" />
// //             </radialGradient>
// //           </defs>

// //           <circle cx="256" cy="256" r="240" fill="url(#bg)" />
// //           <circle
// //             cx="256"
// //             cy="256"
// //             r="225"
// //             fill="none"
// //             stroke="#b36a00"
// //             stroke-width="10"
// //           />
// //           <circle
// //             cx="256"
// //             cy="256"
// //             r="200"
// //             fill="none"
// //             stroke="#8a4b00"
// //             stroke-width="5"
// //             stroke-dasharray="12 14"
// //             opacity="0.8"
// //           />

// //           <g
// //             transform="translate(256,256) scale(7) translate(-12,-12)"
// //             fill="black"
// //           >
// //             <path d="M13 2L13 16C12 15.5 11 15 10 15C8 15 6.5 16.5 6.5 18.5C6.5 20.5 8 22 10 22C12 22 13.5 20.5 13.5 18.5V10H19V16C18 15.5 17 15 16 15C14 15 12.5 16.5 12.5 18.5C12.5 20.5 14 22 16 22C18 22 19.5 20.5 19.5 18.5V2Z" />
// //             <rect x="3" y="11" width="6" height="7" rx="2" />
// //             <rect x="17" y="11" width="6" height="7" rx="2" />
// //           </g>
// //         </svg>
// //       ),
// //       href: "/sangeet",
// //     },
// //   ];
// //   return (
// //     <div className="fixed flex justify-center w-full z-50">
// //       <FloatingDock
// //         desktopClassName="fixed bottom-0 m-3"
// //         mobileClassName="fixed top-1/2 transform -translate-y-[-1rem] right-4"
// //         items={links}
// //       />
// //     </div>
// //   );
// // }



import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";

export function FloatingDockDemo() {
  const iconSize = "w-14 h-14"; // controls visible icon size

  const links = [
    {
      title: "Home",
      icon: (
        <svg
          className={iconSize}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          // preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <radialGradient id="yellowBg" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#fff7a8" />
              <stop offset="50%" stopColor="#ffd84d" />
              <stop offset="100%" stopColor="#f4b400" />
            </radialGradient>
          </defs>

          <circle cx="256" cy="256" r="240" fill="url(#yellowBg)" />

          <circle
            cx="256"
            cy="256"
            r="225"
            fill="none"
            stroke="#b36a00"
            strokeWidth="10"
          />

          <circle
            cx="256"
            cy="256"
            r="200"
            fill="none"
            stroke="#8a4b00"
            strokeWidth="5"
            strokeDasharray="12 14"
            strokeLinecap="round"
            opacity="0.8"
          />

          <g
            transform="translate(256,256) scale(4.5) translate(-12,-12)"
            fill="black"
          >
            <path d="M3 10.5L12 3L21 10.5V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V10.5Z" />
            <path d="M9 21V14H15V21" fill="white" />
          </g>
        </svg>
      ),
      href: "/",
    },

    {
      title: "Mangal_Path",
      icon: (
        <svg
          className={iconSize}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="bgGradient" cx="50%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#fff7cc" />
              <stop offset="50%" stopColor="#ffde7a" />
              <stop offset="100%" stopColor="#f6b21a" />
            </radialGradient>

            <linearGradient
              id="borderGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#b32100" />
              <stop offset="100%" stopColor="#7f1400" />
            </linearGradient>
          </defs>

          <circle cx="256" cy="256" r="240" fill="url(#bgGradient)" />
          <circle
            cx="256"
            cy="256"
            r="230"
            fill="none"
            stroke="url(#borderGradient)"
            strokeWidth="12"
          />
          <circle
            cx="256"
            cy="256"
            r="205"
            fill="none"
            stroke="#b32100"
            strokeWidth="4"
            strokeDasharray="10 12"
            strokeLinecap="round"
            opacity="0.8"
          />

          <g fill="#ffffff" opacity="0.95">
            <circle cx="256" cy="60" r="5" />
            <circle cx="256" cy="452" r="5" />
            <circle cx="60" cy="256" r="5" />
            <circle cx="452" cy="256" r="5" />
            <circle cx="120" cy="120" r="4" />
            <circle cx="392" cy="120" r="4" />
            <circle cx="120" cy="392" r="4" />
            <circle cx="392" cy="392" r="4" />
          </g>

          <g fill="#b32100">
            <rect x="236" y="160" width="40" height="192" rx="6" ry="6" />
            <rect x="184" y="236" width="192" height="40" rx="6" ry="6" />

            <rect x="256" y="160" width="96" height="40" rx="6" ry="6" />
            <rect x="336" y="256" width="40" height="96" rx="6" ry="6" />

            <rect x="160" y="312" width="96" height="40" rx="6" ry="6" />

            <rect x="160" y="160" width="40" height="96" rx="6" ry="6" />
          </g>

          <g fill="#b32100">
            <circle cx="216" cy="216" r="10" />
            <circle cx="296" cy="216" r="10" />
            <circle cx="216" cy="296" r="10" />
            <circle cx="296" cy="296" r="10" />
          </g>

          <text
            x="256"
            y="400"
            textAnchor="middle"
            fontSize="28"
            fontWeight="700"
            fontFamily="Poppins, system-ui"
            fill="#7f1400"
          >
            शुभ विवाह
          </text>
        </svg>
      ),
      href: "/mangal_paath",
    },

    {
      title: "Pre-Wedding",
      icon: (
        <svg
          className={iconSize}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="yellowBgPre" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#fff7a8" />
              <stop offset="50%" stopColor="#ffd84d" />
              <stop offset="100%" stopColor="#f4b400" />
            </radialGradient>
          </defs>

          <circle cx="256" cy="256" r="240" fill="url(#yellowBgPre)" />

          <circle
            cx="256"
            cy="256"
            r="225"
            fill="none"
            stroke="#b36a00"
            strokeWidth="10"
          />

          <circle
            cx="256"
            cy="256"
            r="200"
            fill="none"
            stroke="#8a4b00"
            strokeWidth="5"
            strokeDasharray="12 14"
            strokeLinecap="round"
            opacity="0.8"
          />

          <g
            transform="translate(256,256) scale(4.5) translate(-12,-12)"
            fill="black"
          >
            <path d="M4 7H7L9 5H15L17 7H20C21.1 7 22 7.9 22 9V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V9C2 7.9 2.9 7 4 7Z" />
            <circle cx="12" cy="14" r="5" fill="white" />
          </g>
        </svg>
      ),
      href: "/pre-wedding",
    },

    {
      title: "Haldi Ceremony",
      icon: (
        <svg
          className={iconSize}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="haldiBg" cx="50%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#ffe766" />
              <stop offset="60%" stopColor="#ffc533" />
              <stop offset="100%" stopColor="#f79b0c" />
            </radialGradient>

            <radialGradient id="shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(0,0,0,0.35)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>

            <linearGradient
              id="leafGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#5abf4b" />
              <stop offset="100%" stopColor="#2f7f2c" />
            </linearGradient>
          </defs>

          <circle cx="256" cy="256" r="230" fill="url(#haldiBg)" />
          <circle
            cx="256"
            cy="256"
            r="230"
            fill="none"
            stroke="#ffffff"
            strokeWidth="10"
            strokeOpacity="0.9"
          />
          <circle
            cx="256"
            cy="256"
            r="210"
            fill="none"
            stroke="#aa5b00"
            strokeWidth="4"
            strokeDasharray="8 10"
            strokeLinecap="round"
            opacity="0.7"
          />

          <g fill="#ffffff" opacity="0.9">
            <circle cx="120" cy="130" r="4" />
            <circle cx="390" cy="140" r="4" />
            <circle cx="140" cy="360" r="4" />
            <circle cx="380" cy="350" r="4" />
          </g>

          <g transform="translate(90,200) rotate(-25)">
            <path
              d="M0 40 C 20 10, 50 0, 80 10 C 55 20, 35 35, 20 55 C 10 50, 3 45, 0 40 Z"
              fill="url(#leafGradient)"
            />
            <path
              d="M15 65 C 35 40, 60 30, 85 40 C 65 50, 45 70, 30 90 C 22 83, 17 75, 15 65 Z"
              fill="url(#leafGradient)"
            />
          </g>

          <g transform="translate(330,200) rotate(25)">
            <path
              d="M0 40 C 20 10, 50 0, 80 10 C 55 20, 35 35, 20 55 C 10 50, 3 45, 0 40 Z"
              fill="url(#leafGradient)"
            />
            <path
              d="M15 65 C 35 40, 60 30, 85 40 C 65 50, 45 70, 30 90 C 22 83, 17 75, 15 65 Z"
              fill="url(#leafGradient)"
            />
          </g>

          <ellipse
            cx="256"
            cy="332"
            rx="120"
            ry="24"
            fill="#000000"
            opacity="0.18"
          />

          <g transform="translate(156,245)">
            <rect
              x="10"
              y="55"
              width="180"
              height="70"
              rx="26"
              ry="26"
              fill="#9c3b00"
            />
            <rect
              x="20"
              y="60"
              width="160"
              height="55"
              rx="22"
              ry="22"
              fill="#c25711"
            />

            <ellipse cx="100" cy="55" rx="100" ry="26" fill="#b14807" />
            <ellipse cx="100" cy="50" rx="95" ry="20" fill="#f7d9a2" />

            <path
              d="M10 45
         C 35 20, 65 10, 100 18
         C 135 10, 165 20, 190 45
         C 170 50, 140 55, 100 57
         C 60 55, 30 50, 10 45 Z"
              fill="#ffb400"
            />

            <path
              d="M30 40
         C 55 30, 80 27, 100 30
         C 120 27, 145 30, 170 40
         C 150 42, 130 45, 100 47
         C 70 45, 50 42, 30 40 Z"
              fill="#ffd766"
              opacity="0.8"
            />
          </g>

          <g fill="#ffffff" opacity="0.9">
            <path
              d="M256 180
         m-6 0
         l6 -14
         l6 14
         l14 6
         l-14 6
         l-6 14
         l-6 -14
         l-14 -6
         l14 -6 z"
            />
            <circle cx="210" cy="195" r="3" />
            <circle cx="302" cy="200" r="3" />
          </g>

          <text
            x="256"
            y="200"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="52"
            fontWeight="700"
            fontFamily="Poppins, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            fill="#7a2b00"
          >
            HALDI
          </text>

          <text
            x="256"
            y="235"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="20"
            fontWeight="500"
            fontFamily="Poppins, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            fill="#7a2b00"
            opacity="0.8"
          >
            SHUBH VIVAH
          </text>
        </svg>
      ),
      href: "/haldi_ceremony",
    },

    {
      title: "Sangeet",
      icon: (
        <svg
          className={iconSize}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="bg" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#fff7a8" />
              <stop offset="50%" stopColor="#ffd84d" />
              <stop offset="100%" stopColor="#f4b400" />
            </radialGradient>
          </defs>

          <circle cx="256" cy="256" r="240" fill="url(#bg)" />
          <circle
            cx="256"
            cy="256"
            r="225"
            fill="none"
            stroke="#b36a00"
            strokeWidth="10"
          />
          <circle
            cx="256"
            cy="256"
            r="200"
            fill="none"
            stroke="#8a4b00"
            strokeWidth="5"
            strokeDasharray="12 14"
            opacity="0.8"
          />

          <g
            transform="translate(256,256) scale(4.5) translate(-12,-12)"
            fill="black"
          >
            <path d="M13 2L13 16C12 15.5 11 15 10 15C8 15 6.5 16.5 6.5 18.5C6.5 20.5 8 22 10 22C12 22 13.5 20.5 13.5 18.5V10H19V16C18 15.5 17 15 16 15C14 15 12.5 16.5 12.5 18.5C12.5 20.5 14 22 16 22C18 22 19.5 20.5 19.5 18.5V2Z" />
            <rect x="3" y="11" width="6" height="7" rx="2" />
            <rect x="17" y="11" width="6" height="7" rx="2" />
          </g>
        </svg>
      ),
      href: "/sangeet",
    },
  ];

  return (
    <div className="fixed flex justify-center w-full z-50">
      <FloatingDock
        desktopClassName="fixed bottom-0 m-3"
        mobileClassName="fixed top-1/2 transform -translate-y-[-1rem] right-8"
        items={links}
      />
    </div>
  );
}

