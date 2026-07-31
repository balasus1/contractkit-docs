var e={frontmatter:{title:`Getting Started`,description:`Build your first documentation page from scratch — from writing content to seeing it in the browser.`,icon:`rocket`,hidden:!1,toc:!0,draft:!1},html:`<h1 id="getting-started"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#getting-started"><span class="icon icon-link"></span></a>Getting Started</h1>
<p>This tutorial walks you through creating and customizing your first documentation page. By the end, you will have a working page with formatted content and navigation.</p>
<h2 id="prerequisites"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#prerequisites"><span class="icon icon-link"></span></a>Prerequisites</h2>
<ul>
<li>Node.js 20 or later (<a href="https://nodejs.org">download</a>)</li>
<li>A code editor (VS Code, Cursor, etc.)</li>
<li>A terminal</li>
</ul>
<h2 id="step-1-start-the-dev-server"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#step-1-start-the-dev-server"><span class="icon icon-link"></span></a>Step 1: Start the dev server</h2>
<p>If you haven't already, install dependencies and start the server:</p>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">cd</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> contractkit-docs</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">npm</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> install</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">npm</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> run</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> dev</span></span></code></pre>
<p>Open <a href="http://localhost:3000">http://localhost:3000</a>. You should see this documentation site.</p>
<h2 id="step-2-create-a-new-page"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#step-2-create-a-new-page"><span class="icon icon-link"></span></a>Step 2: Create a new page</h2>
<p>Create a new file at <code>pages/tutorials/my-first-page.md</code>:</p>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">---</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#85E89D">title</span><span style="color:#24292E;--shiki-dark:#E1E4E8">: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">My First Page</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#85E89D">description</span><span style="color:#24292E;--shiki-dark:#E1E4E8">: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">A page I created from scratch.</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold"># My First Page</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">This is my first documentation page. It supports </span><span style="color:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold">**bold**</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#24292E;--shiki-light-font-style:italic;--shiki-dark:#E1E4E8;--shiki-dark-font-style:italic">*italic*</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">\\\`</span><span style="color:#24292E;--shiki-dark:#E1E4E8">code</span><span style="color:#005CC5;--shiki-dark:#79B8FF">\\\`</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, and more.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold">## A section</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">Content is organized with headings. Each heading appears in the table of contents.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">-</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> Bullet lists work</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">-</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> So do numbered lists</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">-</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> And [</span><span style="color:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline">links</span><span style="color:#24292E;--shiki-dark:#E1E4E8">](</span><span style="color:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline">https://tome.center</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span></code></pre>
<p>Save the file. The browser reloads automatically.</p>
<h2 id="step-3-add-it-to-the-sidebar"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#step-3-add-it-to-the-sidebar"><span class="icon icon-link"></span></a>Step 3: Add it to the sidebar</h2>
<p>Open <code>tome.config.js</code> and add your page to the navigation:</p>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">{</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">  group</span><span style="color:#24292E;--shiki-dark:#E1E4E8">: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"Tutorials"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">  pages</span><span style="color:#24292E;--shiki-dark:#E1E4E8">: [</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"tutorials/getting-started"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"tutorials/my-first-page"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"tutorials/deploy"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">],</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">},</span></span></code></pre>
<p>The page ID is the file path relative to <code>pages/</code>, without the extension.</p>
<h2 id="step-4-add-frontmatter"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#step-4-add-frontmatter"><span class="icon icon-link"></span></a>Step 4: Add frontmatter</h2>
<p>Every page supports YAML frontmatter at the top:</p>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">---</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#85E89D">title</span><span style="color:#24292E;--shiki-dark:#E1E4E8">: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">My First Page</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#85E89D">description</span><span style="color:#24292E;--shiki-dark:#E1E4E8">: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">A page I created from scratch.</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#85E89D">icon</span><span style="color:#24292E;--shiki-dark:#E1E4E8">: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">book</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#85E89D">sidebarTitle</span><span style="color:#24292E;--shiki-dark:#E1E4E8">: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">First Page</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">---</span></span></code></pre>
<table>
<thead>
<tr>
<th>Field</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>title</code></td>
<td>Page title in browser tab and sidebar</td>
</tr>
<tr>
<td><code>description</code></td>
<td>Summary for search and SEO</td>
</tr>
<tr>
<td><code>icon</code></td>
<td>Icon next to the title in the sidebar</td>
</tr>
<tr>
<td><code>sidebarTitle</code></td>
<td>Override the sidebar label</td>
</tr>
<tr>
<td><code>hidden</code></td>
<td>Set to <code>true</code> to hide from sidebar</td>
</tr>
</tbody>
</table>
<h2 id="what-you-learned"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#what-you-learned"><span class="icon icon-link"></span></a>What you learned</h2>
<p>You created a Markdown page, added it to navigation, and configured frontmatter. Next, try adding <a href="/guides/components">interactive components</a> to your pages.</p>`,headings:[{depth:2,text:`Prerequisites`,id:`prerequisites`},{depth:2,text:`Step 1: Start the dev server`,id:`step-1-start-the-dev-server`},{depth:2,text:`Step 2: Create a new page`,id:`step-2-create-a-new-page`},{depth:2,text:`Step 3: Add it to the sidebar`,id:`step-3-add-it-to-the-sidebar`},{depth:2,text:`Step 4: Add frontmatter`,id:`step-4-add-frontmatter`},{depth:2,text:`What you learned`,id:`what-you-learned`}],raw:`
# Getting Started

This tutorial walks you through creating and customizing your first documentation page. By the end, you will have a working page with formatted content and navigation.

## Prerequisites

- Node.js 20 or later ([download](https://nodejs.org))
- A code editor (VS Code, Cursor, etc.)
- A terminal

## Step 1: Start the dev server

If you haven't already, install dependencies and start the server:

\`\`\`bash
cd contractkit-docs
npm install
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000). You should see this documentation site.

## Step 2: Create a new page

Create a new file at \`pages/tutorials/my-first-page.md\`:

\`\`\`markdown
---
title: My First Page
description: A page I created from scratch.
---

# My First Page

This is my first documentation page. It supports **bold**, *italic*, \\\`code\\\`, and more.

## A section

Content is organized with headings. Each heading appears in the table of contents.

- Bullet lists work
- So do numbered lists
- And [links](https://tome.center)
\`\`\`

Save the file. The browser reloads automatically.

## Step 3: Add it to the sidebar

Open \`tome.config.js\` and add your page to the navigation:

\`\`\`javascript
{
  group: "Tutorials",
  pages: ["tutorials/getting-started", "tutorials/my-first-page", "tutorials/deploy"],
},
\`\`\`

The page ID is the file path relative to \`pages/\`, without the extension.

## Step 4: Add frontmatter

Every page supports YAML frontmatter at the top:

\`\`\`markdown
---
title: My First Page
description: A page I created from scratch.
icon: book
sidebarTitle: First Page
---
\`\`\`

| Field | Description |
|-------|-------------|
| \`title\` | Page title in browser tab and sidebar |
| \`description\` | Summary for search and SEO |
| \`icon\` | Icon next to the title in the sidebar |
| \`sidebarTitle\` | Override the sidebar label |
| \`hidden\` | Set to \`true\` to hide from sidebar |

## What you learned

You created a Markdown page, added it to navigation, and configured frontmatter. Next, try adding [interactive components](/guides/components) to your pages.
`};export{e as default};