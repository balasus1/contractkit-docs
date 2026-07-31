var e={frontmatter:{title:`Welcome`,description:`Documentation for contractkit-docs, powered by Tome.`,hidden:!1,toc:!0,draft:!1},html:`<h1 id="contractkit-docs"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#contractkit-docs"><span class="icon icon-link"></span></a>contractkit-docs</h1>
<p>Welcome to your documentation site. This project was scaffolded with <a href="https://tome.center">Tome</a> — write in Markdown, ship beautiful docs.</p>
<h2 id="quick-start"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#quick-start"><span class="icon icon-link"></span></a>Quick Start</h2>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">npm</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> run</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> dev</span><span style="color:#6A737D;--shiki-dark:#6A737D">       # Start dev server at localhost:3000</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">npm</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> run</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> build</span><span style="color:#6A737D;--shiki-dark:#6A737D">     # Build static site to out/</span></span></code></pre>
<h2 id="project-structure"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#project-structure"><span class="icon icon-link"></span></a>Project Structure</h2>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span>contractkit-docs/</span></span>
<span class="line"><span>├── tome.config.js         # Site configuration</span></span>
<span class="line"><span>├── pages/                 # Documentation pages</span></span>
<span class="line"><span>│   ├── index.md           # This page</span></span>
<span class="line"><span>│   ├── tutorials/         # Step-by-step lessons</span></span>
<span class="line"><span>│   ├── guides/            # Task-oriented how-tos</span></span>
<span class="line"><span>│   ├── reference/         # Technical reference</span></span>
<span class="line"><span>│   └── concepts/          # Explanations and architecture</span></span>
<span class="line"><span>├── public/                # Static assets (images, fonts)</span></span>
<span class="line"><span>└── package.json</span></span></code></pre>
<p>This site follows the <a href="https://diataxis.fr">Diataxis</a> documentation framework — four categories that serve different reader needs:</p>
<table>
<thead>
<tr>
<th>Category</th>
<th>Purpose</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Tutorials</strong></td>
<td>Learning-oriented. Walk a beginner through a task.</td>
<td>"Build your first docs site"</td>
</tr>
<tr>
<td><strong>Guides</strong></td>
<td>Task-oriented. Solve a specific problem.</td>
<td>"Add a callout component"</td>
</tr>
<tr>
<td><strong>Reference</strong></td>
<td>Information-oriented. Describe the machinery.</td>
<td>"Configuration options"</td>
</tr>
<tr>
<td><strong>Concepts</strong></td>
<td>Understanding-oriented. Explain how things work.</td>
<td>"How file routing works"</td>
</tr>
</tbody>
</table>
<h2 id="next-steps"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#next-steps"><span class="icon icon-link"></span></a>Next Steps</h2>
<ul>
<li><strong><a href="/tutorials/getting-started">Getting Started</a></strong> — Build and customize your first page.</li>
<li><strong><a href="/guides/components">Components Guide</a></strong> — Add interactive elements to your docs.</li>
<li><strong><a href="/reference/config">Configuration Reference</a></strong> — Every option in <code>tome.config.js</code>.</li>
</ul>`,headings:[{depth:2,text:`Quick Start`,id:`quick-start`},{depth:2,text:`Project Structure`,id:`project-structure`},{depth:2,text:`Next Steps`,id:`next-steps`}],raw:`
# contractkit-docs

Welcome to your documentation site. This project was scaffolded with [Tome](https://tome.center) — write in Markdown, ship beautiful docs.

## Quick Start

\`\`\`bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Build static site to out/
\`\`\`

## Project Structure

\`\`\`text
contractkit-docs/
├── tome.config.js         # Site configuration
├── pages/                 # Documentation pages
│   ├── index.md           # This page
│   ├── tutorials/         # Step-by-step lessons
│   ├── guides/            # Task-oriented how-tos
│   ├── reference/         # Technical reference
│   └── concepts/          # Explanations and architecture
├── public/                # Static assets (images, fonts)
└── package.json
\`\`\`

This site follows the [Diataxis](https://diataxis.fr) documentation framework — four categories that serve different reader needs:

| Category | Purpose | Example |
|----------|---------|---------|
| **Tutorials** | Learning-oriented. Walk a beginner through a task. | "Build your first docs site" |
| **Guides** | Task-oriented. Solve a specific problem. | "Add a callout component" |
| **Reference** | Information-oriented. Describe the machinery. | "Configuration options" |
| **Concepts** | Understanding-oriented. Explain how things work. | "How file routing works" |

## Next Steps

- **[Getting Started](/tutorials/getting-started)** — Build and customize your first page.
- **[Components Guide](/guides/components)** — Add interactive elements to your docs.
- **[Configuration Reference](/reference/config)** — Every option in \`tome.config.js\`.
`};export{e as default};