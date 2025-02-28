"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LampContainer } from './ui/lamp';
import { Card } from '@/components/ui/card';
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
  const [isInView, setIsInView] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Set isInView to true after component mounts for animations
    setIsInView(true);
    
    // Track mouse position for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Creating beautiful, responsive, and interactive user interfaces",
      color: "from-blue-500 to-purple-600",
      lightColor: "from-blue-400/80 to-purple-500/80",
      darkColor: "from-blue-600 to-purple-700",
      shadowColor: "shadow-blue-500/30",
      accentColor: "rgba(96, 165, 250, 0.5)",
      textGradient: "bg-gradient-to-r from-blue-300 to-purple-400",
      bgGradient: "bg-gradient-to-br from-blue-500/10 to-purple-600/10",
      borderGradient: "border-t-blue-500/30 border-l-blue-500/30 border-r-purple-600/30 border-b-purple-600/30",
      hoverBorderGradient: "hover:border-t-blue-400/50 hover:border-l-blue-400/50 hover:border-r-purple-500/50 hover:border-b-purple-500/50",
      icon: <FaReact className="text-blue-500 text-3xl" />,
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" />, proficiency: 90 },
        { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" />, proficiency: 85 },
        { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" />, proficiency: 88 },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, proficiency: 82 },
        { name: "Locomotive.js", icon: <Train className="text-[#000000]" />, proficiency: 75 },
        { name: "Swiper.js", icon: <SiSwiper className="text-[#6332F6]" />, proficiency: 80 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, proficiency: 92 },
        { name: "React", icon: <FaReact className="text-[#61DAFB]" />, proficiency: 90 },
        { name: "Next.js", icon: <SiNextdotjs className="text-[#000000]" />, proficiency: 85 },
      ]
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications and APIs",
      color: "from-green-500 to-emerald-600",
      lightColor: "from-green-400/80 to-emerald-500/80",
      darkColor: "from-green-600 to-emerald-700",
      shadowColor: "shadow-green-500/30",
      accentColor: "rgba(16, 185, 129, 0.5)",
      textGradient: "bg-gradient-to-r from-green-300 to-emerald-400",
      bgGradient: "bg-gradient-to-br from-green-500/10 to-emerald-600/10",
      borderGradient: "border-t-green-500/30 border-l-green-500/30 border-r-emerald-600/30 border-b-emerald-600/30",
      hoverBorderGradient: "hover:border-t-green-400/50 hover:border-l-green-400/50 hover:border-r-emerald-500/50 hover:border-b-emerald-500/50",
      icon: <FaNodeJs className="text-green-500 text-3xl" />,
      skills: [
        { name: "Python", icon: <FaPython className="text-[#3776AB]" />, proficiency: 88 },
        { name: "Django", icon: <SiDjango className="text-[#092E20]" />, proficiency: 82 },
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, proficiency: 85 },
      ]
    },
    {
      title: "Database Management",
      description: "Designing and optimizing database systems",
      color: "from-amber-500 to-orange-600",
      lightColor: "from-amber-400/80 to-orange-500/80",
      darkColor: "from-amber-600 to-orange-700",
      shadowColor: "shadow-amber-500/30",
      accentColor: "rgba(217, 119, 6, 0.5)",
      textGradient: "bg-gradient-to-r from-amber-300 to-orange-400",
      bgGradient: "bg-gradient-to-br from-amber-500/10 to-orange-600/10",
      borderGradient: "border-t-amber-500/30 border-l-amber-500/30 border-r-orange-600/30 border-b-orange-600/30",
      hoverBorderGradient: "hover:border-t-amber-400/50 hover:border-l-amber-400/50 hover:border-r-orange-500/50 hover:border-b-orange-500/50",
      icon: <FaDatabase className="text-amber-500 text-3xl" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" />, proficiency: 80 },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, proficiency: 85 },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, proficiency: 78 },
        { name: "Database Design", icon: <FaDatabase className="text-[#336791]" />, proficiency: 82 },
      ]
    },
    {
      title: "Version Control",
      description: "Managing code changes and collaboration",
      color: "from-red-500 to-pink-600",
      lightColor: "from-red-400/80 to-pink-500/80",
      darkColor: "from-red-600 to-pink-700",
      shadowColor: "shadow-red-500/30",
      accentColor: "rgba(239, 68, 68, 0.5)",
      textGradient: "bg-gradient-to-r from-red-300 to-pink-400",
      bgGradient: "bg-gradient-to-br from-red-500/10 to-pink-600/10",
      borderGradient: "border-t-red-500/30 border-l-red-500/30 border-r-pink-600/30 border-b-pink-600/30",
      hoverBorderGradient: "hover:border-t-red-400/50 hover:border-l-red-400/50 hover:border-r-pink-500/50 hover:border-b-pink-500/50",
      icon: <FaGithub className="text-red-500 text-3xl" />,
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, proficiency: 90 },
        { name: "GitHub", icon: <FaGithub className="text-[#181717]" />, proficiency: 88 },
      ]
    }
  ];

  const handleCardClick = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  // Calculate proficiency levels
  const getProficiencyLabel = (proficiency: number) => {
    if (proficiency >= 90) return "Expert";
    if (proficiency >= 80) return "Advanced";
    if (proficiency >= 70) return "Intermediate";
    if (proficiency >= 50) return "Basic";
    return "Beginner";
  };

  // Generate stars based on proficiency
  const renderStars = (proficiency: number) => {
    const stars = [];
    const fullStars = Math.floor(proficiency / 20);
    const hasHalfStar = proficiency % 20 >= 10;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <Star className="absolute w-4 h-4 text-yellow-400" />
          <Star className="absolute w-4 h-4 fill-yellow-400 text-yellow-400 clip-path-half" />
        </div>
      );
    }
    
    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-yellow-400" />
      );
    }
    
    return stars;
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced Background elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl animate-pulse" 
             style={{ animationDelay: "1s", animationDuration: "4s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl animate-pulse"
             style={{ animationDelay: "2s", animationDuration: "5s" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-green-500/10 blur-3xl animate-pulse"
             style={{ animationDelay: "0.5s", animationDuration: "6s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-red-500/10 blur-3xl animate-pulse"
             style={{ animationDelay: "1.5s", animationDuration: "7s" }}></div>
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
               backgroundSize: "40px 40px",
               animation: "moveGrid 20s linear infinite",
             }}
        ></div>
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
          A blend of creativity, problem-solving, and technical skills that
          drive innovation
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
              stroke: "url(#greenGradient)", // Apply gradient stroke
              fill: "none",
            }}
          />
          {/* Define SVG Gradient */}
          <svg width="0" height="0">
            <defs>
              <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bbf7d0" /> {/* green-200 */}
                <stop offset="50%" stopColor="#86efac" /> {/* green-300 */}
                <stop offset="100%" stopColor="#22c55e" /> {/* green-500 */}
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>
    </LampContainer>
      
      <div className="container mx-auto mt-0 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              whileHover={{ 
                scale: expandedCategory === null ? 1.03 : 1,
                z: 50
              }}
              onClick={() => handleCardClick(index)}
              onHoverStart={() => setHoveredCategory(index)}
              onHoverEnd={() => setHoveredCategory(null)}
              className={`perspective-1000 cursor-pointer transition-all duration-300
                        ${expandedCategory !== null && expandedCategory !== index ? 'opacity-50 scale-95 blur-sm' : ''}`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Ultra Aesthetic Card Design */}
              <motion.div
                className={`relative h-full rounded-2xl border ${category.borderGradient} ${category.hoverBorderGradient} bg-gray-900/40 backdrop-blur-xl overflow-hidden 
                          ${category.shadowColor} shadow-xl transition-all duration-500
                          ${category.bgGradient}`}
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: hoveredCategory === index ? `0 0 30px ${category.accentColor}` : '',
                }}
                animate={{
                  rotateX: hoveredCategory === index ? '5deg' : '0deg',
                  rotateY: hoveredCategory === index ? '5deg' : '0deg',
                  translateZ: hoveredCategory === index ? '10px' : '0px',
                }}
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -inset-[100%] bg-gradient-to-r animate-aurora"
                       style={{
                         background: `linear-gradient(90deg, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]}, ${category.color.split(' ')[1]})`,
                         animation: 'aurora 15s linear infinite',
                       }}
                  ></div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute rounded-full mix-blend-screen animate-float"
                      style={{
                        width: `${Math.random() * 6 + 2}px`,
                        height: `${Math.random() * 6 + 2}px`,
                        background: `linear-gradient(${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.5 + 0.2,
                        animationDuration: `${Math.random() * 10 + 10}s`,
                        animationDelay: `${Math.random() * 5}s`
                      }}
                    ></div>
                  ))}
                </div>
                
                {/* Blurred background circle effect */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30 mix-blend-screen transition-all duration-500"
                     style={{
                       background: `linear-gradient(to right, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})`,
                       filter: "blur(40px)",
                       transform: hoveredCategory === index ? 'scale(1.2)' : 'scale(1)',
                     }}
                ></div>
                
                {/* Card content */}
                <div className="p-6 h-full flex flex-col relative z-10">
                  {/* Card header with parallax effect */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className="p-3 rounded-xl bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 shadow-lg"
                      style={{
                        boxShadow: hoveredCategory === index ? `0 10px 20px -5px ${category.accentColor}` : '',
                        transform: hoveredCategory === index 
                          ? `translateX(${(mousePosition.x - window.innerWidth/2) * 0.01}px) translateY(${(mousePosition.y - window.innerHeight/2) * 0.01}px)` 
                          : 'none'
                      }}
                    >
                      {category.icon}
                    </motion.div>
                    {expandedCategory !== index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`h-8 w-8 rounded-full flex items-center justify-center text-white bg-gradient-to-br ${category.color} shadow-lg`}
                        style={{
                          boxShadow: `0 2px 10px ${category.accentColor}`,
                        }}
                      >
                        {expandedCategory === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Card title with gradient text */}
                  <motion.h3
                    animate={{
                      textShadow: hoveredCategory === index ? `0 0 8px ${category.accentColor}` : '0 0 0px transparent',
                    }}
                    className={`text-xl font-bold mt-2 mb-1 ${category.textGradient} bg-clip-text text-transparent`}
                  >
                    {category.title}
                  </motion.h3>
                  
                  {/* Card description */}
                  <p className="text-gray-400 text-sm mb-4 backdrop-blur-xl">{category.description}</p>
                  
                  {/* Expanded content */}
                  <AnimatePresence>
                    {expandedCategory === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-4 pt-2">
                          {category.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skillIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: skillIndex * 0.1 }}
                              whileHover={{ 
                                scale: 1.02,
                                backdropFilter: "blur(16px)",
                                boxShadow: `0 10px 25px -5px ${category.accentColor}`,
                              }}
                              className="p-3 rounded-xl bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:bg-gray-800/40 hover:border-gray-600/50 transition-all duration-300"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="p-2 rounded-lg bg-gray-900/80 border border-gray-800 shadow-inner">
                                    {skill.icon}
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-white">{skill.name}</h4>
                                    <p className="text-xs text-gray-400">{getProficiencyLabel(skill.proficiency)}</p>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  {renderStars(skill.proficiency)}
                                </div>
                              </div>
                              {/* Skill progress bar with animated fill and gradient */}
                              <div className="mt-2 h-1.5 w-full bg-gray-800/80 rounded-full overflow-hidden shadow-inner">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.proficiency}%` }}
                                  transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                                  className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                                  style={{
                                    boxShadow: `0 0 10px ${category.accentColor}`,
                                  }}
                                ></motion.div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        <div className="flex justify-center mt-6">
                          <motion.button
                            whileHover={{ scale: 1.05, boxShadow: `0 5px 15px ${category.accentColor}` }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedCategory(null);
                            }}
                            className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${category.color} text-white flex items-center gap-2 shadow-lg backdrop-blur-xl`}
                            style={{
                              boxShadow: `0 2px 10px ${category.accentColor}`,
                            }}
                          >
                            <ChevronUp size={16} />
                            <span>Close</span>
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Card footer - Skill preview */}
                  {expandedCategory !== index && (
                    <div className="mt-auto pt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {category.skills.slice(0, 4).map((skill, skillIndex) => (
                          <motion.div 
                            key={skillIndex}
                            whileHover={{ scale: 1.1, y: -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="p-1.5 rounded-lg bg-gray-800/30 border border-gray-700/30 shadow-md hover:shadow-lg transition-all duration-300"
                            style={{
                              backdropFilter: "blur(12px)",
                            }}
                          >
                            {skill.icon}
                          </motion.div>
                        ))}
                        {category.skills.length > 4 && (
                          <motion.div 
                            whileHover={{ scale: 1.1, y: -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className={`p-1.5 rounded-lg backdrop-blur-xl bg-gradient-to-br ${category.lightColor} flex items-center justify-center shadow-lg`}
                            style={{
                              boxShadow: `0 5px 15px -5px ${category.accentColor}`,
                            }}
                          >
                            <span className="text-xs font-medium text-white">+{category.skills.length - 4}</span>
                          </motion.div>
                        )}
                      </div>
                      
                      {/* View more button */}
                      <motion.button
                        whileHover={{ 
                          scale: 1.03, 
                          boxShadow: `0 5px 15px -5px ${category.accentColor}`,
                          y: -2
                        }}
                        whileTap={{ scale: 0.98 }}
                        className={`mt-4 px-3 py-1.5 w-full rounded-lg text-sm bg-gradient-to-r ${category.color} text-white flex items-center justify-center gap-2 opacity-80 hover:opacity-100 transition-all duration-300`}
                      >
                        <span>View details</span>
                        <ExternalLink size={12} />
                      </motion.button>
                    </div>
                  )}
                  
                  {/* Glass reflection effect */}
                  <div 
                    className="absolute inset-0 pointer-events-none transition-all duration-500"
                    style={{
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
                      borderRadius: "inherit",
                      opacity: hoveredCategory === index ? 0.3 : 0.1,
                      transform: hoveredCategory === index 
                        ? `translateX(${(mousePosition.x - window.innerWidth/2) * -0.01}px) translateY(${(mousePosition.y - window.innerHeight/2) * -0.01}px)` 
                        : 'none'
                    }}
                  ></div>
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