import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";

const years = ["2025", "2024", "2023", "2022", "2021"];

const Navbar = () => {
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [campsOpen, setCampsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  const baseLink =
    "relative px-4 py-2 font-medium transition-colors duration-200";

  const underline = (
    <span
      className="absolute left-0 -bottom-1 w-full h-[2px]"
      style={{ backgroundColor: "#0f2a55", borderRadius: "2px" }}
    ></span>
  );

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "#dbe3ed",
        borderBottom: "1px solid #c0c4ca",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/nss.png"
              alt="NSS"
              className="w-10 h-10 object-contain"
            />
            <div className="hidden sm:block">
              <div style={{ color: "#0f2a55" }} className="font-bold text-lg">
                PICT NSS
              </div>
              <div style={{ color: "#3b3b3b" }} className="text-xs">
                Not Me, But You
              </div>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-2">

            {/* Home */}
            <Link
              to="/"
              className={baseLink}
              style={{
                color: isActive("/") ? "#0f2a55" : "#1a1a1a",
              }}
            >
              Home
              {isActive("/") && underline}
            </Link>

            {/* Activities */}
            <div
              className="relative"
              onMouseEnter={() => setActivitiesOpen(true)}
              onMouseLeave={() => setActivitiesOpen(false)}
            >
              <Link
                to="/activities"
                className={`${baseLink} flex items-center gap-1`}
                style={{
                  color: isActive("/activities") ? "#0f2a55" : "#1a1a1a",
                }}
              >
                Activities ▼
                {isActive("/activities") && underline}
              </Link>

              <Dropdown items={years} basePath="/activities" isOpen={activitiesOpen} />
            </div>

            {/* NSS Camp */}
            <div
              className="relative"
              onMouseEnter={() => setCampsOpen(true)}
              onMouseLeave={() => setCampsOpen(false)}
            >
              <Link
                to="/camps"
                className={`${baseLink} flex items-center gap-1`}
                style={{
                  color: isActive("/camps") ? "#0f2a55" : "#1a1a1a",
                }}
              >
                NSS Camp ▼
                {isActive("/camps") && underline}
              </Link>

              <Dropdown items={years} basePath="/camps" isOpen={campsOpen} />
            </div>

            {/* Magazine */}
            <Link
              to="/magazine"
              className={baseLink}
              style={{
                color: isActive("/magazine") ? "#0f2a55" : "#1a1a1a",
              }}
            >
              Magazine
              {isActive("/magazine") && underline}
            </Link>

            {/* Gallery */}
            <Link
              to="/gallery"
              className={baseLink}
              style={{
                color: isActive("/gallery") ? "#0f2a55" : "#1a1a1a",
              }}
            >
              Gallery
              {isActive("/gallery") && underline}
            </Link>

            {/* Team */}
            <Link
              to="/team"
              className={baseLink}
              style={{
                color: isActive("/team") ? "#0f2a55" : "#1a1a1a",
              }}
            >
              Team
              {isActive("/team") && underline}
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl"
            style={{ color: "#0f2a55" }}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/activities", label: "Activities" },
              { to: "/camps", label: "NSS Camp" },
              { to: "/magazine", label: "Magazine" },
              { to: "/gallery", label: "Gallery" },
              { to: "/team", label: "Team" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2"
                style={{
                  color: isActive(item.to) ? "#0f2a55" : "#1a1a1a",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;