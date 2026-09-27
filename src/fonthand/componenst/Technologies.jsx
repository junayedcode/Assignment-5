import { useState } from "react";

import { technologies } from "./TechnologyData.jsx";
import AddToStack from "./AddToStack.jsx";
import RemoveFromStack from "./RemoveFromStack.jsx";

const Technologies = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const addToStack = (technology) => {
    const alreadySelected = selectedTechnologies.some(
      (item) => item.name === technology.name
    );

    if (alreadySelected) {
      return;
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology,
    ]);
  };

  const removeFromStack = (technologyName) => {
    setSelectedTechnologies(
      selectedTechnologies.filter(
        (item) => item.name !== technologyName
      )
    );
  };

  const clearStack = () => {
    setSelectedTechnologies([]);
  };

  return (
    <section
      id="technologies"
      className="mx-auto max-w-[1120px] px-5 py-14"
    >
      {/* Section Heading */}

      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Explore the{" "}
          <span className="text-pink-500">Technologies</span>
        </h2>

        <p className="mt-1 text-[10px] text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Content */}

      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-4">

        {/* Technology Cards */}

        <div className="grid grid-cols-1 gap-3 md:col-span-3 md:grid-cols-3">

          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm"
            >

              {/* Card Header */}

              <div className="flex items-start justify-between">

                <div className="flex items-center gap-2">

                  <div className="flex h-7 w-7 items-center justify-center text-lg">
                    {technology.icon}
                  </div>

                  <h3 className="text-xs font-semibold text-slate-900">
                    {technology.name}
                  </h3>

                </div>

                <span
                  className={`rounded-full px-2 py-1 text-[7px] font-medium ${technology.badgeColor}`}
                >
                  {technology.badge}
                </span>

              </div>

              {/* Description */}

              <p className="mt-3 min-h-[42px] text-[8px] leading-4 text-gray-500">
                {technology.description}
              </p>

              {/* Information */}

              <div className="mt-3 flex items-center justify-between">

                <span className="rounded bg-gray-50 px-2 py-1 text-[7px] text-gray-500">
                  {technology.category}
                </span>

                <span className="text-[7px] text-gray-500">
                  {technology.level}
                </span>

                <span className="text-[7px] text-gray-600">
                  ⭐ {technology.rating}
                </span>

              </div>

              {/* Add Button */}

              <AddToStack
                technology={technology}
                addToStack={addToStack}
              />

            </div>
          ))}

        </div>

        {/* Your Stack */}

        <div className="h-fit rounded-lg border border-gray-100 bg-white p-3 shadow-sm">

          {/* Stack Header */}

          <div>

            <h3 className="text-xs font-semibold text-slate-900">
              Your Stack
            </h3>

            <p className="mt-1 text-[8px] text-gray-400">
              {selectedTechnologies.length === 0
                ? "No technologies selected yet."
                : `${selectedTechnologies.length} technologies selected`}
            </p>

          </div>

          {/* Selected Technologies */}

          <div className="mt-5 space-y-2">

            {selectedTechnologies.length === 0 ? (

              <div className="flex min-h-[80px] items-center justify-center rounded-lg border border-dashed border-gray-200">

                <p className="text-[8px] text-gray-400">
                  Your stack is empty
                </p>

              </div>

            ) : (

              selectedTechnologies.map((technology) => (

                <div
                  key={technology.name}
                  className="flex items-center gap-2 rounded-md border border-gray-100 p-2"
                >

                  {/* Icon */}

                  <div className="flex h-6 w-6 items-center justify-center text-base">
                    {technology.icon}
                  </div>

                  {/* Name + Category */}

                  <div>

                    <p className="text-[9px] font-medium text-slate-900">
                      {technology.name}
                    </p>

                    <p className="text-[7px] text-gray-400">
                      {technology.category}
                    </p>

                  </div>

                  {/* X Button */}

                  <RemoveFromStack
                    technology={technology}
                    removeFromStack={removeFromStack}
                  />

                </div>

              ))

            )}

          </div>

          {/* Clear All */}

          {selectedTechnologies.length > 0 && (

            <button
              onClick={clearStack}
              className="mt-4 w-full rounded-md bg-red-500 py-2.5 text-[9px] font-semibold text-white hover:bg-red-600"
            >
              Clear All
            </button>

          )}

        </div>

      </div>
    </section>
  );
};

export default Technologies;