"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { PinContainer } from "./ui/pin";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CellOnSell",
      technologies: "Python, Django, HTML, CSS, JavaScript",
      description: "Developed a full-stack mobile-friendly website for showcasing and selling products. Implemented dynamic content updates, seamless navigation, and backend functionality using Django.",
      githubRepo: "https://github.com/Rhythm-Aphale/CellOnSell",
      image: "/images/cellonsell.png",
    },
    {
      title: "HealthGuardian",
      technologies: "Python",
      description: "Python-based health monitoring application with features for tracking health metrics and providing analytical insights.",
      githubRepo: "https://github.com/Rhythm-Aphale/HealthGuardian",
      image: "/images/healthguardian.png",
    },
    {
      title: "Posts Dashboard",
      technologies: "Next.js, JavaScript",
      description: "Next.js application to fetch and display user profiles with their posts. Features seamless UI for user selection and post viewing.",
      githubRepo: "https://github.com/Rhythm-Aphale/Dashboard",
      image: "/images/posts-dashboard.png",
    },
    {
      title: "SidcupFamilyGolf Website",
      technologies: "HTML, CSS, JavaScript",
      description: "This is a fully responsive clone of the Sidcup Family Golf website, built using HTML, CSS, and JavaScript.",
      githubRepo: "https://github.com/Rhythm-Aphale/sidcup-family-golf-clone",
      liveLink: "brilliant-griffin-aa1123.netlify.app/",
      image: "/images/sidcup.png",
    },
    {
      title: "Niccolo Miranda-Portfolio Clone",
      technologies: "HTML, CSS, JavaScript",
      description: "Recreation of Niccolò Miranda's portfolio with animations and interactivity.",
      githubRepo: "https://github.com/Rhythm-Aphale/Niccolo-Miranda-posrtfolio-clone",
      liveLink: "https://lustrous-phoenix-10ec4e.netlify.app/",
      image: "/images/miranda.png",
    },
    {
      title: "EcomFakeStore",
      technologies: "Next.js, TypeScript, Tailwind CSS, Fakestore API",
      description: "A Next.js e-commerce dashboard using Fake Store API with product browsing, cart, auth, admin panel, wishlist, and smooth animations.",
      githubRepo: "https://github.com/Rhythm-Aphale/project-frontend",
      liveLink: "https://ecomfakestore.netlify.app/",
      image: "/images/ecomfakestore.png",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black">
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
        <motion.h1
          className="mt-8 bg-gradient-to-br from-purple-200 via-purple-300 to-purple-500 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
        >
          Work Showcase
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mx-auto mt-4 max-w-2xl text-center text-gray-400"
        >
          A showcase of my key projects, demonstrating my skills and experience.
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
              stroke: "url(#purpleGradient)", // Apply gradient stroke
              fill: "none",
            }}
          />
          {/* Define SVG Gradient */}
          <svg width="0" height="0">
            <defs>
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e9d5ff" /> {/* purple-200 */}
                <stop offset="50%" stopColor="#d8b4fe" /> {/* purple-300 */}
                <stop offset="100%" stopColor="#a855f7" /> {/* purple-500 */}
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>
    </LampContainer>


    <div className="max-w-8xl mx-auto p-4 md:p-8 -mt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40 md:gap-40">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="h-[20rem] w-[18rem] md:h-[30rem] md:w-[22rem] mx-auto"
              initial={{ 
                opacity: 0, 
                y: 100,
                boxShadow: "0 0 0 rgba(147, 51, 234, 0)"
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                boxShadow: "0 0 15px rgba(147, 51, 234, 0.4)"
              }}
              whileHover={{
                boxShadow: "0 0 25px rgba(147, 51, 234, 0.7)"
              }}
              transition={{
                delay: 0.1 + index * 0.1,
                duration: 0.8,
                ease: "easeInOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <PinContainer
                title={project.title}
                href={project.githubRepo}
                containerClassName="h-full w-full "
              >
                <div className="flex flex-col h-full ">
                  {/* Adjusted image container for mobile */}
                  <div className="relative h-40 w-48 md:h-48 md:w-60 ">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain rounded-t-lg"
                        sizes="(max-width: 768px) 100vw, 
                               (max-width: 1200px) 50vw,
                               33vw"
                      />
                    ) : (
                      <div className="bg-gray-800 h-full w-full rounded-t-lg flex items-center justify-center ">
                        <span className="text-gray-400">{project.title}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-300 mb-4 line-clamp-2 md:line-clamp-3 overflow-hidden">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.split(", ").map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-[0.6rem] md:text-xs bg-gray-800 rounded-full text-cyan-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener"
                          className="text-cyan-300 hover:underline text-xs md:text-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;