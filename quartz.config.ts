import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Chandra Polepeddi",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "iamchandra.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Nunito Sans",
        body: "Nunito Sans",
        code: "IBM Plex Mono",
      },
      // colors: {
      //   lightMode: {
      //     light: "#FCF5E4",
      //     lightgray: "#E4DCC8",
      //     gray: "#b8b8b8",
      //     darkgray: "#4e4e4e",
      //     dark: "#265126", // Primary
      //     secondary: "#284b63", //284b63
      //     tertiary: "#CA5D55",  //197D27
      //     highlight: "rgba(143, 159, 169, 0.15)",
      //     textHighlight: "#fff23688",
      //   },
      //   darkMode: {
      //     light: "#202020",
      //     lightgray: "#3A342E",
      //     gray: "#464646",
      //     darkgray: "#BDB19B",
      //     dark: "#C5B8A1", //ebebec
      //     secondary: "#94867A", //7b97aa
      //     tertiary: "#CA5D55", //84a59d
      //     highlight: "rgba(143, 159, 169, 0.15)",
      //     textHighlight: "#b3aa0288",
      //   },
      // },
      // Brown --------------------------------------------------------------
      // colors: {
      //   lightMode: {
      //     light: "#f7f2e9",        // warm beige
      //     lightgray: "#e2d8c7",    // soft sand
      //     gray: "#b89f84",         // medium warm brown-gray
      //     darkgray: "#6b5643",     // walnut brown
      //     dark: "#3e2f23",         // deep brown
      //     secondary: "#8c5e3c",    // warm caramel accent
      //     tertiary: "#c7a27a",     // muted tan accent
      //     highlight: "rgba(150, 120, 90, 0.18)", // soft brown highlight
      //     textHighlight: "#ffebc288",            // pale amber text highlight
      //   },
      //   darkMode: {
      //     light: "#2a1f18",        // espresso brown
      //     lightgray: "#4a3b31",    // cocoa brown
      //     gray: "#7a6657",         // muted mocha
      //     darkgray: "#d8c7b8",     // light warm beige-gray
      //     dark: "#f0e7dd",         // near‑white warm tone
      //     secondary: "#b58a68",    // warm latte accent
      //     tertiary: "#d3b89a",     // soft sand accent
      //     highlight: "rgba(200, 170, 140, 0.18)", // warm highlight
      //     textHighlight: "#e6cfa788",            // golden‑tan text highlight
      //   },
      // }
      // GREEN ------------------------------------------------------------
      // colors: {
      //   lightMode: {
      //     light: "#f4f6f2",        // soft off‑white with a green tint
      //     lightgray: "#dfe5df",    // pale sage mist
      //     gray: "#a8b5a6",         // muted sage-gray
      //     darkgray: "#5f6d5f",     // deep herbal green-gray
      //     dark: "#2f3a2f",         // forest‑sage dark
      //     secondary: "#7d9c82",    // classic sage green
      //     tertiary: "#b7c8b5",     // light muted sage
      //     highlight: "rgba(125, 156, 130, 0.18)", // soft sage highlight
      //     textHighlight: "#d9f2d088",            // pale green-yellow highlight
      //   },

      //   darkMode: {
      //     light: "#1f2621",        // deep moss green
      //     lightgray: "#3b4a3f",    // muted woodland green
      //     gray: "#6f8373",         // soft sage-gray midtone
      //     darkgray: "#d7e2d6",     // light sage-beige for contrast
      //     dark: "#eef3ed",         // warm near‑white with green tint
      //     secondary: "#9bb8a0",    // gentle sage accent
      //     tertiary: "#c7d6c5",     // pale herbal green
      //     highlight: "rgba(155, 184, 160, 0.18)", // warm sage highlight
      //     textHighlight: "#cfeac688",            // soft greenish highlight
      //   },
      // }
      // Solarized ---------------------------------------------------------
      // colors: {
      //   lightMode: {
      //     light: "#fdf6e3",        // Solarized base3 — warm cream background
      //     lightgray: "#eee8d5",    // base2 — subtle beige
      //     gray: "#93a1a1",         // base1 — cool gray-green
      //     darkgray: "#586e75",     // base01 — muted blue-gray
      //     dark: "#073642",         // base02 — deep cyan-gray
      //     secondary: "#268bd2",    // blue — primary accent
      //     tertiary: "#2aa198",     // cyan — secondary accent
      //     highlight: "rgba(38, 139, 210, 0.15)", // soft blue highlight
      //     textHighlight: "#b5890088",            // yellow highlight
      //   },

      //   darkMode: {
      //     light: "#002b36",        // base03 — deep teal background
      //     lightgray: "#073642",    // base02 — dark cyan-gray
      //     gray: "#586e75",         // base01 — muted blue-gray
      //     darkgray: "#93a1a1",     // base1 — light gray-green
      //     dark: "#fdf6e3",         // base3 — warm near-white
      //     secondary: "#268bd2",    // blue — consistent accent
      //     tertiary: "#2aa198",     // cyan — consistent accent
      //     highlight: "rgba(42, 161, 152, 0.18)", // cyan highlight
      //     textHighlight: "#b5890088",            // yellow highlight
      //   },
      // }
      // Solarized Modern --------------------------------------------------
      // colors: {
      //   lightMode: {
      //     light: "#fdf6e3",        // Solarized base3 — warm cream
      //     lightgray: "#eee8d5",    // base2 — soft beige
      //     gray: "#93a1a1",         // base1 — cool gray-green
      //     darkgray: "#586e75",     // base01 — muted blue-gray
      //     dark: "#073642",         // base02 — deep cyan-gray

      //     // Modern accents
      //     secondary: "#5b8def",    // modern blue (GitHub/Nord inspired)
      //     tertiary: "#8bd5ca",     // soft aqua (Catppuccin-inspired)
      //     highlight: "rgba(91, 141, 239, 0.15)", // blue highlight
      //     textHighlight: "#ffd76e88",            // warm modern yellow
      //   },

      //   darkMode: {
      //     light: "#002b36",        // base03 — deep teal
      //     lightgray: "#073642",    // base02 — dark cyan-gray
      //     gray: "#586e75",         // base01 — muted blue-gray
      //     darkgray: "#93a1a1",     // base1 — light gray-green
      //     dark: "#fdf6e3",         // base3 — warm near-white

      //     // Modern accents (same family, slightly brighter for dark mode)
      //     secondary: "#7aa2f7",    // modern bright blue
      //     tertiary: "#a6e3d0",     // soft mint-aqua
      //     highlight: "rgba(122, 162, 247, 0.18)", // blue highlight
      //     textHighlight: "#ffe08a88",            // warm yellow highlight
      //   },
      // },
      // Obsidian Typewriter theme (similar)
      colors: {
        lightMode: {
          light: "#fdfaf6",        // warm parchment background
          lightgray: "#eae3dc",    // soft ivory-gray
          gray: "#b8a89c",         // muted taupe
          darkgray: "#7a6a5f",     // warm brown-gray
          dark: "#3f322a",         // deep espresso
          secondary: "#a67c52",    // classic typewriter brown
          tertiary: "#c4a484",     // faded sepia accent
          highlight: "rgba(166, 124, 82, 0.15)", // soft brown highlight
          textHighlight: "#ffe8c088",            // warm amber text highlight
        },
        darkMode: {
          light: "#1e1a17",        // deep brown-black
          lightgray: "#3a322c",    // muted cocoa
          gray: "#6e5c50",         // soft mocha
          darkgray: "#d8c8b8",     // light sepia-gray
          dark: "#f2d1a6ff",         // warm parchment for contrast
          secondary: "#c49a6c",    // warm tan accent
          tertiary: "#e2cbb3",     // soft faded beige
          highlight: "rgba(196, 154, 108, 0.18)", // warm tan highlight
          textHighlight: "#ffe8c088",            // amber highlight
        },        
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
