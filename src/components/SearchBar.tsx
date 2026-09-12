import { Search } from "lucide-react";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar = ({
  search,
  setSearch,
}: SearchBarProps) => {
  return (
    <div className="relative w-[220px]">
      <Search
        size={12}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#aaa6ae]"
      />

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search technologies..."
        className="h-[32px] w-full rounded-[5px] border border-[#e9e7eb] bg-white pl-8 pr-3 text-[9px] text-[#444] outline-none placeholder:text-[#aaa6ae] focus:border-[#b18ae9]"
      />
    </div>
  );
};

export default SearchBar;