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

export const technologies = [
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