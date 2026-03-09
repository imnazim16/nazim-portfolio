/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Layers,
  Cpu,
  Globe,
  ChevronRight,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import { useRef, ReactNode } from "react";
import logo from "./assets/logo.png";
const PROJECTS = [
  {
    title: "GFK",
    period: "2024-25",
    tech: "HTML5, CSS, StoryBook, JavaScript, React/Angular",
    description:
      "Spearheaded the development of intuitive and globally applicable UI components. Upheld stringent coding standards and ensured high-quality code delivery.",
    link: "https://www.grapesdigital.com/", // Placeholder link from resume
  },
  {
    title: "Eicher",
    period: "2022-23",
    tech: "HTML5, CSS, Bootstrap, JavaScript, jQuery, React/Next Js",
    description:
      "Developed intuitive and globally applicable UI components. Managed daily client interactions to gain insights into requirements.",
    link: "https://www.grapesdigital.com/",
  },
  {
    title: "Luxury Ride",
    period: "2021-23",
    tech: "HTML5, CSS, Bootstrap, JavaScript, jQuery, Next js",
    description:
      "Developed intuitive and globally accessible UI components; maintained coding standards to deliver high-quality solutions.",
    link: "https://www.grapesdigital.com/",
  },
  {
    title: "Fractify",
    period: "2020-21",
    tech: "HTML5, CSS, Bootstrap, JavaScript, jQuery, React/Next js",
    description:
      "Developed UI components that have a global reach and provided a user-friendly experience. Maintained coding standards.",
    link: "https://www.fractify.io/",
  },
  {
    title: "Techmahindra",
    period: "2019-20",
    tech: "HTML5, CSS, CSS3, JavaScript, jQuery, Slick slider",
    description:
      "Developed responsive UI components compatible across multiple browsers. Implemented responsive web design principles.",
    link: "https://www.grapesdigital.com/",
  },
  {
    title: "Maruti Suzuki NEXA",
    period: "2015-17",
    tech: "HTML5, SCSS, Bootstrap, JavaScript, jQuery, AJAX",
    description:
      "Leveraged third-party animation plugins and customized them to meet project requirements, enhanced visual appeal.",
    link: "https://www.grapesdigital.com/",
  },
];

const SKILLS = [
  "React JS",
  "Next JS",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SCSS",
  "jQuery",
  "Bootstrap",
  "Material UI",
  "NPM",
  "Webpack",
  "Angular",
  "NoSQL",
  "Git",
  "Node.js",
];

const EXPERIENCE = [
  {
    company: "Persistent Systems",
    location: "Gurugram",
    role: "Sr. Frontend Developer",
    period: "Nov 2024 - June 2025",
    points: [
      "Utilized expertise in React to build highly functional and visually appealing web user interfaces.",
      "Collaborated with clients to understand requirements and translate them into technical specifications.",
      "Ensured adherence to coding standards through active involvement in code review processes.",
    ],
  },
  {
    company: "Volkswagen IT Services India",
    location: "Gurugram",
    role: "Sr. Frontend Developer",
    period: "Dec 2023 - Sep 2024",
    points: [
      "Built and maintained web user interfaces using a wide range of technologies.",
      "Contributed to sprint planning, stand-up meetings, and retrospectives in an Agile environment.",
      "Successfully updated the website and implemented new features resulting in improved user experience.",
    ],
  },
  {
    company: "Grapes Digital",
    location: "Delhi, Saket",
    role: "Sr. Frontend Developer",
    period: "Jan 2012 - April 2023",
    points: [
      "11+ years of extensive experience in web development specializing in modern frameworks.",
      "Expertise in translating client requirements into technical specifications.",
      "Showcased strong leadership skills and a proven track record of motivating teams.",
    ],
  },
];

const Section = ({
  title,
  children,
  id,
  icon: Icon,
}: {
  title: string;
  children: ReactNode;
  id: string;
  icon?: any;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="py-24 px-6 max-w-7xl mx-auto">
    <div className="flex items-center gap-4 mb-12">
      {Icon && <Icon className="w-8 h-8 text-emerald-400" />}
      <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
        {title}
      </h2>
      <div className="h-px flex-1 bg-zinc-800 ml-4" />
    </div>
    {children}
  </motion.section>
);

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  return (
    <div ref={containerRef} className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-bold tracking-tighter">
            <img className="w-[200px]" src={logo} alt="Frontend Developer" />
          </motion.div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            {["About", "Skills", "Experience", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-emerald-400 transition-colors">
                  {item}
                </a>
              ),
            )}
          </div>
          <motion.a
            href="mailto:nazimansari.fr66@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-500 text-zinc-950 px-5 py-2 rounded-full text-sm font-bold hover:bg-emerald-400 transition-colors">
            Hire Me
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full glass text-xs font-bold tracking-widest uppercase text-emerald-400">
            Available for new opportunities
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6">
            Nazim <span className="text-gradient">Ansari</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Senior Front-End Developer with{" "}
            <span className="text-zinc-100 font-semibold">11+ years</span> of
            experience crafting high-performance, visually stunning web
            applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-zinc-400 glass px-4 py-2 rounded-lg">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span className="text-sm">New Delhi, India</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400 glass px-4 py-2 rounded-lg">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-sm">
                Senior Developer @ Persistent Systems
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500">
          <div className="w-6 h-10 border-2 border-zinc-800 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-emerald-400 rounded-full" />
          </div>
        </motion.div>
      </header>

      {/* About Section */}
      <Section title="Profile Summary" id="about" icon={Cpu}>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
            <p>
              A competent professional offering over{" "}
              <span className="text-zinc-100 font-medium">11 years</span> of
              extensive experience in web development, specializing in HTML5,
              CSS3, JavaScript/ES6, and React.
            </p>
            <p>
              Currently working as a{" "}
              <span className="text-zinc-100 font-medium">
                Senior Frontend Developer at Persistent Systems
              </span>
              , responsible for building and maintaining web user interfaces
              using a wide range of modern technologies.
            </p>
            <p>
              Recognized for strong communication and collaboration skills, with
              a proven track record of effectively leading and motivating teams
              towards achieving project goals.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass p-6 rounded-2xl">
              <div className="text-4xl font-display font-bold text-emerald-400 mb-2">
                11+
              </div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold">
                Years Experience
              </div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="text-4xl font-display font-bold text-emerald-400 mb-2">
                50+
              </div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold">
                Projects Delivered
              </div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="text-4xl font-display font-bold text-emerald-400 mb-2">
                6+
              </div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold">
                Team Lead Years
              </div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="text-4xl font-display font-bold text-emerald-400 mb-2">
                100%
              </div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section title="Technical Arsenal" id="skills" icon={Layers}>
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, backgroundColor: "rgba(16, 185, 129, 0.1)" }}
              className="glass px-6 py-3 rounded-xl text-sm font-medium text-zinc-300 border border-white/5 hover:border-emerald-500/30 transition-all cursor-default">
              {skill}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "UX Architecture",
              desc: "Designing intuitive user flows and information architecture for complex systems.",
              icon: Globe,
            },
            {
              title: "Modern Frameworks",
              desc: "Expertise in React, Next.js, and Angular for building scalable applications.",
              icon: Code2,
            },
            {
              title: "Performance",
              desc: "Optimizing web applications for maximum speed and accessibility.",
              icon: Cpu,
            },
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl glass border-white/5">
              <item.icon className="w-10 h-10 text-emerald-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section title="Work Journey" id="experience" icon={Briefcase}>
        <div className="space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l border-zinc-800">
              <div className="absolute -left-1.5 top-0 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-100">
                    {exp.role}
                  </h3>
                  <div className="text-emerald-400 font-medium">
                    {exp.company} — {exp.location}
                  </div>
                </div>
                <div className="text-sm text-zinc-500 font-mono mt-2 md:mt-0">
                  {exp.period}
                </div>
              </div>
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-zinc-400 text-sm leading-relaxed">
                    <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section title="Featured Projects" id="projects" icon={Award}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group glass rounded-3xl overflow-hidden border-white/5 flex flex-col h-full">
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-xs font-mono text-emerald-400 font-bold tracking-widest uppercase">
                    {project.period}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-emerald-400 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech
                    .split(", ")
                    .slice(0, 3)
                    .map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-bold uppercase tracking-tighter px-2 py-1 rounded bg-zinc-900 text-zinc-500">
                        {t}
                      </span>
                    ))}
                  {project.tech.split(", ").length > 3 && (
                    <span className="text-[10px] font-bold uppercase tracking-tighter px-2 py-1 rounded bg-zinc-900 text-zinc-500">
                      +{project.tech.split(", ").length - 3} More
                    </span>
                  )}
                </div>
              </div>
              <div className="h-1 w-0 group-hover:w-full bg-emerald-500 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education & Languages */}
      <Section title="Education & More" id="education" icon={GraduationCap}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-emerald-400" />
              Academic Background
            </h3>
            <div className="space-y-6">
              <div>
                <div className="text-emerald-400 font-bold">
                  BCA (Computer Application)
                </div>
                <div className="text-zinc-100 font-medium">
                  Calorx Teachers University
                </div>
                <div className="text-sm text-zinc-500">2012 - 2015</div>
              </div>
              <div className="h-px bg-zinc-800" />
              <div>
                <div className="text-emerald-400 font-bold">
                  12th (Intermediate)
                </div>
                <div className="text-zinc-100 font-medium">CBSE Board</div>
                <div className="text-sm text-zinc-500">2007 - 2008</div>
              </div>
            </div>
          </div>
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Globe className="w-6 h-6 text-emerald-400" />
              Languages
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-zinc-300">English</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${i <= 4 ? "bg-emerald-500" : "bg-zinc-800"}`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-300">Hindi</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full bg-emerald-500`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-emerald-400" />
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "UX Design",
                "Agile",
                "Scrum",
                "Quality Control",
                "Deployment",
              ].map((c) => (
                <span
                  key={c}
                  className="text-xs px-3 py-1 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section title="Get In Touch" id="contact" icon={Mail}>
        <div className="glass p-12 rounded-[40px] text-center max-w-4xl mx-auto">
          <h3 className="text-4xl font-display font-bold mb-6">
            Let's build something{" "}
            <span className="text-gradient">extraordinary</span>.
          </h3>
          <p className="text-zinc-400 mb-12 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="mailto:nazimansari.fr66@gmail.com" className="group">
              <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 transition-colors">
                <Mail className="w-6 h-6 text-emerald-400 group-hover:text-zinc-950" />
              </div>
              <div className="text-sm font-bold">Email</div>
              <div className="text-xs text-zinc-500">
                nazimansari.fr66@gmail.com
              </div>
            </a>
            <a href="tel:+919717220696" className="group">
              <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 transition-colors">
                <Phone className="w-6 h-6 text-emerald-400 group-hover:text-zinc-950" />
              </div>
              <div className="text-sm font-bold">Phone</div>
              <div className="text-xs text-zinc-500">(+91) 9717220696</div>
            </a>
            <div className="group">
              <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-sm font-bold">Location</div>
              <div className="text-xs text-zinc-500">New Delhi, India</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900 text-center text-zinc-600 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>© 2025 Nazim Ansari. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
