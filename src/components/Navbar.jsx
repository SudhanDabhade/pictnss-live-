import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";

const years = ["2026", "2025"];
const campYears = ["2026"];

const Navbar = () => {
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [campsOpen, setCampsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState(null);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  const baseLink =
    "relative px-4 py-2 font-semibold transition-all duration-300 rounded-lg group overflow-hidden";

  // Animated gradient underline
  const AnimatedUnderline = ({ isVisible }) => (
    <span
      className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-red-600 via-red-600 to-red-600 rounded-full transition-all duration-500"
      style={{
        width: isVisible ? "100%" : "0%",
        boxShadow: isVisible ? "0 0 20px rgba(220, 20, 60, 0.8)" : "none",
      }}
    />
  );

  // 3D Hover Background
  const HoverBackground = ({ isHovered }) => (
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
      style={{
        background: "linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(59, 130, 246, 0.08) 100%)",
        transform: isHovered ? "scale(1.1) perspective(600px) rotateX(5deg)" : "scale(1)",
        transformStyle: "preserve-3d",
      }}
    />
  );

  return (
    <>
      {/* Animated style definitions */}
      <style>{`
        @keyframes slideIn {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes gradientFlow {
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

        .navbar-glow {
          animation: gradientFlow 6s ease infinite;
          background-size: 200% 200%;
          background: linear-gradient(-45deg, #1e3c72, #2a5298, #7e22ce, #1e3c72);
        }

        .logo-float {
          animation: float 3s ease-in-out infinite;
        }

        .nav-item-3d {
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        .nav-item-3d:hover {
          transform: translateZ(20px) rotateX(2deg);
        }

        .glow-effect {
          position: relative;
        }

        .glow-effect::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 0.5rem;
          padding: 2px;
          background: linear-gradient(145deg, #1a1d6e, #2e3191, #5558d8, #2e3191);
          background-size: 300% 300%;
          animation: gradientFlow 3s ease infinite;
          opacity: 0;
          pointer-events: none;
          z-index: -1;
          transition: opacity 0.3s;
        }

        .glow-effect:hover::after {
          opacity: 0.4;
        }

        .text-gradient {
          background: linear-gradient(135deg, #0f2a55, #3b82f6, #0f2a55);
          background-size: 200% 200%;
          animation: gradientFlow 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .navbar-backdrop {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(10px) saturate(180%);
          -webkit-backdrop-filter: blur(10px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
          .navbar-backdrop-blur {
            -webkit-backdrop-filter: blur(10px) saturate(180%);
            backdrop-filter: blur(10px) saturate(180%);
          }
        }
      `}</style>

      <div
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: "linear-gradient(to bottom, #ffffffff, #ffffffff)",
          backdropFilter: "blur(10px) saturate(180%)",
          WebkitBackdropFilter: "blur(10px) saturate(180%)",
          border: "1px solid rgba(15, 42, 85, 0.1)",
          boxShadow: isScrolled
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 0 60px rgba(15, 42, 85, 0.1)"
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">

            {/* LOGO - With floating animation */}
            <Link to="/" className="flex items-center gap-3 logo-float group">
              <div className="relative">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-white to-blue-300 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                  style={{ animation: "gradientFlow 4s ease infinite" }}
                />
                <img
                  src="/nss.png"
                  alt="NSS"
                  className="w-10 h-10 object-contain relative transition-transform duration-500 group-hover:scale-125"
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg text-blue-700 group-hover:text-blue-900 transition-colors duration-300">
                  PICT NSS
                </div>
                <div className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                  Not Me, But You
                </div>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-1">

              {/* Home */}
              <Link
                to="/"
                className={`${baseLink} glow-effect`}
                onMouseEnter={() => setHoveredItem("home")}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  color: isActive("/") ? "#0f2a55" : "#475569",
                  textShadow: isActive("/") ? "0 0 10px rgba(15, 42, 85, 0.3)" : "none",
                }}
              >
                <HoverBackground isHovered={hoveredItem === "home"} />
                <span className="relative z-10">Home</span>
                <AnimatedUnderline isVisible={isActive("/")} />
              </Link>

              {/* Activities */}
              <div
                className="relative nav-item-3d"
                onMouseEnter={() => {
                  setActivitiesOpen(true);
                  setHoveredItem("activities");
                }}
                onMouseLeave={() => {
                  setActivitiesOpen(false);
                  setHoveredItem(null);
                }}
              >
                <Link
                  to="/activities"
                  className={`${baseLink} glow-effect flex items-center gap-1`}
                  style={{
                    color: isActive("/activities") ? "#0f2a55" : "#475569",
                    textShadow: isActive("/activities")
                      ? "0 0 10px rgba(15, 42, 85, 0.3)"
                      : "none",
                  }}
                >
                  <HoverBackground isHovered={hoveredItem === "activities"} />
                  <span className="relative z-10">Activities</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-500 relative z-10 ${activitiesOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <AnimatedUnderline isVisible={isActive("/activities")} />
                </Link>

                <Dropdown items={years} basePath="/activities" isOpen={activitiesOpen} />
              </div>

              {/* NSS Camp */}
              <div
                className="relative nav-item-3d"
                onMouseEnter={() => {
                  setCampsOpen(true);
                  setHoveredItem("camps");
                }}
                onMouseLeave={() => {
                  setCampsOpen(false);
                  setHoveredItem(null);
                }}
              >
                <Link
                  to="/camps"
                  className={`${baseLink} glow-effect flex items-center gap-1`}
                  style={{
                    color: isActive("/camps") ? "#0f2a55" : "#475569",
                    textShadow: isActive("/camps")
                      ? "0 0 10px rgba(15, 42, 85, 0.3)"
                      : "none",
                  }}
                >
                  <HoverBackground isHovered={hoveredItem === "camps"} />
                  <span className="relative z-10">NSS Camp</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-500 relative z-10 ${campsOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <AnimatedUnderline isVisible={isActive("/camps")} />
                </Link>

                <Dropdown items={campYears} basePath="/camps" isOpen={campsOpen} />
              </div>

              {/* School Teaching */}
              <Link
                to="/schoolteaching"
                className={`${baseLink} glow-effect`}
                onMouseEnter={() => setHoveredItem("school")}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  color: isActive("/schoolteaching") ? "#1c2534ff" : "#475569",
                  textShadow: isActive("/schoolteaching")
                    ? "0 0 10px rgba(15, 42, 85, 0.3)"
                    : "none",
                }}
              >
                <HoverBackground isHovered={hoveredItem === "school"} />
                <span className="relative z-10">School Teaching</span>
                <AnimatedUnderline isVisible={isActive("/schoolteaching")} />
              </Link>

              {/* Blogs */}
              <Link
                to="/blogs"
                className={`${baseLink} glow-effect`}
                onMouseEnter={() => setHoveredItem("blogs")}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  color: isActive("/blogs") ? "#0f2a55" : "#475569",
                  textShadow: isActive("/blogs")
                    ? "0 0 10px rgba(15, 42, 85, 0.3)"
                    : "none",
                }}
              >
                <HoverBackground isHovered={hoveredItem === "blogs"} />
                <span className="relative z-10">Blogs</span>
                <AnimatedUnderline isVisible={isActive("/blogs")} />
              </Link>

              {/* Magazine */}
              <Link
                to="/magazine"
                className={`${baseLink} glow-effect`}
                onMouseEnter={() => setHoveredItem("magazine")}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  color: isActive("/magazine") ? "#0f2a55" : "#475569",
                  textShadow: isActive("/magazine")
                    ? "0 0 10px rgba(15, 42, 85, 0.3)"
                    : "none",
                }}
              >
                <HoverBackground isHovered={hoveredItem === "magazine"} />
                <span className="relative z-10">Magazine</span>
                <AnimatedUnderline isVisible={isActive("/magazine")} />
              </Link>

              {/* Gallery */}
              <Link
                to="/gallery"
                className={`${baseLink} glow-effect`}
                onMouseEnter={() => setHoveredItem("gallery")}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  color: isActive("/gallery") ? "#0f2a55" : "#475569",
                  textShadow: isActive("/gallery")
                    ? "0 0 10px rgba(15, 42, 85, 0.3)"
                    : "none",
                }}
              >
                <HoverBackground isHovered={hoveredItem === "gallery"} />
                <span className="relative z-10">Gallery</span>
                <AnimatedUnderline isVisible={isActive("/gallery")} />
              </Link>

              {/* Team */}
              <Link
                to="/team"
                className={`${baseLink} glow-effect`}
                onMouseEnter={() => setHoveredItem("team")}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  color: isActive("/team") ? "#0f2a55" : "#475569",
                  textShadow: isActive("/team")
                    ? "0 0 10px rgba(15, 42, 85, 0.3)"
                    : "none",
                }}
              >
                <HoverBackground isHovered={hoveredItem === "team"} />
                <span className="relative z-10">Team</span>
                <AnimatedUnderline isVisible={isActive("/team")} />
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-2xl transition-all duration-300 p-2 rounded-lg glow-effect hover:text-blue-900"
              style={{ color: "#0f2a55" }}
            >
              <span className="relative z-10">{mobileMenuOpen ? "✕" : "☰"}</span>
            </button>
          </div>

          {/* MOBILE MENU */}
          {mobileMenuOpen && (
            <div
              className="md:hidden py-4 space-y-2 border-t rounded-b-lg backdrop-blur-xl"
              style={{
                borderTopColor: "rgba(15, 42, 85, 0.1)",
                background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(240, 244, 248, 0.9))",
              }}
            >
              {[
                { to: "/", label: "Home" },
                { to: "/activities", label: "Activities" },
                { to: "/camps", label: "NSS Camp" },
                { to: "/schoolteaching", label: "School Teaching" },
                { to: "/blogs", label: "Blogs" },
                { to: "/magazine", label: "Magazine" },
                { to: "/gallery", label: "Gallery" },
                { to: "/team", label: "Team" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg transition-all duration-300 glow-effect"
                  style={{
                    color: isActive(item.to) ? "#0f2a55" : "#475569",
                    fontWeight: isActive(item.to) ? "700" : "500",
                    textShadow: isActive(item.to)
                      ? "0 0 10px rgba(15, 42, 85, 0.3)"
                      : "none",
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;