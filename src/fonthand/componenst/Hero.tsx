const Hero = () => {
  return (
    <section className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-16">
      
      {/* Left Side */}
      <div className="max-w-[550px]">
        <h1 className="text-5xl font-bold leading-[1.05] text-slate-900">
          Build Your Ideal
          <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-5 max-w-[480px] text-sm leading-6 text-gray-500">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits your
          next project.
        </p>

        <div className="mt-7 flex gap-2">
          <button className="rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 text-xs font-medium text-white">
            Explore Technologies
          </button>

          <button className="rounded-md border border-gray-200 px-7 py-2 text-xs text-gray-600">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div>
        <img
          src="/src/assets/banner-stack.png"
          alt="Development Stack"
          className="w-[300px]"
        />
      </div>

    </section>
  );
};

export default Hero;