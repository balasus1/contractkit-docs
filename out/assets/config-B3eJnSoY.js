var e={frontmatter:{title:`Configuration`,description:`Complete reference for every option in tome.config.js.`,icon:`file-cog`,hidden:!1,toc:!0,draft:!1},html:`<h1 id="configuration-reference"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#configuration-reference"><span class="icon icon-link"></span></a>Configuration Reference</h1>
<p>All options for <code>tome.config.js</code>.</p>
<h2 id="top-level-options"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#top-level-options"><span class="icon icon-link"></span></a>Top-level options</h2>
<table>
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>name</code></td>
<td><code>string</code></td>
<td><code>"My Docs"</code></td>
<td>Site name shown in sidebar and title</td>
</tr>
<tr>
<td><code>description</code></td>
<td><code>string</code></td>
<td>—</td>
<td>Site description for SEO</td>
</tr>
<tr>
<td><code>logo</code></td>
<td><code>string</code></td>
<td>—</td>
<td>Path to logo image</td>
</tr>
<tr>
<td><code>favicon</code></td>
<td><code>string</code></td>
<td>—</td>
<td>Path to favicon</td>
</tr>
<tr>
<td><code>navigation</code></td>
<td><code>array</code></td>
<td><code>[]</code></td>
<td>Sidebar navigation groups</td>
</tr>
<tr>
<td><code>socialLinks</code></td>
<td><code>array</code></td>
<td><code>[]</code></td>
<td>Social links in the header</td>
</tr>
</tbody>
</table>
<h2 id="theme"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#theme"><span class="icon icon-link"></span></a>theme</h2>
<table>
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>preset</code></td>
<td><code>"amber" | "editorial"</code></td>
<td><code>"amber"</code></td>
<td>Theme preset</td>
</tr>
<tr>
<td><code>accent</code></td>
<td><code>string</code></td>
<td>—</td>
<td>Custom accent color (hex)</td>
</tr>
<tr>
<td><code>mode</code></td>
<td><code>"light" | "dark" | "auto"</code></td>
<td><code>"auto"</code></td>
<td>Color mode</td>
</tr>
</tbody>
</table>
<h2 id="navigation"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#navigation"><span class="icon icon-link"></span></a>navigation</h2>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">navigation</span><span style="color:#24292E;--shiki-dark:#E1E4E8">: [</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    group: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"Section Name"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    pages: [</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"page-id"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"folder/page-id"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">],</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  },</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">],</span></span></code></pre>
<p>Page IDs are file paths relative to <code>pages/</code>, without the file extension.</p>
<h2 id="sociallinks"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#sociallinks"><span class="icon icon-link"></span></a>socialLinks</h2>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">socialLinks</span><span style="color:#24292E;--shiki-dark:#E1E4E8">: [</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  { platform: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"github"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, url: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"https://github.com/..."</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> },</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  { platform: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"twitter"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, url: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"https://x.com/..."</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> },</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  { platform: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"discord"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, url: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"https://discord.gg/..."</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> },</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  { platform: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"custom"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, url: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"https://..."</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, icon: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"mastodon"</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> },</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">],</span></span></code></pre>
<p>Supported platforms: <code>github</code>, <code>twitter</code>, <code>discord</code>, <code>linkedin</code>, <code>custom</code>.</p>`,headings:[{depth:2,text:`Top-level options`,id:`top-level-options`},{depth:2,text:`theme`,id:`theme`},{depth:2,text:`navigation`,id:`navigation`},{depth:2,text:`socialLinks`,id:`sociallinks`}],raw:'\n# Configuration Reference\n\nAll options for `tome.config.js`.\n\n## Top-level options\n\n| Option | Type | Default | Description |\n|--------|------|---------|-------------|\n| `name` | `string` | `"My Docs"` | Site name shown in sidebar and title |\n| `description` | `string` | — | Site description for SEO |\n| `logo` | `string` | — | Path to logo image |\n| `favicon` | `string` | — | Path to favicon |\n| `navigation` | `array` | `[]` | Sidebar navigation groups |\n| `socialLinks` | `array` | `[]` | Social links in the header |\n\n## theme\n\n| Option | Type | Default | Description |\n|--------|------|---------|-------------|\n| `preset` | `"amber" \\| "editorial"` | `"amber"` | Theme preset |\n| `accent` | `string` | — | Custom accent color (hex) |\n| `mode` | `"light" \\| "dark" \\| "auto"` | `"auto"` | Color mode |\n\n## navigation\n\n```javascript\nnavigation: [\n  {\n    group: "Section Name",\n    pages: ["page-id", "folder/page-id"],\n  },\n],\n```\n\nPage IDs are file paths relative to `pages/`, without the file extension.\n\n## socialLinks\n\n```javascript\nsocialLinks: [\n  { platform: "github", url: "https://github.com/..." },\n  { platform: "twitter", url: "https://x.com/..." },\n  { platform: "discord", url: "https://discord.gg/..." },\n  { platform: "custom", url: "https://...", icon: "mastodon" },\n],\n```\n\nSupported platforms: `github`, `twitter`, `discord`, `linkedin`, `custom`.\n'};export{e as default};