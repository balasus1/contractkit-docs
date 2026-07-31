/** @type {import('@tomehq/core').TomeConfig} */
export default {
  name: "ContractKit",
  description: "Design, review, and generate API contracts from a single source of truth.",
  theme: {
    preset: "amber",
    mode: "auto",
  },
  navigation: [
    {
      group: "Overview",
      pages: ["index"],
    },
    {
      group: "Tutorials",
      pages: ["tutorials/getting-started"],
    },
    {
      group: "Guides",
      pages: ["guides/roles-and-access"],
    },
    {
      group: "Concepts",
      pages: ["concepts/core-concepts"],
    },
  ],
  socialLinks: [
    { platform: "github", url: "https://github.com/balasus1/contractkit" },
  ],
};
