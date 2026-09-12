import { useState } from "react";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import StackGrid from "./components/StackGrid";
import SelectedStack from "./components/SelectedStack";
import Footer from "./components/Footer";

import { stacks } from "./data/stacks";
import type { Stack } from "./types/stack";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedStacks, setSelectedStacks] = useState<Stack[]>([]);

  const addToStack = (stack: Stack) => {
    const exists = selectedStacks.some(
      (item) => item.id === stack.id
    );

    if (exists) {
      toast.warning(`${stack.name} is already in your stack!`);
      return;
    }

    setSelectedStacks((prev) => [...prev, stack]);
    toast.success(`${stack.name} added to your stack!`);
  };

  const removeFromStack = (id: number) => {
    setSelectedStacks((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const removeAllFromStack = () => {
    setSelectedStacks([]);
    toast.info("All technologies removed from your stack!");
  };

  const filteredStacks = stacks.filter((stack) => {
    const searchMatch = stack.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" ||
      stack.category === category;

    return searchMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-white">
      <Navbar />

      <Hero />

      <section
        id="technologies"
        className="mx-auto max-w-[1180px] px-6 pb-20"
      >
        <div className="mb-7">
          <h2 className="text-[22px] font-bold text-[#252331]">
            Explore the Technologies
          </h2>

          <p className="mt-1 text-[11px] text-[#88858d]">
            Pick the technologies you need to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-[1fr_245px] gap-7">
          <div>
            <div className="mb-5 flex items-center justify-between gap-4">
              <SearchBar
                search={search}
                setSearch={setSearch}
              />

              <CategoryFilter
                category={category}
                setCategory={setCategory}
              />
            </div>

            <StackGrid
              stacks={filteredStacks}
              onAdd={addToStack}
              selectedStacks={selectedStacks}
            />
          </div>

          <SelectedStack
            selectedStacks={selectedStacks}
            onRemove={removeFromStack}
            onRemoveAll={removeAllFromStack}
          />
        </div>
      </section>

      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default App;