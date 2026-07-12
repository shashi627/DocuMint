import { defineConfig } from "vitepress";

export default defineConfig({
  title: "DocuMint",
  description: "Programming Languages Documentation By ChatGPT",
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    sidebar: {
      "/typescript": [
        {
          text: "TypeScript Basics",
          items: [
            { text: "Get Started", link: "/typescript/get-started" },
            { text: "What is Programming?", link: "/typescript/what-is-programming" },
            { text: "What is JavaScript?", link: "/typescript/what-is-javascript" },
            { text: "Why TypeScript?", link: "/typescript/why-typescript" },
            { text: "Setting Up TypeScript", link: "/typescript/setting-up-typescript" },
          ],
        },
      ],
    },
  },
});
