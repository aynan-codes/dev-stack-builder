import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#f0eef2] bg-white">
      <nav className="mx-auto flex h-[58px] max-w-[1180px] items-center justify-between px-6">

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <div className="flex items-center gap-2">
          <div className="flex h-[22px] w-[22px] items-center justify-center rounded-[5px] bg-[#8d5cf6] text-[10px] font-bold text-white">
            D
          </div>

          <span className="text-[13px] font-bold text-[#292633]">
            Dev Stack
          </span>
        </div>

        <div className="hidden items-center gap-7 md:flex">
          <a href="#" className="text-[9px] font-medium text-[#e35b71]">
            Home
          </a>
          <a href="#technologies" className="text-[9px] text-[#6e6b73] hover:text-[#e35b71]">
            Technologies
          </a>
          <a href="#" className="text-[9px] text-[#6e6b73] hover:text-[#e35b71]">
            Projects
          </a>
          <a href="#" className="text-[9px] text-[#6e6b73] hover:text-[#e35b71]">
            About
          </a>
          <a href="#" className="text-[9px] text-[#6e6b73] hover:text-[#e35b71]">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden text-[9px] text-[#66636b] sm:block">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-[#f37a58] to-[#d84d91] px-4 py-[6px] text-[8px] font-semibold text-white">
            Sign Up
          </button>
        </div>

      </nav>

      {menuOpen && (
        <div className="flex flex-col gap-4 border-t border-[#f0eef2] px-6 py-4 md:hidden">
          <a href="#" className="text-[10px] font-medium text-[#e35b71]">
            Home
          </a>
          <a href="#technologies" className="text-[10px] text-[#6e6b73]">
            Technologies
          </a>
          <a href="#" className="text-[10px] text-[#6e6b73]">
            Projects
          </a>
          <a href="#" className="text-[10px] text-[#6e6b73]">
            About
          </a>
          <a href="#" className="text-[10px] text-[#6e6b73]">
            Contact
          </a>
          <button className="text-left text-[10px] text-[#66636b]">
            Sign In
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;