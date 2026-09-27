import { useState } from "react";

import {
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: <SiReact className="text-cyan-500" />,
    badge: "Popular",
    badgeColor: "bg-blue-50 text-blue-500",
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: "4.9",
  },
  {
    name: "Vue.js",
    icon: <SiVuedotjs className="text-green-500" />,
    badge: "Versatile",
    badgeColor: "bg-green-50 text-green-500",
    description:
      "An approachable, performant and versatile framework for building user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: "4.8",
  },
  {
    name: "Svelte",
    icon: <SiSvelte className="text-orange-500" />,
    badge: "Fast",
    badgeColor: "bg-orange-50 text-orange-500",
    description:
      "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    category: "Frontend",
    level: "Intermediate",
    rating: "4.9",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    badge: "Fullstack",
    badgeColor: "bg-gray-100 text-gray-600",
    description:
      "The React framework for full-stack web applications with hybrid static and dynamic rendering.",
    category: "Frontend",
    level: "Intermediate",
    rating: "4.9",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500" />,
    badge: "Standard",
    badgeColor: "bg-green-50 text-green-500",
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    category: "Backend",
    level: "Intermediate",
    rating: "4.8",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-500" />,
    badge: "Top SQL",
    badgeColor: "bg-blue-50 text-blue-500",
    description:
      "A powerful open-source object-relational database system known for reliability.",
    category: "Database",
    level: "Intermediate",
    rating: "4.9",
  },
  {
    name: "Redis",
    icon: <SiRedis className="text-red-500" />,
    badge: "Cache",
    badgeColor: "bg-red-50 text-red-500",
    description:
      "An in-memory data structure store used for caching, session management and more.",
    category: "Database",
    level: "Intermediate",
    rating: "4.8",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500" />,
    badge: "Ubiquitous",
    badgeColor: "bg-yellow-50 text-yellow-600",
    description:
      "The versatile programming language powering dynamic behavior across the web.",
    category: "Language",
    level: "Beginner-Friendly",
    rating: "4.9",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    badge: "Essential",
    badgeColor: "bg-blue-50 text-blue-500",
    description:
      "A strongly typed programming language that builds on JavaScript for better tooling.",
    category: "Language",
    level: "Intermediate",
    rating: "4.9",
  },
  {
    name: "Java",
    icon: <SiOpenjdk className="text-red-500" />,
    badge: "Robust",
    badgeColor: "bg-red-50 text-red-500",
    description:
      "A mature, object-oriented programming language designed for portability and scalability.",
    category: "Language",
    level: "Intermediate",
    rating: "4.8",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500" />,
    badge: "Modern",
    badgeColor: "bg-blue-50 text-blue-500",
    description:
      "A utility-first CSS framework packed with classes that can be composed to build UI.",
    category: "Styling",
    level: "Beginner-Friendly",
    rating: "4.9",
  },
  {
    name: "Docker",
    icon: <SiDocker className="text-blue-500" />,
    badge: "Containers",
    badgeColor: "bg-blue-50 text-blue-500",
    description:
      "A platform designed to build, share, and run applications in lightweight containers.",
    category: "DevOps",
    level: "Intermediate",
    rating: "4.8",
  },
];

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

  return (
    <section
      id="technologies"
      className="mx-auto max-w-[1120px] px-5 py-14"
    >
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Explore the{" "}
          <span className="text-pink-500">Technologies</span>
        </h2>

        <p className="mt-1 text-[10px] text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-4">
        <div className="grid grid-cols-1 gap-3 md:col-span-3 md:grid-cols-3">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm"
            >
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

              <p className="mt-3 min-h-[42px] text-[8px] leading-4 text-gray-500">
                {technology.description}
              </p>

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

              <button
                onClick={() => addToStack(technology)}
                className="mt-3 w-full rounded bg-slate-950 py-2 text-[8px] font-medium text-white"
              >
                Add to Stack
              </button>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-lg border border-gray-100 bg-white p-3 shadow-sm">
          <h3 className="text-xs font-semibold text-slate-900">
            Your Stack
          </h3>

          <p className="mt-1 text-[8px] text-gray-400">
            {selectedTechnologies.length === 0
              ? "No technologies selected yet."
              : `${selectedTechnologies.length} technologies selected`}
          </p>

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
                  <div className="flex h-6 w-6 items-center justify-center text-base">
                    {technology.icon}
                  </div>

                  <div>
                    <p className="text-[9px] font-medium text-slate-900">
                      {technology.name}
                    </p>

                    <p className="text-[7px] text-gray-400">
                      {technology.category}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromStack(technology.name)}
                    className="ml-auto text-[8px] text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;