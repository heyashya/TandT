import React, { Component, createRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import arrow1 from "../assets/arrow.png";

class Navbar extends Component {
  state = {
    open: false,
    scrolled: false,
  };

  menuRef = createRef();

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleScroll = () => {
    this.setState({ scrolled: window.scrollY > 80 });
  };

  handleClickOutside = (e) => {
    if (this.menuRef.current && !this.menuRef.current.contains(e.target)) {
      this.closeMenu();
    }
  };

  toggleMenu = () => {
    this.setState(
      (prev) => ({ open: !prev.open }),
      () => {
        document.body.style.overflow = this.state.open ? "hidden" : "auto";
      }
    );
  };

  closeMenu = () => {
    this.setState({ open: false });
    document.body.style.overflow = "auto";
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    const { open, scrolled } = this.state;

    return (
      <>
        {/* NAVBAR */}
        <nav
          className={`
            fixed top-0 left-0 w-full z-[1000]
            transition-all duration-500
            ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
          `}
        >
          <div className="flex items-center justify-between px-6 py-4">
            {/* LOGO */}
            <h1
              className={`text-2xl font-bold ${
                scrolled ? "text-black" : "text-yellow-400"
              }`}
            >
              AWTravels
            </h1>

            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex gap-8">
              {["Home", "Service", "About", "Contact"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                    onClick={this.scrollToTop}
                    className={({ isActive }) =>
                      `text-lg font-semibold transition ${
                        isActive
                          ? "border-b-4 border-yellow-300 text-yellow-400"
                          : scrolled
                          ? "text-black"
                          : "text-white"
                      }`
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* CHEVRON TOGGLE (Mobile / Tablet) */}
            <button
              onClick={this.toggleMenu}
              aria-label="Toggle menu"
              className="lg:hidden flex items-center justify-center w-10 h-10"
            >
              <img
                src={arrow1}
                alt="menu toggle"
                className={`
      w-6 h-6 object-contain
      transition-transform duration-300 ease-in-out
      ${open ? "rotate-180" : "rotate-0"}
      
    `}
              />
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              ref={this.menuRef}
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="
                fixed top-[72px] left-0 w-full z-[999]
                backdrop-blur-xl bg-black/60
                lg:hidden
              "
            >
              <ul className="flex flex-col items-center py-10 gap-6">
                {["Home", "Service", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <NavLink
                      to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                      onClick={() => {
                        this.scrollToTop();
                        this.closeMenu();
                      }}
                      className={({ isActive }) =>
                        `text-xl font-bold transition ${
                          isActive ? "text-white underline" : "text-yellow-400"
                        }`
                      }
                    >
                      {item}
                    </NavLink>
                  </li>
                ))}

                <li>
                  <Link
                    to="/signup"
                    onClick={() => {
                      this.scrollToTop();
                      this.closeMenu();
                    }}
                    className="
                      mt-4 px-8 py-3
                      bg-yellow-400 text-black
                      rounded-xl font-bold
                    "
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }
}

export default Navbar;
