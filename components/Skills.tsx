"use client";
import React, { useEffect, useRef } from 'react';
import { animate, motion } from "framer-motion";
import { LampContainer } from './ui/lamp';
import { Sparkles as LucideSparkles } from 'lucide-react';

import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, 
  FaGitAlt, FaGithub, FaDatabase, 
  FaGitlab,
  FaBug,
  FaCloud,
  FaFigma,
  FaMobileAlt,
  FaServer,
  FaUniversalAccess,
  FaDocker,
  FaAws
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiNextdotjs, SiDjango, 
  SiPostgresql, SiMysql, SiMongodb,
  SiCloudinary,
  SiEslint,
  SiFirebase,
  SiFramer,
  SiGreensock,
  SiLighthouse,
  SiPrettier
} from 'react-icons/si';

// Interface definitions
interface Skill {
  name: string;
  icon: React.ReactElement<{ className?: string }>;
}

interface SkillCategory {
  title: string;
  description: string;
  color: string;
  icon: React.ReactElement;
  skills: Skill[];
}

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      description: "Crafting responsive, accessible, and performant user interfaces using modern frameworks and design systems.",
      color: "from-pink-500/30 via-pink-600/30 to-pink-700/30",
      icon: <FaReact className="text-pink-400" />,
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: "Framer Motion", icon: <SiFramer className="text-[#0055FF]" /> },
      ]
    },
    {
      title: "Backend Development",
      description: "Developing scalable APIs, server-side logic, and secure backend systems.",
      color: "from-blue-500/30 via-blue-600/30 to-blue-700/30",
      icon: <FaNodeJs className="text-blue-400" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
        { name: "REST APIs", icon: <FaServer className="text-gray-500" /> },
      ]
    },
    {
      title: "Database & Cloud",
      description: "Designing and integrating cloud databases with real-time sync and performance optimization.",
      color: "from-teal-500/30 via-teal-600/30 to-teal-700/30",
      icon: <FaCloud className="text-teal-400" />,
      skills: [
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "Cloudinary", icon: <SiCloudinary className="text-[#3448C5]" /> },
        { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
        { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
      ]
    },
    {
      title: "UI/UX & Design Tools",
      description: "Creating pixel-perfect layouts and animations with focus on design consistency and user experience.",
      color: "from-purple-500/30 via-purple-600/30 to-purple-700/30",
      icon: <FaFigma className="text-purple-400" />,
      skills: [
        { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
        { name: "GSAP", icon: <SiGreensock className="text-[#88CE02]" /> },
        { name: "Responsive Design", icon: <FaMobileAlt className="text-blue-400" /> },
        { name: "Accessibility (a11y)", icon: <FaUniversalAccess className="text-green-500" /> },
      ]
    },
    {
      title: "Version Control & Collaboration",
      description: "Collaborating efficiently with Git and managing codebases across platforms.",
      color: "from-yellow-500/30 via-yellow-600/30 to-yellow-700/30",
      icon: <FaGithub className="text-yellow-400" />,
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="text-[#181717]" /> },
        { name: "GitLab", icon: <FaGitlab className="text-[#E24329]" /> },
      ]
    },
    {
      title: "Testing & Optimization",
      description: "Ensuring performance, reliability, and bug-free deployments through effective testing strategies.",
      color: "from-emerald-500/30 via-emerald-600/30 to-emerald-700/30",
      icon: <FaBug className="text-emerald-400" />,
      skills: [
        { name: "Lighthouse", icon: <SiLighthouse className="text-[#FFA500]" /> },
        { name: "ESLint", icon: <SiEslint className="text-[#4B32C3]" /> },
        { name: "Prettier", icon: <SiPrettier className="text-[#F7B93E]" /> },
      ]
  }
];

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
            <LucideSparkles className="w-6 h-6 md:w-8 md:h-8" style={{ stroke: "url(#greenGradient)", fill: "none" }} />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              category={category}
              index={index}
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
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        .shine {
          position: relative;
          overflow: hidden;
        }
        .shine::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to bottom right,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transform: rotate(45deg);
          animation: shine 3s infinite;
        }
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }
      `}</style>
    </div>
  );
};

const SkillCard: React.FC<SkillCardProps> = ({ category, index }) => {
  const isEven = index % 2 === 0;

  // Animation sequence for icons
  useEffect(() => {
    const sequence = category.skills.slice(0, 5).map((_, i) => [
      `.circle-${index}-${i}`,
      {
        scale: [1, 1.1, 1],
        transform: ["translateY(0px)", "translateY(-4px)", "translateY(0px)"],
      },
      { duration: 0.8 }
    ]);

    animate(sequence as any, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, [category.skills, index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.1 * index, type: "spring", stiffness: 50 }}
      className="h-full"
    >
      <div className={`max-w-sm w-full mx-auto p-6 rounded-xl glass-card shine bg-gradient-to-br ${category.color} group transition-all duration-300 hover:shadow-lg`}>
        {/* Card Skeleton Container */}
        <div className="h-64 rounded-xl z-40 relative overflow-hidden bg-neutral-300/10 [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]">
          <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
            {/* Animated icons */}
            <div className="flex flex-row shrink-0 justify-center items-center gap-2">
              {category.skills.slice(0, 5).map((skill, i) => (
                <div 
                  key={i}
                  className={`h-${i % 2 === 0 ? '10' : '14'} w-${i % 2 === 0 ? '10' : '14'} rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.05)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] circle-${index}-${i}`}
                >
                  {React.cloneElement(skill.icon, { 
                    className: `h-${i % 2 === 0 ? '6' : '8'} w-${i % 2 === 0 ? '6' : '8'} transition-all duration-300 hover:scale-110` 
                  })}
                </div>
              ))}
            </div>

            {/* Animated light beam */}
            <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
              <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
                <LucideSparkles />
              </div>
            </div>
          </div>
        </div>

        {/* Card Title */}
        <h3 className="text-lg font-semibold text-white py-2">
          {category.title}
        </h3>

        {/* Card Description */}
        <p className="text-sm font-normal text-neutral-200 max-w-sm">
          {category.description}
        </p>
      </div>
    </motion.div>
  );
};


export default Skills;