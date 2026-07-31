var e={frontmatter:{title:`CLI Reference`,description:`Every command and flag available in the Tome CLI.`,icon:`terminal`,hidden:!1,toc:!0,draft:!1},html:`<h1 id="cli-reference"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#cli-reference"><span class="icon icon-link"></span></a>CLI Reference</h1>
<h2 id="tome-init"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#tome-init"><span class="icon icon-link"></span></a>tome init</h2>
<p>Create a new documentation project.</p>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">tome</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> init</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [name]</span></span></code></pre>
<table>
<thead>
<tr>
<th>Option</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>-t, --template &lt;name&gt;</code></td>
<td>Starter template (default: <code>"default"</code>)</td>
</tr>
</tbody>
</table>
<h2 id="tome-dev"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#tome-dev"><span class="icon icon-link"></span></a>tome dev</h2>
<p>Start the development server with hot reloading.</p>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">tome</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> dev</span></span></code></pre>
<table>
<thead>
<tr>
<th>Option</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>-p, --port &lt;number&gt;</code></td>
<td>Port number (default: <code>3000</code>)</td>
</tr>
<tr>
<td><code>--host</code></td>
<td>Expose to network</td>
</tr>
</tbody>
</table>
<h2 id="tome-build"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#tome-build"><span class="icon icon-link"></span></a>tome build</h2>
<p>Build the site for production.</p>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">tome</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> build</span></span></code></pre>
<p>Outputs static files to the <code>out/</code> directory.</p>
<h2 id="tome-deploy"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#tome-deploy"><span class="icon icon-link"></span></a>tome deploy</h2>
<p>Deploy to Tome Cloud.</p>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">tome</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> deploy</span></span></code></pre>
<table>
<thead>
<tr>
<th>Option</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>--preview</code></td>
<td>Create a preview deployment</td>
</tr>
</tbody>
</table>
<p>Requires <code>TOME_TOKEN</code> environment variable or <code>tome login</code>.</p>`,headings:[{depth:2,text:`tome init`,id:`tome-init`},{depth:2,text:`tome dev`,id:`tome-dev`},{depth:2,text:`tome build`,id:`tome-build`},{depth:2,text:`tome deploy`,id:`tome-deploy`}],raw:`
# CLI Reference

## tome init

Create a new documentation project.

\`\`\`bash
tome init [name]
\`\`\`

| Option | Description |
|--------|-------------|
| \`-t, --template <name>\` | Starter template (default: \`"default"\`) |

## tome dev

Start the development server with hot reloading.

\`\`\`bash
tome dev
\`\`\`

| Option | Description |
|--------|-------------|
| \`-p, --port <number>\` | Port number (default: \`3000\`) |
| \`--host\` | Expose to network |

## tome build

Build the site for production.

\`\`\`bash
tome build
\`\`\`

Outputs static files to the \`out/\` directory.

## tome deploy

Deploy to Tome Cloud.

\`\`\`bash
tome deploy
\`\`\`

| Option | Description |
|--------|-------------|
| \`--preview\` | Create a preview deployment |

Requires \`TOME_TOKEN\` environment variable or \`tome login\`.
`};export{e as default};