const Nav = () => {
  return (
    <header className="border-b border-gray-100 bg-white">
      <nav className="mx-auto flex min-h-[60px] max-w-[1120px] flex-wrap items-center justify-between gap-3 px-5 py-3">

        {/* Logo */}
        <div>
          <img
            src="/src/assets/logo-text.png"
            alt="DevStack Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Menu */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-7">
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

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button className="text-xs text-gray-600">
            Sign In
          </button>

          <button className="rounded-full bg-pink-500 px-4 py-2 text-xs font-medium text-white">
            Sign Up
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Nav;