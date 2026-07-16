import type { ImageMetadata } from "astro";
import inventoryMainDesktop from "../assets/screenshots/inventory/inventory-main-desktop.png";

export interface Project {
  slug: string;
  icon: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  tryLink?: string;
  codeLink?: string;
  screenshots?: ImageMetadata[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "testownik",
    icon: "✍️",
    title: "Testownik",
    description: "Web app for revising material before exams.",
    longDescription:
      "A flashcard-style revision app that helps you prepare for exams by quizzing you on questions and tracking your progress. Features include multiple question formats, progress tracking, and a clean, distraction-free interface built with Svelte. It replaces legacy Java apps used for this purpose at my university, with support the same question formats that they use",
    technologies: ["TypeScript", "Svelte"],
    tryLink: "https://matipolit.ovh/testownik",
    codeLink: "https://github.com/Matipolit/Testownik-svelte",
    featured: true,
  },
  {
    slug: "inventory",
    icon: "🥫",
    title: "Inventory",
    description: "Web app for managing household items.",
    longDescription:
      "A web application for tracking household items, and their quantities. It notifies the user when an item is running low. Built with Rust and Axum, it allows users to add, edit, and categorize items. Ideal for shared living spaces or personal home management.",
    technologies: ["Rust", "Axum"],
    codeLink: "https://github.com/Matipolit/Inventory",
    tryLink: "https://matipolit.ovh/inventory/web",
    featured: true,
    screenshots: [inventoryMainDesktop]
  },
  {
    slug: "planer",
    icon: "🏠",
    title: "Planer",
    description: "Web app for managing shared flats",
    longDescription:
      "A full-stack web application for coordinating household tasks, expenses, and schedules in shared flats. Built with Django, it handles user authentication, shared task lists, expense splitting, and a calendar view so everyone in the flat stays on the same page.",
    technologies: ["Python", "Django"],
    codeLink: "https://github.com/Matipolit/planer",
    featured: false,
  },
  {
    slug: "shut-the-box",
    icon: "⌨️",
    title: "Shut the box",
    description: "React & three.js logic game",
    longDescription:
      "A browser-based implementation of the classic 'Shut the Box' dice game. Features 3D dice rolling with three.js, smooth animations, and a responsive React UI. Roll the dice and flip down the corresponding numbered tiles to clear the board.",
    technologies: ["JavaScript", "React"],
    tryLink: "https://matipolit.ovh/shut-the-box",
    codeLink: "https://github.com/Matipolit/Shut-the-box",
    featured: false,
  },
  {
    slug: "co2-app",
    icon: "💡",
    title: "CO2 App",
    description: "Desktop App for displaying CO2 levels in my room",
    longDescription:
      "A Rust-based desktop application that reads data from a CO2 sensor and displays real-time air quality readings. Helps monitor ventilation needs by showing CO2 concentration, temperature, and humidity in an intuitive GUI.",
    technologies: ["Rust"],
    codeLink: "https://github.com/Matipolit/co2-app",
    featured: false,
  },
];
