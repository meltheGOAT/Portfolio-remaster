import { useState, useEffect } from "react";
import Amnation from "../components/amnationPro.jpg";
import Amcastle from "../components/castiloPro.jpg";
import Underconst from "../components/underconst.jpg";
import {
  Menu,
  X,
  Instagram,
  Linkedin,
  Github,
  ExternalLink,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const ModernPortfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const stats = [
    { value: "2+", line1: "Years of", line2: "Experience" },
    { value: "6+", line1: "Projects", line2: "Completed" },
    { value: "10+", line1: "Technologies", line2: "Mastered" },
    { value: "100+", line1: "Anime Shows", line2: "Watched" },
  ];

  const skills = [
    { name: "React", level: 90, color: "from-blue-400 to-blue-600" },
    { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-600" },
    { name: "CSS/Tailwind", level: 90, color: "from-green-400 to-green-600" },
    { name: "Node.js", level: 80, color: "from-green-500 to-green-700" },
    { name: "HTML5", level: 95, color: "from-orange-400 to-orange-600" },
    { name: "Express.js", level: 75, color: "from-gray-400 to-gray-600" },
    { name: "Figma", level: 85, color: "from-purple-400 to-purple-600" },
    { name: "GitHub", level: 88, color: "from-gray-600 to-gray-800" },
  ];

  const projects = [
    {
      title: "AMNATION",
      description:
        "A modern web application showcasing innovative design and functionality",
      image: Amnation,
      link: "https://amnation-mellythegoats-projects.vercel.app/",
      tech: ["BOOTSTRAP", "CSS", "JavaScript"],
    },
    {
      title: "ANIME CASTLE",
      description:
        "An anime-focused platform with dynamic content and user interaction",
      image: Amcastle,
      link: "#",
      tech: ["HTML", "CSS", "JAVASCRIPT"],
      status: "Coming Soon",
    },
    {
      title: "E-COMMERCE PLATFORM",
      description: "Full-stack e-commerce solution with modern UI/UX",
      image: Underconst,
      link: "#",
      tech: ["React", "Node.js", "MongoDB"],
      status: "Coming Soon",
    },
    {
      title: "PORTFOLIO SHOWCASE",
      description:
        "Interactive portfolio demonstrating advanced React concepts",
      image: Underconst,
      link: "#",
      tech: ["React", "Tailwind", "Framer Motion"],
      status: "Coming Soon",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = sectionId => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900"
      }`}
    >
      {/* Enhanced Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? darkMode
              ? "bg-black/90 backdrop-blur-lg border-b border-gray-800"
              : "bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            MO
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Skills", "Work", "Contact"].map(item => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(
                    item === "About" ? "about-me" : item.toLowerCase()
                  )
                }
                className={`relative text-sm font-medium transition-colors hover:text-blue-500 ${
                  activeSection ===
                  (item === "About" ? "about-me" : item.toLowerCase())
                    ? "text-blue-500"
                    : ""
                }`}
              >
                {item.toUpperCase()}
                {activeSection ===
                  (item === "About" ? "about-me" : item.toLowerCase()) && (
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode
                  ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                  : "bg-gray-800 text-yellow-400 hover:bg-gray-700"
              }`}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden absolute top-full left-0 w-full ${
              darkMode ? "bg-black/95" : "bg-white/95"
            } backdrop-blur-lg border-b ${darkMode ? "border-gray-800" : "border-gray-200"}`}
          >
            <div className="px-6 py-4 space-y-3">
              {["Home", "About", "Skills", "Work", "Contact"].map(item => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(
                      item === "About" ? "about-me" : item.toLowerCase()
                    )
                  }
                  className="block w-full text-left py-2 text-sm font-medium hover:text-blue-500 transition-colors"
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 animate-pulse" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-pulse">
                  MELVIN
                </span>
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold">OJIEGO</h1>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
            <h2 className="text-3xl md:text-5xl font-light text-gray-600 dark:text-gray-400">
              WEB DEVELOPER
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
              Crafting digital experiences with modern technologies and creative
              solutions. Passionate about clean code and beautiful interfaces.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection("work")}
                className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className={`px-8 py-3 border-2 rounded-full font-medium transition-all duration-300 ${
                  darkMode
                    ? "border-white text-white hover:bg-white hover:text-black"
                    : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                }`}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* Social Links */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
        {[
          {
            icon: Instagram,
            href: "https://www.instagram.com/the.melvin",
            color: "hover:text-pink-500",
          },
          {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/melvin-oj-3502b5229/",
            color: "hover:text-blue-600",
          },
          {
            icon: Github,
            href: "https://github.com/meltheGOAT",
            color: "hover:text-gray-600",
          },
        ].map(({ icon: Icon, href, color }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-50"
            } shadow-lg ${color}`}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      {/* Stats Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <p>{stat.line1}</p>
                  <p>{stat.line2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              ABOUT ME
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div
                className={`p-8 rounded-2xl ${
                  darkMode ? "bg-gray-800/50" : "bg-white/50"
                } backdrop-blur-sm shadow-xl border ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  I'm a{" "}
                  <span className="font-semibold text-blue-500">
                    24-year-old front-end developer
                  </span>{" "}
                  with a strong focus on
                  <span className="font-semibold"> JavaScript, React,</span> and
                  building clean, user-friendly interfaces. I'm currently
                  expanding into{" "}
                  <span className="font-semibold text-purple-500">
                    full-stack development
                  </span>{" "}
                  using Node.js and Express, working on real-world projects like
                  blog platforms and AI-powered tools.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                  I enjoy combining{" "}
                  <span className="font-semibold text-pink-500">
                    creativity with functionality
                  </span>{" "}
                  — drawing inspiration from anime, games, and modern tech to
                  craft engaging web experiences.
                  <span className="font-semibold">
                    {" "}
                    Always learning, always building.
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "🎮 Gaming",
                  "🎌 Anime",
                  "💻 Coding",
                  "🎨 Design",
                  "🚀 Innovation",
                ].map((interest, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      darkMode
                        ? "bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300"
                        : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700"
                    }`}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              SKILLSET
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div
                  className={`w-full h-3 rounded-full ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}
                >
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              MY WORK
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl overflow-hidden ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.status && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors"
                    >
                      <span>View Project</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              LET'S CONNECT
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Ready to bring your ideas to life? Let's create something amazing
            together.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            <a
              href="mailto:melvin@example.com"
              className="flex items-center space-x-2 text-lg hover:text-blue-500 transition-colors"
            >
              <Mail size={24} />
              <span>ugochukwuojiego@gmail.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-lg hover:text-blue-500 transition-colors"
            >
              <Phone size={24} />
              <span>+1 (SND) ME-MAIL</span>
            </a>
            <div className="flex items-center space-x-2 text-lg">
              <MapPin size={24} />
              <span>Available Worldwide</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              {
                icon: Instagram,
                href: "https://www.instagram.com/the.melvin",
                label: "Instagram",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/melvin-oj-3502b5229/",
                label: "LinkedIn",
              },
              {
                icon: Github,
                href: "https://github.com/meltheGOAT",
                label: "GitHub",
              },
            ].map(({ icon: Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-50"
                } shadow-lg hover:shadow-xl`}
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 border-t ${darkMode ? "border-gray-800" : "border-gray-200"}`}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            MO
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Melvin Ojiego. Crafted with ❤️ and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ModernPortfolio;
