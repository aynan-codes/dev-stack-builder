const Hero = () => {
  return (
    <section className="mx-auto grid max-w-[1180px] grid-cols-2 items-center px-6 pb-14 pt-16">

      <div>
        <h1 className="text-[39px] font-extrabold leading-[1.03] tracking-[-1.5px] text-[#272331]">
          Build Your Ideal
          <br />

          <span className="bg-gradient-to-r from-[#e86b4e] to-[#8b56d9] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-5 max-w-[430px] text-[10px] leading-[1.7] text-[#858189]">
          Explore frontend, backend, database, and tooling options.
          Compose them into your ideal stack and start building your
          next project.
        </p>

        <div className="mt-6 flex items-center gap-4">
          <button className="rounded-[4px] bg-gradient-to-r from-[#ee7650] to-[#d85186] px-4 py-[8px] text-[8px] font-semibold text-white shadow-sm">
            Explore Technologies
          </button>

          <button className="text-[8px] font-medium text-[#55515a]">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src="/banner-stack.png"
          alt="Development Stack"
          className="h-[220px] w-[220px] object-contain"
        />
      </div>

    </section>
  );
};

export default Hero;