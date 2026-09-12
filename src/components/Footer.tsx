const Footer = () => {
  return (
    <footer className="border-t border-[#eeecef] bg-white">
      <div className="mx-auto grid max-w-[1180px] grid-cols-4 gap-10 px-6 py-10">

        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-[22px] w-[22px] items-center justify-center rounded-[5px] bg-[#8d5cf6] text-[9px] font-bold text-white">
              D
            </div>

            <span className="text-[11px] font-bold">
              Dev Stack
            </span>
          </div>

          <p className="mt-3 max-w-[190px] text-[7px] leading-5 text-[#99959d]">
            Build your ideal development stack
            with the technologies you love.
          </p>
        </div>

        <div>
          <h4 className="text-[8px] font-bold text-[#403c45]">
            PRODUCT
          </h4>

          <div className="mt-3 space-y-2 text-[7px] text-[#99959d]">
            <p>Technologies</p>
            <p>Projects</p>
            <p>Features</p>
          </div>
        </div>

        <div>
          <h4 className="text-[8px] font-bold text-[#403c45]">
            COMPANY
          </h4>

          <div className="mt-3 space-y-2 text-[7px] text-[#99959d]">
            <p>About</p>
            <p>Contact</p>
            <p>Careers</p>
          </div>
        </div>

        <div>
          <h4 className="text-[8px] font-bold text-[#403c45]">
            LEGAL
          </h4>

          <div className="mt-3 space-y-2 text-[7px] text-[#99959d]">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>

      </div>

      <div className="border-t border-[#f0eef2] py-4 text-center text-[7px] text-[#aaa6ae]">
        © 2026 Dev Stack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;