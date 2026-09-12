import type { Stack } from "../types/stack";
import StackCard from "./StackCard";

interface StackGridProps {
  stacks: Stack[];
  onAdd: (stack: Stack) => void;
  selectedStacks: Stack[];
}

const StackGrid = ({
  stacks,
  onAdd,
  selectedStacks,
}: StackGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {stacks.map((stack) => (
        <StackCard
          key={stack.id}
          stack={stack}
          onAdd={onAdd}
          selectedStacks={selectedStacks}
        />
      ))}
    </div>
  );
};

export default StackGrid;