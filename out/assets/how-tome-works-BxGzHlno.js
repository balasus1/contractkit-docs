var e={frontmatter:{title:`How Tome Works`,description:`Understand the architecture behind Tome — from Markdown files to a running documentation site.`,icon:`lightbulb`,hidden:!1,toc:!0,draft:!1},html:`<h1 id="how-tome-works"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#how-tome-works"><span class="icon icon-link"></span></a>How Tome Works</h1>
<p>Tome turns a folder of Markdown files into a single-page application. Here is how.</p>
<h2 id="the-pipeline"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#the-pipeline"><span class="icon icon-link"></span></a>The pipeline</h2>
<ol>
<li><strong>You write Markdown</strong> — <code>.md</code> and <code>.mdx</code> files in the <code>pages/</code> directory.</li>
<li><strong>Tome reads your config</strong> — <code>tome.config.js</code> defines navigation, theme, and site metadata.</li>
<li><strong>Vite builds the app</strong> — Tome's Vite plugin transforms your content into React components at build time.</li>
<li><strong>The theme renders it</strong> — The shell component handles layout, sidebar, search, and navigation.</li>
<li><strong>Static output</strong> — <code>tome build</code> produces static HTML, CSS, and JS in the <code>out/</code> directory.</li>
</ol>
<h2 id="key-pieces"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#key-pieces"><span class="icon icon-link"></span></a>Key pieces</h2>
<table>
<thead>
<tr>
<th>Package</th>
<th>Role</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>@tomehq/cli</code></td>
<td>CLI commands — <code>init</code>, <code>dev</code>, <code>build</code>, <code>deploy</code></td>
</tr>
<tr>
<td><code>@tomehq/core</code></td>
<td>Config loading, routing, Vite plugin, markdown processing</td>
</tr>
<tr>
<td><code>@tomehq/theme</code></td>
<td>UI shell, sidebar, search, dark mode, presets</td>
</tr>
<tr>
<td><code>@tomehq/components</code></td>
<td>MDX components — Callout, Tabs, Card, Steps, etc.</td>
</tr>
</tbody>
</table>
<h2 id="dev-vs-build"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#dev-vs-build"><span class="icon icon-link"></span></a>Dev vs build</h2>
<p>In <strong>development</strong>, Tome runs a Vite dev server with hot module replacement. Edit a file, save, and the browser updates instantly.</p>
<p>In <strong>production</strong>, <code>tome build</code> pre-renders all routes to static HTML with client-side hydration. The output works on any static host — no server required.</p>
<h2 id="agent-friendly-output"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#agent-friendly-output"><span class="icon icon-link"></span></a>Agent-friendly output</h2>
<p>Every build automatically generates:</p>
<ul>
<li><code>llms.txt</code> — Structured content for LLMs</li>
<li><code>search.json</code> — Full-text search index</li>
<li><code>mcp.json</code> — MCP server configuration</li>
<li><code>robots.txt</code> — Crawler directives</li>
<li>JSON-LD schema markup in every page</li>
</ul>`,headings:[{depth:2,text:`The pipeline`,id:`the-pipeline`},{depth:2,text:`Key pieces`,id:`key-pieces`},{depth:2,text:`Dev vs build`,id:`dev-vs-build`},{depth:2,text:`Agent-friendly output`,id:`agent-friendly-output`}],raw:"\n# How Tome Works\n\nTome turns a folder of Markdown files into a single-page application. Here is how.\n\n## The pipeline\n\n1. **You write Markdown** — `.md` and `.mdx` files in the `pages/` directory.\n2. **Tome reads your config** — `tome.config.js` defines navigation, theme, and site metadata.\n3. **Vite builds the app** — Tome's Vite plugin transforms your content into React components at build time.\n4. **The theme renders it** — The shell component handles layout, sidebar, search, and navigation.\n5. **Static output** — `tome build` produces static HTML, CSS, and JS in the `out/` directory.\n\n## Key pieces\n\n| Package | Role |\n|---------|------|\n| `@tomehq/cli` | CLI commands — `init`, `dev`, `build`, `deploy` |\n| `@tomehq/core` | Config loading, routing, Vite plugin, markdown processing |\n| `@tomehq/theme` | UI shell, sidebar, search, dark mode, presets |\n| `@tomehq/components` | MDX components — Callout, Tabs, Card, Steps, etc. |\n\n## Dev vs build\n\nIn **development**, Tome runs a Vite dev server with hot module replacement. Edit a file, save, and the browser updates instantly.\n\nIn **production**, `tome build` pre-renders all routes to static HTML with client-side hydration. The output works on any static host — no server required.\n\n## Agent-friendly output\n\nEvery build automatically generates:\n\n- `llms.txt` — Structured content for LLMs\n- `search.json` — Full-text search index\n- `mcp.json` — MCP server configuration\n- `robots.txt` — Crawler directives\n- JSON-LD schema markup in every page\n"};export{e as default};