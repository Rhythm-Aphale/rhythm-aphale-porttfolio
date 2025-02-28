"use client";
import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, Instagram, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

// Define static configurations for initial render
const CONFIG = {
  palette: {
    primary: "#E63946",
    secondary: "#EF233C",
    accent: "#4F46E5",
    eyes: "#3B82F6",
    web: "#818CF8"
  },
  shape: {
    body: "M120 180L160 80H80L120 180Z",
    logo: "M120 80c-22 0-40-18-40-40v40h80V40c0 22-18 40-40 40z"
  },
  hologram: "AI ONLINE",
  webCount: 30,
  rotation: 0
};

const Hero = () => {
  const [config, setConfig] = React.useState(CONFIG);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const parentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Randomize configuration only on client-side after initial render
    const palettes = [
      {
        primary: "#E63946",
        secondary: "#EF233C",
        accent: "#4F46E5",
        eyes: "#3B82F6",
        web: "#818CF8"
      },
      {
        primary: "#3B82F6",
        secondary: "#2563EB",
        accent: "#10B981",
        eyes: "#E63946",
        web: "#EF233C"
      },
      {
        primary: "#10B981",
        secondary: "#059669",
        accent: "#8B5CF6",
        eyes: "#F59E0B",
        web: "#FCD34D"
      }
    ];

    const shapes = [
      {
        body: "M120 180L160 80H80L120 180Z",
        logo: "M120 80c-22 0-40-18-40-40v40h80V40c0 22-18 40-40 40z"
      },
      {
        body: "M120 160L140 100H100L120 160Z",
        logo: "M120 100c-15 0-30-10-30-30v30h60V70c0 20-15 30-30 30z"
      }
    ];

    const holograms = ["AI ONLINE", "SYSTEM READY", "PROTOCOL ACTIVE"];

    setConfig({
      palette: palettes[Math.floor(Math.random() * palettes.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      hologram: holograms[Math.floor(Math.random() * holograms.length)],
      webCount: Math.floor(Math.random() * 20 + 20),
      rotation: Math.random() * 20 - 10
    });
  }, []);

  // Beam configurations
  const beams = [
    {
      initialX: 10,
      translateX: 10,
      duration: 7,
      repeatDelay: 3,
      delay: 2,
    },
    {
      initialX: 600,
      translateX: 600,
      duration: 3,
      repeatDelay: 3,
      delay: 4,
    },
    {
      initialX: 100,
      translateX: 100,
      duration: 7,
      repeatDelay: 7,
      className: "h-6",
    },
    {
      initialX: 400,
      translateX: 400,
      duration: 5,
      repeatDelay: 14,
      delay: 4,
    },
    {
      initialX: 800,
      translateX: 800,
      duration: 11,
      repeatDelay: 2,
      className: "h-20",
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: 4,
      repeatDelay: 2,
      className: "h-12",
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: 6,
      repeatDelay: 4,
      delay: 2,
      className: "h-6",
    },
  ];

  return (
    <div 
      ref={parentRef}
      className="relative flex flex-col items-center justify-center h-screen bg-black text-white overflow-hidden"
    >
      <Spotlight />

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20"
      >
        <a 
          href="https://github.com/Rhythm-Aphale" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-900/50 p-3 rounded-full hover:bg-gray-800 transition-colors duration-300 backdrop-blur-sm border border-gray-700/50 hover:scale-110 transform"
        >
          <Github className="w-5 h-5 text-white" />
        </a>
        <a 
          href="https://www.instagram.com/Its_rhythm03" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-900/50 p-3 rounded-full hover:bg-gray-800 transition-colors duration-300 backdrop-blur-sm border border-gray-700/50 hover:scale-110 transform"
        >
          <Instagram className="w-5 h-5 text-white" />
        </a>
        <a 
          href="https://www.linkedin.com/in/rhythm-aphale0302/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-900/50 p-3 rounded-full hover:bg-gray-800 transition-colors duration-300 backdrop-blur-sm border border-gray-700/50 hover:scale-110 transform"
        >
          <Linkedin className="w-5 h-5 text-white" />
        </a>
      </motion.div>

      {/* Beam Effects */}
      {beams.map((beam) => (
        <CollisionMechanism
          key={beam.initialX + "beam-idx"}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {/* Cybernetic Spider with Holograms */}
      <motion.div
        style={{
          x,
          y,
          rotateX,
          rotateY,
          perspective: 1000,
        }}
        className="absolute right-5 left-5 md:right-20 bottom-10 md:bottom-20 z-10 cursor-grab active:cursor-grabbing"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-48 h-48 md:w-64 md:h-64"
          style={{ rotate: config.rotation }}
        >
          <svg
            viewBox="0 0 240 240"
            className="w-full h-full drop-shadow-2xl"
          >
            {/* Dynamic Background */}
            <motion.path
              d="M120 240C190 240 240 190 240 120C240 50 190 0 120 0C50 0 0 50 0 120C0 190 50 240 120 240Z"
              fill={`url(#hologramGradient-${config.palette.primary})`}
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Dynamic Body */}
            <motion.g
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <path
                d={config.shape.body}
                fill={`url(#spiderGradient-${config.palette.primary})`}
                stroke={`url(#neonStroke-${config.palette.accent})`}
                strokeWidth="4"
              />

              {/* Dynamic Logo */}
              <path
                d={config.shape.logo}
                fill={config.palette.primary}
              />

              {/* Dynamic Eyes */}
              <motion.g
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  d="M100 70c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z"
                  fill={config.palette.eyes}
                  filter="url(#glow)"
                />
                <path
                  d="M140 70c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z"
                  fill={config.palette.eyes}
                  filter="url(#glow)"
                />
              </motion.g>

              {/* Web Shooters */}
              <motion.path
                d="M80 120L40 160"
                stroke={`url(#neonStroke-${config.palette.accent})`}
                strokeWidth="4"
                animate={{ pathLength: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.path
                d="M160 120L200 160"
                stroke={`url(#neonStroke-${config.palette.accent})`}
                strokeWidth="4"
                animate={{ pathLength: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Holographic Interface */}
              <motion.rect
                x="80"
                y="140"
                width="80"
                height="40"
                rx="5"
                fill={`url(#hologramGradient-${config.palette.primary})`}
                stroke={config.palette.accent}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <text
                x="120"
                y="165"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="bold"
              >
                {config.hologram}
              </text>

              {/* Dynamic Web Patterns */}
              {[...Array(config.webCount)].map((_, i) => (
                <motion.path
                  key={i}
                  d={`M${Math.random() * 200 + 20} ${Math.random() * 200 + 20}l4 4`}
                  stroke={config.palette.web}
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: [0, -50],
                  }}
                  transition={{
                    delay: Math.random() * 2,
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.g>

            {/* Visual Effects */}
            <defs>
              <linearGradient
                id={`spiderGradient-${config.palette.primary}`}
                x1="120"
                y1="0"
                x2="120"
                y2="180"
              >
                <stop stopColor={config.palette.primary} />
                <stop offset="1" stopColor={config.palette.secondary} />
              </linearGradient>

              <linearGradient
                id={`neonStroke-${config.palette.accent}`}
                x1="120"
                y1="0"
                x2="120"
                y2="240"
              >
                <stop stopColor={config.palette.accent} />
                <stop offset="1" stopColor={config.palette.web} />
              </linearGradient>

              <radialGradient
                id={`hologramGradient-${config.palette.primary}`}
                cx="50%"
                cy="50%"
                r="50%"
              >
                <stop offset="0%" stopColor={config.palette.accent} stopOpacity="0.3" />
                <stop offset="100%" stopColor={config.palette.primary} stopOpacity="0.1" />
              </radialGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <div className="relative z-10 text-center px-4 md:px-6 pb-32 md:pb-0">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4"
        >
          CRAFTING NEW REALITIES THROUGH THE ART OF CODE
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4"
        >
          <TypewriterEffect
         words={[
          { text: "Rhythm", className: "text-blue-400" },
          { text: "Aphale", className: "text-purple-400" },
          { text: "|", className: "text-gray-500" },
          { text: "Engineering", className: "text-blue-400" },
          { text: "the", className: "text-purple-400" },
          { text: "Future", className: "text-blue-500" },
          { text: "of", className: "text-purple-500" },
          { text: "Web", className: "text-blue-500" },
          { text: "Innovation", className: "text-purple-500" },
        ]}
        
            className="text-lg md:text-3xl font-semibold"
            cursorClassName="bg-blue-500 h-6 md:h-8"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-6 md:mt-8 text-xs md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
        >
          Full-Stack Architect specializing in AI-driven solutions,
          real-time systems, and immersive web experiences using Next.js & cutting-edge tech
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-8 flex flex-col md:flex-row gap-4 justify-center"
        >
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform text-xs md:text-base group">
            <span className="group-hover:translate-x-1 transition-transform">
              Resume
            </span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="mailto:rhythm03aphale@gmail.com" className="border border-blue-400/30 px-6 py-3 rounded-full font-semibold hover:bg-blue-400/10 transition-colors text-sm md:text-base hover:border-blue-400/50">
            Send an Email
          </a>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 animate-bounce"
      >
        <div className="w-6 h-10 border-4 border-blue-400/30 rounded-full relative">
          <div className="w-1 h-2 bg-blue-400 absolute top-2 left-1/2 -translate-x-1/2 rounded-full animate-scroll"></div>
        </div>
      </motion.div>

      {/* Container for beam collisions */}
      <div
        ref={containerRef}
        className="absolute bottom-0 w-full inset-x-0 pointer-events-none h-1"
      ></div>
    </div>
  );
};

// CollisionMechanism Component
const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement | null>;
    parentRef: React.RefObject<HTMLDivElement | null>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = React.useRef<HTMLDivElement>(null);
  const [collision, setCollision] = React.useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = React.useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = React.useState(false);

  React.useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef]);

  React.useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 2000);

      setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
          rotate: beamOptions.rotate || 0,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || "0px",
            rotate: beamOptions.rotate || 0,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-0 top-20 m-auto w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent h-14 z-0",
          beamOptions.className
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            className=""
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";

// Explosion Component
const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
        />
      ))}
    </div>
  );
};

export default Hero;