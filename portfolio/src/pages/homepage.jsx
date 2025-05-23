import { useState } from "react";
import lightMode from "../components/pixel_bulb_icon.svg";
import darkModeicon from "../components/pixel_bulb_dark_mode.svg";
import bodyImage from "../components/buildingwebsites.svg";
import { Menu } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import amNationimg from "../components/amnationPro.jpg";
import castleimg from "../components/castilopro.jpg";
import comingSoonimg from "../components/coming_soon_pixel.svg";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stats = [
    { value: "2", line1: "Year of", line2: "Experience" },
    { value: "6+", line1: "Projects", line2: "Completed" },
    { value: "10", line1: "Technologies", line2: "Mastered" },
    { value: "100+", line1: "Anime shows", line2: "Watched" },
  ];

  return (
    <div
      className={
        darkMode
          ? "bg-black text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      {/* {Navigation Bar} */}
      <nav className="fixed w-full h-15 border-b-2 border-gray-100 z-50 shadow-sm bg-inherit ">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-[40px]">MO</h1>
          <div className="text-[15px] hidden sm:flex">
            <a href="#work-section" className="px-4">
              WORK
            </a>
            <a href="/" className="px-4">
              ABOUT
            </a>
            <a href="/" className="px-4">
              THOUGHTS
            </a>
            <a href="/" className="px-4">
              CONTACT
            </a>
          </div>
          <div
            className="sm:hidden cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-9 h-9" />
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 sm:static sm:translate-x-0 cursor-pointer">
            <img
              src={darkMode ? darkModeicon : lightMode}
              alt={darkMode ? "Dark Mode" : "Light Mode"}
              width={50}
              height={50}
              onClick={() => setDarkMode(!darkMode)}
            />
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 sm:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Fancy Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[72px] left-4 right-4 z-40 sm:hidden bg-white dark:bg-neutral-900 text-black dark:text-white rounded-xl shadow-xl p-6 animate-slideDown transition-all duration-300 ease-in-out">
          <a
            href="#work-section"
            className="block py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            WORK
          </a>
          <a
            href="/"
            className="block py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ABOUT
          </a>
          <a
            href="/"
            className="block py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            THOUGHTS
          </a>
          <a
            href="/"
            className="block py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CONTACT
          </a>
        </div>
      )}

      {/* body */}
      <div className="max-w-7xl mx-auto pt-28 sm:pt-35  pl-7 flex flex-col md:flex-row items-center justify-between xl:min-h-[88vh] sm:min-h-[75vh] ">
        <div className="mb-20 md:mb-0 md:mr-6">
          <div className="melvinInfo  animate__animated animate__bounce text-[35px] md:text-[45px] lg:text-[70px]">
            MELVIN OJIEGO
          </div>
          <div className="w-[60px] h-1 bg-slate-500 self-center"></div>
          <div className="pt-9 melvinInfo text-[36px] md:text-[45px] lg:text-[70px]">
            WEB DEVELOPER
          </div>
        </div>
        <img src={bodyImage} alt="" width={260} height={246} />
      </div>
      <a href="#work-section">
        <div className="flex items-center justify-center pt-5 ">
          <div className="relative">
            <div className="absolute top-1 left-1 w-full h-full bg-black"></div>
            <button className="relative px-4 py-2 bg-gray-300 border-2 border-black text-black font-mono font-bold active:translate-y-1 active:translate-x-1">
              view my work
            </button>
          </div>
        </div>
      </a>

      {/* contact bubbles */}
      <div className="flex flex-row items-center justify-center pt-7 space-x-4 md:hidden">
        {/* Instagram Button */}
        <div className="relative">
          <div className="absolute top-1 left-1 w-10 h-10 bg-black rounded-full"></div>
          <div className="relative rounded-full h-10 w-10 bg-white border-2 border-black flex items-center justify-center font-bold active:translate-y-1 active:translate-x-1">
            <a href="https://www.instagram.com/the.melvin">
              <Instagram size={24} color="black" />
            </a>
          </div>
        </div>

        {/* LinkedIn Button */}
        <div className="relative">
          <div className="absolute top-1 left-1 w-10 h-10 bg-black rounded-full"></div>
          <div className="relative rounded-full h-10 w-10 bg-white border-2 border-black flex items-center justify-center font-bold active:translate-y-1 active:translate-x-1">
            <a href="https://www.linkedin.com/in/melvin-oj-3502b5229/">
              <Linkedin size={24} color="black" />
            </a>
          </div>
        </div>

        {/* GitHub Button */}
        <div className="relative">
          <div className="absolute top-1 left-1 w-10 h-10 bg-black rounded-full"></div>
          <div className="relative rounded-full h-10 w-10 bg-white border-2 border-black flex items-center justify-center font-bold active:translate-y-1 active:translate-x-1">
            <a href="https://github.com/meltheGOAT">
              <Github size={24} color="black" />
            </a>
          </div>
        </div>
      </div>
      {/* stat section */}
      <section className="stat-section pt-7 xl:pt-5 sm:pt-0 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-center space-x-4 p-3"
            >
              <h2 className="text-4xl md:text-5xl">{stat.value}</h2>
              <div className="text-sm leading-tight">
                <p>{stat.line1}</p>
                <p>{stat.line2}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* skillset */}
      <section className="pt-16 h-auto ">
        <h2 className="skilltxt text-center text-[45px] font-mono pt-10">
          SKILLSET
        </h2>
        <div className="font-mono flex items-center justify-center pt-16">
          <div className="skills-container max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-center">
            <div className="h-[157px] w-[174px] sm:w-[174px] shadow-lg rounded pt-8">
              <FontAwesomeIcon icon={faReact} size="4x" />
              <h1>REACT</h1>
            </div>
            <div className="h-[157px] w-[174px] sm:w-[174px] shadow-lg rounded pt-8">
              <FontAwesomeIcon icon={faJs} size="4x" beatFade />
              <h3>JAVASCRIPT</h3>
            </div>
            <div className="h-[157px] w-[174px] sm:w-[174px] shadow-lg rounded pt-8">
              <FontAwesomeIcon icon={faCss3Alt} size="4x" />
              <h3>CSS</h3>
            </div>
            <div className="h-[157px] w-[174px] sm:w-[174px] shadow-lg rounded pt-8">
              <FontAwesomeIcon icon={faGithub} size="4x" />
              <h3>GITHUB</h3>
            </div>
            <div className="h-[157px] w-[174px] sm:w-[174px] shadow-lg rounded pt-8">
              <FontAwesomeIcon icon={faHtml5} size="4x" />
              <h3>HTML 5</h3>
            </div>
            <div className="h-[157px] w-[174px] sm:w-[174px] shadow-lg rounded pt-8">
              <FontAwesomeIcon icon={faNode} size="4x" />
              <h3>NODE</h3>
            </div>
            <div className="h-[157px] w-[174px] sm:w-[174px] shadow-lg rounded pt-8">
              <FontAwesomeIcon icon={faFigma} size="4x" />
              <h3>FIGMA</h3>
            </div>
            <div className="h-[157px] w-[174px] sm:w-[174px] shadow-lg rounded pt-8">
              <FontAwesomeIcon icon={faServer} size="4x" />
              <h3>EXPRESS Js</h3>
            </div>
            {/* <div className="h-[157px] w-[174px] sm:w-[174px] shadow-lg rounded">
              <h3>HTML</h3>
            </div>
            <div className="h-[157px] w-[174px] sm:w-[174px] shadow-lg rounded">
              <h3>HTML</h3>
            </div>
            <div className="h-[157px] w-[174px] sm:w-[174px] shadow-lg rounded">
              <h3>HTML</h3>
            </div> */}
          </div>
        </div>
      </section>
      {/* work section */}
      <section className="pt-16 h-auto " id="work-section">
        <h2 className="skilltxt text-center text-[45px] font-mono pt-10">
          WORK
        </h2>
        <div className="font-mono flex items-center justify-center pt-16 ">
          <div className="skills-container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 text-center border-2 border-gray-300 divide-x divide-y divide-dashed divide-gray-300">
            <div className="h-[297px] w-[400px] pt-5  flex justify-center">
              <div>
                <img
                  src={amNationimg}
                  alt=""
                  className="h-[237px] w-[366px] rounded border-2 border-solid"
                />
                <p>AMNATION</p>
              </div>
            </div>
            <div className="h-[297px] w-[400px]   pt-5  flex justify-center">
              <a href="">
                <div>
                  <img
                    src={castleimg}
                    alt=""
                    className="h-[237px] w-[366px] shadow-lg rounded border-2 border-solid"
                  />
                  <p>ANIME CASTLE</p>
                </div>
              </a>
            </div>
            <div className="h-[297px] w-[400px]  pt-5  flex justify-center">
              <div>
                <img
                  src={comingSoonimg}
                  alt=""
                  className="h-[237px] w-[366px] "
                />
              </div>
            </div>
            <div className="h-[297px] w-[400px]  pt-5  flex justify-center">
              <div>
                <img
                  src={comingSoonimg}
                  alt=""
                  className="h-[237px] w-[366px] "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
