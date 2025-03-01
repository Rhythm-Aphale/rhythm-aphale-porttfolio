"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LampContainer } from './ui/lamp';
import { Sparkles, Star } from 'lucide-react';

import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, 
  FaGitAlt, FaGithub, FaDatabase 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiNextdotjs, SiDjango, 
  SiPostgresql, SiMysql, SiMongodb
} from 'react-icons/si';

// Interface definitions
interface Skill {
  name: string;
  icon: React.ReactElement;
  proficiency: number;
}

interface SkillCategory {
  title: string;
  description: string;
  color: string;
  accentColor: string;
  bgColor: string;
  icon: React.ReactElement;
  skills: Skill[];
}

interface SkillCardProps {
  category: SkillCategory;
  index: number;
  getProficiencyLabel: (proficiency: number) => string;
  renderStars: (proficiency: number) => React.ReactNode;
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with modern frameworks and technologies.",
      color: "from-blue-400 via-indigo-500 to-violet-500",
      accentColor: "rgba(99, 102, 241, 0.8)", // Indigo accent
      bgColor: "bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-violet-500/20",
      icon: <FaReact className="text-blue-400" />,
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" />, proficiency: 90 },
        { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" />, proficiency: 85 },
        { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" />, proficiency: 88 },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, proficiency: 82 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, proficiency: 92 },
        { name: "React", icon: <FaReact className="text-[#61DAFB]" />, proficiency: 90 },
        { name: "Next.js", icon: <SiNextdotjs className="text-[#000000]" />, proficiency: 85 },
      ]
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications with scalable architecture.",
      color: "from-emerald-400 via-green-500 to-teal-400",
      accentColor: "rgba(16, 185, 129, 0.8)", // Emerald accent
      bgColor: "bg-gradient-to-br from-emerald-500/20 via-green-500/20 to-teal-500/20",
      icon: <FaNodeJs className="text-emerald-400" />,
      skills: [
        { name: "Python", icon: <FaPython className="text-[#3776AB]" />, proficiency: 88 },
        { name: "Django", icon: <SiDjango className="text-[#092E20]" />, proficiency: 82 },
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, proficiency: 85 },
      ]
    },
    {
      title: "Database Management",
      description: "Designing optimized database systems for efficient data storage and retrieval.",
      color: "from-amber-400 via-orange-500 to-rose-400",
      accentColor: "rgba(251, 146, 60, 0.8)", // Orange accent
      bgColor: "bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-rose-500/20",
      icon: <FaDatabase className="text-amber-400" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" />, proficiency: 80 },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, proficiency: 85 },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, proficiency: 78 },
      ]
    },
    {
      title: "Version Control",
      description: "Managing code changes and collaborating effectively with team members.",
      color: "from-pink-400 via-fuchsia-500 to-purple-400",
      accentColor: "rgba(232, 121, 249, 0.8)", // Fuchsia accent
      bgColor: "bg-gradient-to-br from-pink-500/20 via-fuchsia-500/20 to-purple-500/20",
      icon: <FaGithub className="text-pink-400" />,
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, proficiency: 90 },
        { name: "GitHub", icon: <FaGithub className="text-[#181717]" />, proficiency: 88 },
      ]
    }
  ];

  const getProficiencyLabel = (proficiency: number) => {
    if (proficiency >= 90) return "Expert";
    if (proficiency >= 80) return "Advanced";
    if (proficiency >= 70) return "Intermediate";
    return "Basic";
  };

  const renderStars = (proficiency: number) => {
    const fullStars = Math.floor(proficiency / 20);
    const hasHalfStar = proficiency % 20 >= 10;
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <div className="relative w-3 h-3">
            <Star className="absolute text-yellow-400" />
            <Star className="absolute fill-yellow-400 clip-path-half" />
          </div>
        )}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <Star key={`e-${i}`} className="w-3 h-3 text-yellow-400" />
        ))}
      </div>
    );
  };

  // Reference to skills section for smooth scrolling
  const skillsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={skillsRef} className="overflow-hidden">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="relative z-10"
        >
          <motion.h1 className="mt-8 bg-gradient-to-br from-emerald-300 via-green-400 to-teal-500 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl">
            My Expertise
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-center text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            A blend of creativity, problem-solving, and technical skills that drive innovation
          </motion.p>
          <motion.div
            className="absolute -top-2 -right-2 md:top-0 md:right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Sparkles className="w-6 h-6 md:w-8 md:h-8" style={{ stroke: "url(#greenGradient)", fill: "none" }} />
            <svg width="0" height="0">
              <defs>
                <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#bbf7d0" />
                  <stop offset="50%" stopColor="#86efac" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
      </LampContainer>

      <div className="container mx-auto px-4 md:px-12 py-0 relative z-10 -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-40 md:gap-6 lg:gap-8 mb-24">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              category={category}
              index={index}
              getProficiencyLabel={getProficiencyLabel}
              renderStars={renderStars}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); opacity: 0.5; }
          50% { opacity: 0.2; }
          100% { transform: translateY(100vh); opacity: 0.5; }
        }
        @keyframes rainbow {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glitter {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        .clip-path-half {
          clip-path: inset(0 50% 0 0);
        }
        .perspective-800 {
          perspective: 800px;
        }
        .glowing-bar {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          background-size: 200% 100%;
          animation: gradientShift 2s infinite;
        }
        .skill-card-hover {
          transform-style: preserve-3d;
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease;
        }
        .skill-card-hover:hover {
          transform: rotateY(10deg) rotateX(5deg);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        .skill-icon-container {
          transform-style: preserve-3d;
        }
        .skill-icon {
          transition: transform 0.3s ease-out;
          transform-style: preserve-3d;
        }
        .skill-icon:hover {
          transform: translateZ(20px) scale(1.2);
        }
        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(23, 23, 23, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .gradient-border {
          position: relative;
        }
        .gradient-border::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5), transparent);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

const SkillCard: React.FC<SkillCardProps> = ({ category, index, getProficiencyLabel, renderStars }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);

  // Prevent default behavior to avoid page scrolling to top
  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.1 * index, type: "spring", stiffness: 50 }}
      className="h-full"
      ref={cardRef}
    >
      <div className="h-[450px] w-full">
        <div className="group relative h-full w-72 mx-auto overflow-hidden rounded-2xl bg-black p-1 transition-all duration-700 hover:scale-[1.02] skill-card-hover gradient-border">
          {/* Animated background glow */}
          <div className="absolute inset-0 opacity-30 group-hover:opacity-90 transition-all duration-700 z-0">
            <div className={`absolute inset-0 bg-gradient-to-b ${category.color} to-transparent rounded-2xl blur-xl transform scale-105 opacity-30 animate-pulse`} />
          </div>

          {/* 3D floating particles with more aesthetics */}
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
            {[...Array(25)].map((_, i) => {
              const size = Math.random() * 4 + 1;
              const isLarge = Math.random() > 0.8;
              return (
                <motion.div
                  key={i}
                  className={`absolute rounded-full ${isLarge ? 'animate-pulse' : ''}`}
                  initial={{ 
                    x: Math.random() * 100 - 50, 
                    y: Math.random() * 100 - 50, 
                    opacity: 0,
                    width: isLarge ? size * 1.5 : size,
                    height: isLarge ? size * 1.5 : size,
                    backgroundColor: `hsla(${Math.random() * 360}, 100%, 75%, ${Math.random() * 0.5 + 0.3})`
                  }}
                  animate={{ 
                    x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                    y: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                    opacity: [0, isLarge ? 0.8 : 0.6, 0] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 5 + Math.random() * 5,
                    repeatType: "reverse"
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    filter: `blur(${Math.random() * 2}px)`,
                    boxShadow: isLarge ? `0 0 ${size * 2}px ${size}px currentColor` : 'none'
                  }}
                />
              );
            })}
          </div>
          
          <div className="relative h-full w-full rounded-xl glass-effect p-4 overflow-hidden z-20 border border-zinc-800/80">
            {/* 3D grid background with aesthetic design */}
            <div className="absolute inset-0 opacity-20 z-0">
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-12 gap-0.5">
                {[...Array(96)].map((_, i) => {
                  const hue = (i * 3.75 + index * 30) % 360;
                  return (
                    <motion.div 
                      key={i} 
                      className="rounded"
                      initial={{ 
                        opacity: 0,
                        backgroundColor: `hsla(${hue}, 70%, 60%, 0.08)`,
                        boxShadow: i % 8 === 0 ? `0 0 5px hsla(${hue}, 70%, 60%, 0.3)` : 'none'
                      }}
                      animate={{ 
                        opacity: [
                          Math.random() * 0.3 + 0.1,
                          Math.random() * 0.5 + 0.3,
                          Math.random() * 0.3 + 0.1
                        ]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2 + Math.random() * 3,
                        repeatType: "reverse" 
                      }}
                    />
                  );
                })}
              </div>
            </div>

            <div className="relative h-44 w-full rounded-lg overflow-hidden mt-2 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2 relative z-20 skill-icon-container">
                {category.skills.slice(0, 6).map((skill, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex flex-col items-center justify-center skill-icon"
                    whileHover={{ z: 30, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/50 shadow-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] relative overflow-hidden">
                      {/* Animated glow effect with more aesthetic design */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-150 transition-all duration-700" />
                      </div>
                      
                      {React.cloneElement(skill.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { 
                        className: "text-2xl md:text-3xl", 
                        style: { 
                          filter: "drop-shadow(0 0 2px currentColor)",
                          animation: "glitter 3s infinite"
                        } 
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-4 flex flex-col flex-1 relative">
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent mb-1 relative">
                {category.title}
                <span className={`absolute -bottom-1 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r ${category.color} transition-all duration-700`} />
              </h3>
              
              <p className="text-zinc-200 text-sm line-clamp-3 leading-relaxed relative">
                {category.description}
              </p>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="space-y-3 mt-4 overflow-hidden"
                  >
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div 
                        key={skillIdx} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: skillIdx * 0.05 }}
                        className="rounded-lg bg-zinc-800/60 p-2 backdrop-blur-sm border border-zinc-700/40 relative overflow-hidden"
                        style={{
                          boxShadow: `0 4px 12px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.05)`
                        }}
                      >
                        {/* Progress bar background with vibrant gradient */}
                        <div 
                          className="absolute inset-0 opacity-25" 
                          style={{ 
                            width: `${skill.proficiency}%`,
                            background: `linear-gradient(to right, ${category.accentColor}, ${category.accentColor.replace(', 0.8', ', 0.4')})`,
                            borderRadius: 'inherit'
                          }}
                        />
                        
                        <div className="flex items-center justify-between mb-1 relative z-10">
                          <div className="flex items-center gap-2">
                            <div className="p-1 rounded-md bg-zinc-800/80 border border-zinc-700/30">
                              {React.cloneElement(skill.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { 
                                style: { filter: "drop-shadow(0 0 1px currentColor)" } 
                              })}
                            </div>
                            <span className="text-xs font-medium text-zinc-200">{skill.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-zinc-300">
                              {getProficiencyLabel(skill.proficiency)}
                            </span>
                            {renderStars(skill.proficiency)}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="absolute -bottom-20 left-0 right-0 transition-all duration-500 ease-out transform group-hover:bottom-4 z-30 px-4 space-y-2">
              <button
                className="block w-full py-2 rounded-lg overflow-hidden group/btn relative"
                onClick={handleButtonClick}
                style={{
                  boxShadow: `0 4px 12px rgba(0, 0, 0, 0.3)`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-lg opacity-90`} />
                <div className="absolute inset-0 bg-black/10 group-hover/btn:bg-black/0 transition-all duration-300 rounded-lg"></div>
                <div className="relative flex justify-center items-center text-white font-medium text-sm">
                  <span className="mr-2">{isExpanded ? 'Hide Skills' : 'View Skills'}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;