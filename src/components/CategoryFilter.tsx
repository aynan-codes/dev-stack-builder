interface CategoryFilterProps {
  category: string;
  setCategory: (value: string) => void;
}

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Language",
];

const CategoryFilter = ({
  category,
  setCategory,
}: CategoryFilterProps) => {
  return (
    <div className="flex gap-1">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`rounded-full px-3 py-[6px] text-[8px] ${
            category === item
              ? "bg-[#8b5cf6] text-white"
              : "bg-[#f7f5f8] text-[#77737c]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;