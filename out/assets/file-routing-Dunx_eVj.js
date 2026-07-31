var e={frontmatter:{title:`File Routing`,description:`How files in the pages directory map to URLs on your site.`,icon:`folder`,hidden:!1,toc:!0,draft:!1},html:`<h1 id="file-routing"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#file-routing"><span class="icon icon-link"></span></a>File Routing</h1>
<p>Tome uses file-system routing. Every <code>.md</code> or <code>.mdx</code> file in the <code>pages/</code> directory becomes a page.</p>
<h2 id="how-paths-map-to-urls"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#how-paths-map-to-urls"><span class="icon icon-link"></span></a>How paths map to URLs</h2>
<table>
<thead>
<tr>
<th>File</th>
<th>URL</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>pages/index.md</code></td>
<td><code>/</code></td>
</tr>
<tr>
<td><code>pages/quickstart.md</code></td>
<td><code>/quickstart</code></td>
</tr>
<tr>
<td><code>pages/guides/setup.md</code></td>
<td><code>/guides/setup</code></td>
</tr>
<tr>
<td><code>pages/reference/config.md</code></td>
<td><code>/reference/config</code></td>
</tr>
</tbody>
</table>
<h2 id="rules"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#rules"><span class="icon icon-link"></span></a>Rules</h2>
<ul>
<li><strong><code>index.md</code></strong> in any directory becomes the root of that path (<code>pages/guides/index.md</code> → <code>/guides</code>).</li>
<li><strong>Nested directories</strong> create nested URL paths.</li>
<li><strong>File extension</strong> is stripped — both <code>.md</code> and <code>.mdx</code> work the same way.</li>
<li><strong>Underscored files</strong> (e.g., <code>_draft.md</code>) are ignored.</li>
</ul>
<h2 id="navigation-vs-routing"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#navigation-vs-routing"><span class="icon icon-link"></span></a>Navigation vs routing</h2>
<p>File routing determines what URLs exist. The <code>navigation</code> array in <code>tome.config.js</code> determines what appears in the sidebar and in what order. Pages that exist but are not listed in navigation are still accessible by URL — they just do not appear in the sidebar.</p>
<h2 id="organizing-content"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#organizing-content"><span class="icon icon-link"></span></a>Organizing content</h2>
<p>We recommend the <a href="https://diataxis.fr">Diataxis</a> structure:</p>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span>pages/</span></span>
<span class="line"><span>├── index.md</span></span>
<span class="line"><span>├── tutorials/       # Learning-oriented</span></span>
<span class="line"><span>├── guides/          # Task-oriented</span></span>
<span class="line"><span>├── reference/       # Information-oriented</span></span>
<span class="line"><span>└── concepts/        # Understanding-oriented</span></span></code></pre>
<p>This gives your readers a clear mental model of where to find what they need.</p>`,headings:[{depth:2,text:`How paths map to URLs`,id:`how-paths-map-to-urls`},{depth:2,text:`Rules`,id:`rules`},{depth:2,text:`Navigation vs routing`,id:`navigation-vs-routing`},{depth:2,text:`Organizing content`,id:`organizing-content`}],raw:"\n# File Routing\n\nTome uses file-system routing. Every `.md` or `.mdx` file in the `pages/` directory becomes a page.\n\n## How paths map to URLs\n\n| File | URL |\n|------|-----|\n| `pages/index.md` | `/` |\n| `pages/quickstart.md` | `/quickstart` |\n| `pages/guides/setup.md` | `/guides/setup` |\n| `pages/reference/config.md` | `/reference/config` |\n\n## Rules\n\n- **`index.md`** in any directory becomes the root of that path (`pages/guides/index.md` → `/guides`).\n- **Nested directories** create nested URL paths.\n- **File extension** is stripped — both `.md` and `.mdx` work the same way.\n- **Underscored files** (e.g., `_draft.md`) are ignored.\n\n## Navigation vs routing\n\nFile routing determines what URLs exist. The `navigation` array in `tome.config.js` determines what appears in the sidebar and in what order. Pages that exist but are not listed in navigation are still accessible by URL — they just do not appear in the sidebar.\n\n## Organizing content\n\nWe recommend the [Diataxis](https://diataxis.fr) structure:\n\n```text\npages/\n├── index.md\n├── tutorials/       # Learning-oriented\n├── guides/          # Task-oriented\n├── reference/       # Information-oriented\n└── concepts/        # Understanding-oriented\n```\n\nThis gives your readers a clear mental model of where to find what they need.\n"};export{e as default};