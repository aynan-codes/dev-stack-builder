import type { Stack } from "../types/stack";
import { X } from "lucide-react";

interface SelectedStackProps {
  selectedStacks: Stack[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const SelectedStack = ({
  selectedStacks,
  onRemove,
  onRemoveAll,
}: SelectedStackProps) => {
  return (
    <aside className="min-h-[260px] border-l border-[#eeecef] pl-5">

      <div className="flex items-center justify-between">
        <h3 className="text-[10px] font-bold text-[#302c36]">
          Your Stack
        </h3>

        <span className="text-[7px] text-[#aaa6ae]">
          {selectedStacks.length} selected
        </span>
      </div>

      {selectedStacks.length === 0 ? (
        <div className="mt-5 border-t border-[#f1eff2] pt-5">
          <p className="text-center text-[8px] leading-5 text-[#aaa6ae]">
            Your selected technologies
            <br />
            will appear here.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-4 space-y-2">
            {selectedStacks.map((stack) => (
              <div
                key={stack.id}
                className="flex items-center justify-between border-b border-[#f1eff2] pb-2"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[11px]">
                    {stack.icon}
                  </span>

                  <span className="text-[8px] font-medium text-[#4b4750]">
                    {stack.name}
                  </span>
                </div>

                <button
                  onClick={() => onRemove(stack.id)}
                  className="text-[#aaa6ae] hover:text-red-500"
                >
                  <X size={10} />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-[4px] bg-red-50 py-2 text-[8px] font-semibold text-red-500 hover:bg-red-100"
          >
            Remove All
          </button>
        </>
      )}

    </aside>
  );
};

export default SelectedStack;