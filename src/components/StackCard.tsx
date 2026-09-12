import type { Stack } from "../types/stack";

interface StackCardProps {
  stack: Stack;
  onAdd: (stack: Stack) => void;
  selectedStacks: Stack[];
}

const StackCard = ({
  stack,
  onAdd,
  selectedStacks,
}: StackCardProps) => {
  const isSelected = selectedStacks.some(
    (item) => item.id === stack.id
  );

  return (
    <article className="rounded-[6px] border border-[#eeecef] bg-white p-3 shadow-[0_2px_8px_rgba(30,20,50,0.03)]">

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-2">
          <div className="flex h-[27px] w-[27px] items-center justify-center rounded-[5px] bg-[#f7f6f8] text-[11px] font-bold">
            {stack.icon}
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-[#302c36]">
              {stack.name}
            </h3>

            <p className="text-[7px] text-[#aaa6ae]">
              {stack.category}
            </p>
          </div>
        </div>

        <span className="text-[7px] text-[#aaa6ae]">
          {stack.version}
        </span>

      </div>

      <p className="mt-3 min-h-[34px] text-[7px] leading-[1.55] text-[#88858d]">
        {stack.description}
      </p>

      <div className="mt-2 flex items-center justify-between">
        <div className="flex gap-1">
          {stack.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#f7f5f8] px-2 py-[3px] text-[6px] text-[#8b878f]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button
        disabled={isSelected}
        onClick={() => onAdd(stack)}
        className={`mt-3 w-full rounded-[4px] py-[6px] text-[7px] font-semibold ${
          isSelected
            ? "bg-[#eeeaf3] text-[#8e8797]"
            : "bg-[#2d2935] text-white hover:bg-[#7651ad]"
        }`}
      >
        {isSelected ? "Added to Stack" : "Add to Stack"}
      </button>

    </article>
  );
};

export default StackCard;