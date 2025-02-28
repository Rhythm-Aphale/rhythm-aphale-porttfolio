"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { Sparkles, ExternalLink, Calendar, ArrowRight } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  points: string[];
  skills: string[];
  isLeft: boolean;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  title, 
  company, 
  location, 
  duration, 
  points, 
  skills, 
  isLeft, 
  index 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative w-full md:w-[calc(50%-2rem)] ${
        isLeft ? "md:mr-auto" : "md:ml-auto"
      } overflow-hidden rounded-xl border border-gray-700 bg-gradient-to-b from-black to-gray-900/80 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10`}
    >
      {/* Connection to timeline */}
      <div 
        className={`absolute top-1/2 ${
          isLeft ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
        } h-0.5 w-8 bg-blue-500/50`}
      />
      
      {/* Glowing dot */}
      <div 
        className={`absolute top-1/2 ${
          isLeft ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
        } -translate-y-1/2 h-4 w-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 z-20`}
      >
        <div className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-75" />
      </div>
      
      {/* Card number */}
      <div className="absolute -left-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white shadow-lg shadow-blue-500/30">
        {index + 1}
      </div>
      
      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
            <h4 className="mb-1 text-lg font-medium text-blue-400">{company}</h4>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>{duration}</span>
              <span className="mx-1">•</span>
              <span>{location}</span>
            </div>
          </div>
        </div>
        
        <AnimatePresence>
          <motion.div
            initial={{ height: "auto" }}
            animate={{ height: isExpanded ? "auto" : "100px" }}
            className="relative overflow-hidden"
          >
            <ul className="space-y-2 mb-4">
              {points.map((point, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: idx * 0.1 }}
                  className="flex text-gray-300"
                >
                  <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
            
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent" />
            )}
          </motion.div>
        </AnimatePresence>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span 
              key={idx} 
              className="rounded-full bg-blue-950/40 px-3 py-1 text-xs font-medium text-blue-300 border border-blue-800/50"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
        >
          {isExpanded ? "Show less" : "Read more"}
          <ExternalLink className="ml-1 h-3 w-3" />
        </button>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Sublime Experiences",
      location: "Remote",
      duration: "July - Dec 2024",
      points: [
        "Developed responsive web applications using React and Next.js with Tailwind CSS",
        "Implemented interactive UI components and animations with Framer Motion",
        "Collaborated with designers to ensure pixel-perfect implementation of designs",
        "Optimized web performance through code splitting and lazy loading techniques",
        "Participated in code reviews and maintained high code quality standards"
      ],
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]
    },
    {
      "title": "AMAZON ML Summer School 2023",
      "company": "Amazon",
      "location": "Virtual",
      "duration": "Sep - Oct 2023",
      "points": [
        "Applied machine learning algorithms to real-world problems using Python and TensorFlow",
        "Implemented supervised learning models including decision trees and neural networks",
        "Worked with deep learning architectures for image recognition tasks",
        "Applied dimensionality reduction techniques to improve model efficiency",
        "Collaborated with team members on a final project focused on recommendation systems"
      ],
      "skills": ["Python", "TensorFlow", "Machine Learning", "Neural Networks", "Data Analysis"],
      
    },
    
    {
      "title": "Data Science Intern",
      "company": "Persistent Martian Summer Internship Program",
      "location": "Hybrid",
      "duration": "7 Weeks (July - August 2023)",
      "points": [
        "Analyzed large datasets to extract actionable insights using Python and pandas",
        "Developed visualization dashboards to represent complex data in a user-friendly manner",
        "Utilized SQL for querying and manipulating relational databases",
        "Implemented data structures and algorithms for efficient data processing",
        "Worked on real-world industry problems, improving analytical and problem-solving skills",
        "Gained hands-on experience in machine learning models and data preprocessing techniques",
        "Collaborated in an Agile environment, participating in daily stand-ups and sprint reviews",
        "Developed and optimized scripts for automation in Linux environments",
        "Worked with APIs to integrate and analyze external datasets"
      ],
      "skills": ["Python", "pandas", "SQL", "Data Structures", "Machine Learning", "Linux", "APIs", "Agile"]
    }
    
  ];

  return (
    <section id="experience" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Animated background grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:40px_40px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/90 to-black"></div>
      </div>
      
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
          className="mt-8 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
        >
          Professional Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mx-auto mt-4 max-w-2xl text-center text-gray-400"
        >
          My journey through tech, from internships to professional roles
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
              stroke: "url(#blueGradient)", // Apply gradient stroke
              fill: "none",
            }}
          />
          {/* Define SVG Gradient */}
          <svg width="0" height="0">
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bfdbfe" /> {/* blue-200 */}
                <stop offset="50%" stopColor="#93c5fd" /> {/* blue-300 */}
                <stop offset="100%" stopColor="#3b82f6" /> {/* blue-500 */}
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>
    </LampContainer>
      
      <div className="mx-auto max-w-6xl px-4 py-12 -mt-20">
        <div className="relative flex flex-col gap-24">
          {/* Timeline beam */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-blue-900/30">
            <div className="absolute h-full w-full animate-beam bg-gradient-to-b from-blue-500/50 via-blue-400/30 to-transparent" />
          </div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="w-full"
            >
              <ExperienceCard {...exp} isLeft={index % 2 === 0} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-full w-full max-w-6xl">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`animate-float absolute rounded-full bg-blue-500 opacity-10`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 10}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes beam {
          0% { opacity: 0.3; transform: translateY(-100%); }
          50% { opacity: 1; }
          100% { opacity: 0.3; transform: translateY(100%); }
        }
        
        .animate-beam {
          animation: beam 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Experience;