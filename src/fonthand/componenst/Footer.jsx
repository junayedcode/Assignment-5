const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-[1120px] px-5">

        {/* Footer Top */}
        <div className="grid grid-cols-2 gap-8 py-8 sm:grid-cols-4 sm:py-10">

          {/* Logo Area */}
          <div className="col-span-2 sm:col-span-1">
            <img
              src="/src/assets/logo-text.png"
              alt="Dev Stack"
              className="h-5 w-auto"
            />

            <p className="mt-3 max-w-[230px] text-[8px] leading-4 text-gray-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-4 flex flex-wrap gap-4">
              <a href="#" className="text-[8px] text-gray-500">
                GitHub
              </a>

              <a href="#" className="text-[8px] text-gray-500">
                Twitter
              </a>

              <a href="#" className="text-[8px] text-gray-500">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[8px] font-bold text-slate-900">
              PRODUCT
            </h3>

            <div className="mt-4 flex flex-col gap-2.5">
              <a href="#" className="text-[8px] text-gray-400">
                Home
              </a>

              <a href="#technologies" className="text-[8px] text-gray-400">
                Technologies
              </a>

              <a href="#" className="text-[8px] text-gray-400">
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[8px] font-bold text-slate-900">
              COMPANY
            </h3>

            <div className="mt-4 flex flex-col gap-2.5">
              <a href="#" className="text-[8px] text-gray-400">
                About
              </a>

              <a href="#" className="text-[8px] text-gray-400">
                Contact
              </a>

              <a href="#" className="text-[8px] text-gray-400">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[8px] font-bold text-slate-900">
              LEGAL
            </h3>

            <div className="mt-4 flex flex-col gap-2.5">
              <a href="#" className="text-[8px] text-gray-400">
                Privacy Policy
              </a>

              <a href="#" className="text-[8px] text-gray-400">
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center gap-3 border-t border-gray-100 py-5 sm:flex-row sm:justify-between">

          <p className="text-center text-[8px] text-gray-400 sm:text-left">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="text-[8px] text-gray-400">
              Privacy
            </a>

            <a href="#" className="text-[8px] text-gray-400">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;