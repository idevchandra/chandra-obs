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
      provider: "google",
      tagId: 'G-EFZDY44T5B'
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
