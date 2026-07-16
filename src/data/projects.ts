import type { ImageMetadata } from "astro";
import inventoryMainDesktop from "../assets/screenshots/inventory/inventory-main-desktop.png";
import testownikMainDesktop from "../assets/screenshots/testownik/testownik-main-desktop.png";
import testownikTestDesktop from "../assets/screenshots/testownik/testownik-test-desktop.png";

export interface Project {
  slug: string;
  icon: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  tryLink?: string;
  codeLink?: string;
  images?: ImageMetadata[];
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
    images: [testownikMainDesktop, testownikTestDesktop]
  },
  {
    slug: "weather-station",
    icon: "🌤️",
    title: "Weather Station",
    description: "A weather station with a sensor and processing node for personal use.",
    longDescription:
      "A personal weather station that collects data from an ESP32 node with an SCD40 sensor and sends it via MQTT to a receiver program on a Raspberry Pi. The sensor node measures temperature, humidity, and pressure, while the processing node stores the data in InfluxDB, allowing the user to display it in Grafana. 100% Rust, on both the embedded and program side, with a shared JSON schema crate for easy communication.",
    technologies: ["Rust"],
    codeLink: "https://github.com/Matipolit/Air-quality-projet",
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
    images: [inventoryMainDesktop]
  },


];
