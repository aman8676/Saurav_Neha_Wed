// "use client"

// import { motion } from "framer-motion"
// import { useState } from "react"

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)

//   const navItems = [
//     { label: "Home", href: "#home" },
//     { label: "Countdown", href: "#countdown" },
//     { label: "Gallery", href: "#gallery" },
//     { label: "Details", href: "#details" },
//   ]

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/20"
//     >
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="text-2xl font-serif text-primary"
//         >
//           💍
//         </motion.div>

//         <div className="hidden md:flex gap-8">
//           {navItems.map((item, i) => (
//             <motion.a
//               key={item.label}
//               href={item.href}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 + i * 0.1 }}
//               className="text-foreground hover:text-primary transition-colors"
//             >
//               {item.label}
//             </motion.a>
//           ))}
//         </div>

//         <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
//           ☰
//         </button>
//       </div>

//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           className="md:hidden bg-background/90 border-t border-primary/20"
//         >
//           <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="text-foreground hover:text-primary transition-colors"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>
//         </motion.div>
//       )}
//     </motion.nav>
//   )
// }
