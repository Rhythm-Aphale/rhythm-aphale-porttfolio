"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LampContainer } from './ui/lamp';

import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, 
  FaGitAlt, FaGithub, FaDatabase 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiNextdotjs, SiDjango, 
  SiPostgresql, SiMysql, SiMongodb, SiSwiper
} from 'react-icons/si';
import { Train, Sparkles, ChevronDown, ChevronUp, Star, ExternalLink } from 'lucide-react';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Creating responsive, interactive interfaces",
      color: "from-blue-500 to-purple-600",
      lightColor: "from-blue-400/80 to-purple-500/80",
      shadowColor: "shadow-blue-500/30",
      accentColor: "rgba(96, 165, 250, 0.5)",
      textGradient: "bg-gradient-to-r from-blue-300 to-purple-400",
      bgGradient: "bg-gradient-to-br from-blue-500/10 to-purple-600/10",
      borderGradient: "border-t-blue-500/30 border-l-blue-500/30 border-r-purple-600/30 border-b-purple-600/30",
      hoverBorderGradient: "hover:border-t-blue-400/50 hover:border-l-blue-400/50 hover:border-r-purple-500/50 hover:border-b-purple-500/50",
      icon: <FaReact className="text-blue-500" />,
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
      description: "Building robust server-side applications",
      color: "from-green-500 to-emerald-600",
      lightColor: "from-green-400/80 to-emerald-500/80",
      shadowColor: "shadow-green-500/30",
      accentColor: "rgba(16, 185, 129, 0.5)",
      textGradient: "bg-gradient-to-r from-green-300 to-emerald-400",
      bgGradient: "bg-gradient-to-br from-green-500/10 to-emerald-600/10",
      borderGradient: "border-t-green-500/30 border-l-green-500/30 border-r-emerald-600/30 border-b-emerald-600/30",
      hoverBorderGradient: "hover:border-t-green-400/50 hover:border-l-green-400/50 hover:border-r-emerald-500/50 hover:border-b-emerald-500/50",
      icon: <FaNodeJs className="text-green-500" />,
      skills: [
        { name: "Python", icon: <FaPython className="text-[#3776AB]" />, proficiency: 88 },
        { name: "Django", icon: <SiDjango className="text-[#092E20]" />, proficiency: 82 },
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, proficiency: 85 },
      ]
    },
    {
      title: "Database Management",
      description: "Designing optimized database systems",
      color: "from-amber-500 to-orange-600",
      lightColor: "from-amber-400/80 to-orange-500/80",
      shadowColor: "shadow-amber-500/30",
      accentColor: "rgba(217, 119, 6, 0.5)",
      textGradient: "bg-gradient-to-r from-amber-300 to-orange-400",
      bgGradient: "bg-gradient-to-br from-amber-500/10 to-orange-600/10",
      borderGradient: "border-t-amber-500/30 border-l-amber-500/30 border-r-orange-600/30 border-b-orange-600/30",
      hoverBorderGradient: "hover:border-t-amber-400/50 hover:border-l-amber-400/50 hover:border-r-orange-500/50 hover:border-b-orange-500/50",
      icon: <FaDatabase className="text-amber-500" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" />, proficiency: 80 },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, proficiency: 85 },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, proficiency: 78 },
      ]
    },
    {
      title: "Version Control",
      description: "Managing code changes and collaboration",
      color: "from-red-500 to-pink-600",
      lightColor: "from-red-400/80 to-pink-500/80",
      shadowColor: "shadow-red-500/30",
      accentColor: "rgba(239, 68, 68, 0.5)",
      textGradient: "bg-gradient-to-r from-red-300 to-pink-400",
      bgGradient: "bg-gradient-to-br from-red-500/10 to-pink-600/10",
      borderGradient: "border-t-red-500/30 border-l-red-500/30 border-r-pink-600/30 border-b-pink-600/30",
      hoverBorderGradient: "hover:border-t-red-400/50 hover:border-l-red-400/50 hover:border-r-pink-500/50 hover:border-b-pink-500/50",
      icon: <FaGithub className="text-red-500" />,
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, proficiency: 90 },
        { name: "GitHub", icon: <FaGithub className="text-[#181717]" />, proficiency: 88 },
      ]
    }
  ];

  const handleCardClick = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

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
          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <div className="relative w-3 h-3 sm:w-4 sm:h-4">
            <Star className="absolute text-yellow-400" />
            <Star className="absolute fill-yellow-400 clip-path-half" />
          </div>
        )}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <Star key={`e-${i}`} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
        ))}
      </div>
    );
  };

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20 md:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-blue-500/20 blur-xl md:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 rounded-full bg-purple-500/20 blur-xl md:blur-3xl animate-pulse"></div>
      </div>

      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="relative z-10"
        >
          <motion.h1
            className="mt-8 bg-gradient-to-br from-green-200 via-green-300 to-green-500 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
          >
            My Expertise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mx-auto mt-4 max-w-2xl text-center text-gray-500"
          >
            A blend of creativity, problem-solving, and technical skills that drive innovation
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
                stroke: "url(#greenGradient)",
                fill: "none",
              }}
            />
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

      <div className="container mx-auto -mt-20 px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 sm:gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              onClick={() => handleCardClick(index)}
              onHoverStart={() => setHoveredCategory(index)}
              onHoverEnd={() => setHoveredCategory(null)}
              className={`perspective-1000 cursor-pointer transition-all duration-300 ${
                expandedCategory !== null && expandedCategory !== index ? 'opacity-30 scale-90' : ''
              }`}
            >
              <motion.div
                className={`relative h-full rounded-xl md:rounded-2xl border ${category.borderGradient} ${category.hoverBorderGradient} bg-gray-900/40 backdrop-blur-lg md:backdrop-blur-xl overflow-hidden shadow-lg md:shadow-xl ${category.shadowColor}`}
                animate={{
                  rotateX: hoveredCategory === index ? '5deg' : '0deg',
                  rotateY: hoveredCategory === index ? '5deg' : '0deg',
                }}
              >
                <div className="p-4 sm:p-6 h-full flex flex-col relative z-10">
                  <div className="flex items-start justify-between mb-2 sm:mb-4">
                    <motion.div className="p-2 sm:p-3 rounded-lg md:rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-md">
                      {React.cloneElement(category.icon, { className: "text-xl md:text-3xl" })}
                    </motion.div>
                    {expandedCategory !== index && (
                      <motion.div
                        className={`h-6 w-6 md:h-8 md:w-8 rounded-full flex items-center justify-center text-white bg-gradient-to-br ${category.color} shadow-lg`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {expandedCategory === index ? (
                          <ChevronUp className="w-3 h-3 md:w-4 md:h-4" />
                        ) : (
                          <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                        )}
                      </motion.div>
                    )}
                  </div>

                  <motion.h3 className={`text-lg sm:text-xl font-bold mt-1 mb-1 ${category.textGradient} bg-clip-text text-transparent`}>
                    {category.title}
                  </motion.h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-4">{category.description}</p>

                  <AnimatePresence>
                    {expandedCategory === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2 sm:space-y-4 pt-1 sm:pt-2">
                          {category.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skillIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: skillIndex * 0.1 }}
                              className="p-2 sm:p-3 rounded-lg md:rounded-xl bg-gray-800/20 backdrop-blur-sm border border-gray-700/30"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 sm:gap-3">
                                  <div className="p-1 sm:p-2 rounded-md md:rounded-lg bg-gray-900/80 border border-gray-800">
                                    {skill.icon}
                                  </div>
                                  <div>
                                    <h4 className="text-sm sm:text-base font-medium">{skill.name}</h4>
                                    <p className="text-xs text-gray-400">{getProficiencyLabel(skill.proficiency)}</p>
                                  </div>
                                </div>
                                {renderStars(skill.proficiency)}
                              </div>
                              <div className="mt-1 sm:mt-2 h-1 sm:h-1.5 w-full bg-gray-800/80 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.proficiency}%` }}
                                  transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                                  className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        <div className="flex justify-center mt-4">
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedCategory(null);
                            }}
                            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm bg-gradient-to-r ${category.color} text-white flex items-center gap-1`}
                          >
                            <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Close</span>
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {expandedCategory !== index && (
                    <div className="mt-auto pt-2 sm:pt-4">
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {category.skills.slice(0, 4).map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            className="p-1.5 rounded-md bg-gray-800/30 border border-gray-700/30 shadow-md"
                          >
                            {skill.icon}
                          </motion.div>
                        ))}
                        {category.skills.length > 4 && (
                          <motion.div className="p-1.5 rounded-md bg-gradient-to-br ${category.lightColor} flex items-center justify-center shadow-lg">
                            <span className="text-xs font-medium text-white">+{category.skills.length - 4}</span>
                          </motion.div>
                        )}
                      </div>
                      <motion.button
                        className={`mt-2 sm:mt-4 px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm rounded-md md:rounded-lg bg-gradient-to-r ${category.color} text-white flex items-center justify-center gap-1`}
                      >
                        <span>Details</span>
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      </motion.button>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;