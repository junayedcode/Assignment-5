import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 bg-white">
      <nav className="mx-auto flex min-h-[60px] max-w-[1120px] items-center justify-between px-5 py-3">

        {/* Logo */}
        <div>
          <img
            src="/src/assets/logo-text.png"
            alt="DevStack Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 md:flex">
          <a href="#" className="text-xs text-pink-500">
            Home
          </a>

          <a href="#" className="text-xs text-gray-500">
            Technologies
          </a>

          <a href="#" className="text-xs text-gray-500">
            Projects
          </a>

          <a href="#" className="text-xs text-gray-500">
            About
          </a>

          <a href="#" className="text-xs text-gray-500">
            Contact
          </a>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="text-xs text-gray-600">
            Sign In
          </button>

          <button className="rounded-full bg-pink-500 px-4 py-2 text-xs font-medium text-white">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-xl text-gray-700 md:hidden"
        >
          ☰
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 px-5 py-4 md:hidden">

          <div className="flex flex-col gap-4">

            <a href="#" className="text-xs text-pink-500">
              Home
            </a>

            <a href="#" className="text-xs text-gray-500">
              Technologies
            </a>

            <a href="#" className="text-xs text-gray-500">
              Projects
            </a>

            <a href="#" className="text-xs text-gray-500">
              About
            </a>

            <a href="#" className="text-xs text-gray-500">
              Contact
            </a>

            <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
              <button className="text-xs text-gray-600">
                Sign In
              </button>

              <button className="rounded-full bg-pink-500 px-4 py-2 text-xs font-medium text-white">
                Sign Up
              </button>
            </div>

          </div>

        </div>
      )}
    </header>
  );
};

export default Nav;