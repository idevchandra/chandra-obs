# Quartz v4

## How to build and run this website

1. `npx quartz build --serve`
2. Open `http://localhost:8080/` in browser

## How to customize this website?

### Disable Tags Cloud

- `quartz.layout.ts` 
- Comment `Component.Graph()`

### The Explorer visual changes..

... such as
- bullets for article items
- background color for the selected item

### To remove the Footer from the website
- Open `Footer.tsx`
- Comment or remove the body of the method `const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps)`

### To change the bread crumbs arrow
- Open `Breadcrumbs.tsx`
- Change the `spacerSymbol` character



## Detailed instructions:



> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.
Quartz v4 features a from-the-ground rewrite focusing on end-user extensibility and ease-of-use.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>
