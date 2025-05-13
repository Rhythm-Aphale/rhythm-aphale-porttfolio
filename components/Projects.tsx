"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { Sparkles } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  technologies: string;
  description: string;
  githubRepo: string;
  image: string;
  liveLink?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const Projects = () => {
  const projects = [
    {
      title: "CellOnSell",
      technologies: "Python, Django, HTML, CSS, JavaScript",
      description:
        "Developed a full-stack mobile-friendly website for showcasing and selling products. Implemented dynamic content updates, seamless navigation, and backend functionality using Django.",
      githubRepo: "https://github.com/Rhythm-Aphale/CellOnSell",
      image: "/images/cellonsell.png",
    },
    {
      title: "HealthGuardian",
      technologies: "Python",
      description:
        "Python-based health monitoring application with features for tracking health metrics and providing analytical insights.",
      githubRepo: "https://github.com/Rhythm-Aphale/HealthGuardian",
      image: "/images/healthguardian.png",
    },
    {
      title: "SidcupFamilyGolf Website",
      technologies: "HTML, CSS, JavaScript",
      description:
        "This is a fully responsive clone of the Sidcup Family Golf website, built using HTML, CSS, and JavaScript.",
      githubRepo: "https://github.com/Rhythm-Aphale/sidcup-family-golf-clone",
      liveLink: "brilliant-griffin-aa1123.netlify.app/",
      image: "/images/sidcup.png",
    },
    {
      title: "Engineer Management Dashboard",
      technologies:
        "Next.js, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion",
      description:
        "A modern, responsive web application to manage engineering team members with features like search, filtering, sorting, detailed profiles, status indicators, and smooth animations.",
      githubRepo: "https://github.com/Rhythm-Aphale/engineers-dashboard",
      liveLink: "https://engineers-dashboard.vercel.app/", 
      image: "/images/engineers.png",
    },
    {
      title: "MemeVerse",
      technologies: "Next.js, TypeScript, Tailwind CSS, Firebase, Cloudinary",
      description:
        "A multi-page, interactive meme platform with features like meme browsing, uploading, AI-generated captions, user profiles, leaderboards, and Firebase authentication. Showcases animations, performance optimizations, and responsive design.",
      githubRepo: "https://github.com/your-username/memeverse",
      liveLink: "https://memesverse.vercel.app/",
      image: "/images/memeverse.png",
    },
    {
      title: "EcomFakeStore",
      technologies: "Next.js, TypeScript, Tailwind CSS, Fakestore API",
      description:
        "A Next.js e-commerce dashboard using Fake Store API with product browsing, cart, auth, admin panel, wishlist, and smooth animations.",
      githubRepo: "https://github.com/Rhythm-Aphale/project-frontend",
      liveLink: "https://ecomfakestore.netlify.app/",
      image: "/images/ecomfakestore.png",
    },
  ];

  return (
    <>
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <motion.h1 className="mt-8 bg-gradient-to-br from-purple-200 via-purple-300 to-purple-500 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl">
            Work Showcase
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mx-auto mt-4 max-w-2xl text-center text-gray-400"
          >
            A showcase of my key projects, demonstrating my skills and
            experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -top-2 -right-2 md:top-0 md:right-0"
          >
            <Sparkles
              className="w-6 h-6 md:w-8 md:h-8"
              style={{
                stroke: "url(#purpleGradient)",
                fill: "none",
              }}
            />
            <svg width="0" height="0">
              <defs>
                <linearGradient
                  id="purpleGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#e9d5ff" />
                  <stop offset="50%" stopColor="#d8b4fe" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
      </LampContainer>
      <div className="container mx-auto px-4 md:px-12 py-0 relative z-10">
        {/* Increased space between cards with bigger gap values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-60 md:gap-36 lg:gap-60">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [, setIsHovered] = useState(false);

  // Calculate if this is an even or odd card for alternating animations
  const isEven = index % 2 === 0;

  return (
    <motion.div
      // Added side scroll animation - cards come from alternating sides
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: 0.1 * index,
        type: "spring",
        stiffness: 50,
      }}
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group relative h-full w-72 mx-auto overflow-hidden rounded-2xl bg-black p-1 transition-all duration-700 hover:scale-[1.02]">
        {/* Primary glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-transparent rounded-2xl blur-lg transform scale-105"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-transparent to-purple-600/20 rounded-2xl opacity-50"></div>
        </div>

        {/* Animated border gradient */}
        <div
          className="absolute inset-0 rounded-2xl opacity-70 group-hover:opacity-100 transition-all duration-500 z-10"
          style={{
            background:
              "linear-gradient(125deg, #9333ea, transparent 40%, transparent 60%, #7e22ce 100%)",
            backgroundSize: "200% 200%",
            animation: "gradientShift 8s linear infinite",
          }}
        />

        {/* Main card content */}
        <div className="relative h-full w-full rounded-xl bg-zinc-950 p-4 overflow-hidden z-20">
          {/* Floating particles */}
          <div className="absolute inset-0 w-full h-full">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `floatParticle ${
                    3 + Math.random() * 5
                  }s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          {/* Futuristic tech lines */}
          <div className="absolute inset-0 w-full h-full overflow-hidden opacity-0 group-hover:opacity-20 transition-opacity duration-700">
            <div
              className="absolute top-0 left-[10%] w-[80%] h-[1px] bg-purple-500/50"
              style={{ animation: "techLineScan 3s infinite" }}
            ></div>
            <div
              className="absolute top-[50%] left-0 w-full h-[1px] bg-purple-500/30"
              style={{ animation: "techLineScan 5s infinite" }}
            ></div>
            <div
              className="absolute bottom-[20%] left-0 w-full h-[1px] bg-purple-500/40"
              style={{
                animation: "techLineScan 7s infinite",
                animationDelay: "1s",
              }}
            ></div>
            <div
              className="absolute top-0 left-[20%] w-[1px] h-full bg-purple-500/30"
              style={{ animation: "techLineVertical 8s infinite" }}
            ></div>
            <div
              className="absolute top-0 right-[30%] w-[1px] h-full bg-purple-500/20"
              style={{
                animation: "techLineVertical 6s infinite",
                animationDelay: "2s",
              }}
            ></div>
          </div>

          {/* Image Container with Holographic Effect */}
          <div className="relative h-44 w-full rounded-lg overflow-hidden mt-2 perspective-800">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700/20 via-transparent to-purple-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
            <div
              className="absolute inset-0 bg-purple-900/5 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-700"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15), transparent 70%)",
              }}
            ></div>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain transition-all duration-700 group-hover:scale-110 relative z-0"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.8) 100%)",
              }}
            ></div>

            {/* Holographic scanline effect */}
            <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-30 transition-opacity duration-700 z-20">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-[1px] bg-purple-400/40"
                  style={{
                    top: `${i * 10}%`,
                    animation: "scanline 3s linear infinite",
                    animationDelay: `${i * 0.2}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Project Type Badge */}
          <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-purple-900/50 text-purple-300 text-xs font-bold ring-1 ring-purple-500/30 backdrop-blur-sm z-20">
            {project.technologies.split(", ")[0]}
          </div>

          {/* Content with glow effect */}
          <div className="mt-6 space-y-4 flex flex-col flex-1 relative">
            <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-purple-600/10 filter blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>

            <h3 className="text-xl font-bold text-white mb-1 relative">
              {project.title}
              <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-purple-500 to-transparent transition-all duration-700"></span>
            </h3>

            <p className="text-xs text-zinc-400 font-mono tracking-wider">
              {project.technologies}
            </p>

            <p className="text-zinc-300 text-sm line-clamp-3 leading-relaxed relative">
              {project.description}
            </p>
          </div>

          {/* Button Container with Updated Design */}
          <div className="absolute -bottom-20 left-0 right-0 transition-all duration-500 ease-out transform group-hover:bottom-4 z-30 px-4 space-y-2">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2 rounded-lg overflow-hidden group/btn relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-purple-600 rounded-lg"></div>
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 left-0 h-full w-0 bg-white/10 group-hover/btn:w-full transition-all duration-300 rounded-lg"></div>
                <div className="relative flex justify-center items-center text-white font-medium text-sm">
                  <span className="mr-2">Live Demo</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </div>
              </a>
            )}
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 rounded-lg overflow-hidden group/btn relative"
            >
              <div className="absolute inset-0 bg-zinc-800/80 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-700 opacity-50 rounded-lg"></div>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-zinc-600 opacity-30 group-hover/btn:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 h-full w-0 bg-white/5 group-hover/btn:w-full transition-all duration-300 rounded-lg"></div>
              <div className="relative flex justify-center items-center text-white font-medium text-sm">
                <span className="mr-2">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes scanline {
          0% {
            transform: translateY(-100%);
            opacity: 0.5;
          }
          50% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0.5;
          }
        }
        @keyframes techLineScan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes techLineVertical {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        @keyframes floatParticle {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(
              ${Math.random() * 20 - 10}px,
              ${Math.random() * 20 - 10}px
            );
          }
        }
        .perspective-800 {
          perspective: 800px;
        }
      `}</style>
    </motion.div>
  );
};

export default Projects;
