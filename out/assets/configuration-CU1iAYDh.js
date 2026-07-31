var e={frontmatter:{title:`Customizing Your Site`,description:`Change your site name, theme, colors, and navigation layout.`,icon:`settings`,hidden:!1,toc:!0,draft:!1},html:`<h1 id="customizing-your-site"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#customizing-your-site"><span class="icon icon-link"></span></a>Customizing Your Site</h1>
<p>All configuration lives in <code>tome.config.js</code> at the root of your project.</p>
<h2 id="change-the-site-name"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#change-the-site-name"><span class="icon icon-link"></span></a>Change the site name</h2>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">export</span><span style="color:#D73A49;--shiki-dark:#F97583"> default</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  name: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"My Project"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">};</span></span></code></pre>
<p>The name appears in the sidebar header and browser tab.</p>
<h2 id="switch-themes"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#switch-themes"><span class="icon icon-link"></span></a>Switch themes</h2>
<p>Tome ships with two presets:</p>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">theme</span><span style="color:#24292E;--shiki-dark:#E1E4E8">: {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">  preset</span><span style="color:#24292E;--shiki-dark:#E1E4E8">: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"amber"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">,      </span><span style="color:#6A737D;--shiki-dark:#6A737D">// Warm, approachable (default)</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">  // preset: "editorial", // Clean, typographic</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">  mode</span><span style="color:#24292E;--shiki-dark:#E1E4E8">: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"auto"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">,          </span><span style="color:#6A737D;--shiki-dark:#6A737D">// "light", "dark", or "auto"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">},</span></span></code></pre>
<h2 id="custom-accent-color"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#custom-accent-color"><span class="icon icon-link"></span></a>Custom accent color</h2>
<p>Override the default accent with any hex color:</p>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">theme</span><span style="color:#24292E;--shiki-dark:#E1E4E8">: {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">  preset</span><span style="color:#24292E;--shiki-dark:#E1E4E8">: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"amber"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">  accent</span><span style="color:#24292E;--shiki-dark:#E1E4E8">: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"#3b82f6"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">,  </span><span style="color:#6A737D;--shiki-dark:#6A737D">// Blue accent</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">  mode</span><span style="color:#24292E;--shiki-dark:#E1E4E8">: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"auto"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">},</span></span></code></pre>
<h2 id="organize-navigation"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#organize-navigation"><span class="icon icon-link"></span></a>Organize navigation</h2>
<p>The sidebar is defined by the <code>navigation</code> array. Each group has a label and a list of page IDs:</p>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">navigation</span><span style="color:#24292E;--shiki-dark:#E1E4E8">: [</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    group: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"Getting Started"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    pages: [</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"index"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"tutorials/getting-started"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">],</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  },</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    group: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"API"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    pages: [</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"reference/endpoints"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"reference/auth"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">],</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  },</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">],</span></span></code></pre>
<p>Page IDs are file paths relative to <code>pages/</code>, without the extension.</p>
<h2 id="add-social-links"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#add-social-links"><span class="icon icon-link"></span></a>Add social links</h2>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">socialLinks</span><span style="color:#24292E;--shiki-dark:#E1E4E8">: [</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  { platform: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"github"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, url: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"https://github.com/your-org/your-repo"</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> },</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  { platform: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"discord"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, url: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"https://discord.gg/your-server"</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> },</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  { platform: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"twitter"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, url: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"https://x.com/your-handle"</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> },</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">],</span></span></code></pre>
<p>See the <a href="/reference/config">Configuration Reference</a> for every available option.</p>`,headings:[{depth:2,text:`Change the site name`,id:`change-the-site-name`},{depth:2,text:`Switch themes`,id:`switch-themes`},{depth:2,text:`Custom accent color`,id:`custom-accent-color`},{depth:2,text:`Organize navigation`,id:`organize-navigation`},{depth:2,text:`Add social links`,id:`add-social-links`}],raw:`
# Customizing Your Site

All configuration lives in \`tome.config.js\` at the root of your project.

## Change the site name

\`\`\`javascript
export default {
  name: "My Project",
};
\`\`\`

The name appears in the sidebar header and browser tab.

## Switch themes

Tome ships with two presets:

\`\`\`javascript
theme: {
  preset: "amber",      // Warm, approachable (default)
  // preset: "editorial", // Clean, typographic
  mode: "auto",          // "light", "dark", or "auto"
},
\`\`\`

## Custom accent color

Override the default accent with any hex color:

\`\`\`javascript
theme: {
  preset: "amber",
  accent: "#3b82f6",  // Blue accent
  mode: "auto",
},
\`\`\`

## Organize navigation

The sidebar is defined by the \`navigation\` array. Each group has a label and a list of page IDs:

\`\`\`javascript
navigation: [
  {
    group: "Getting Started",
    pages: ["index", "tutorials/getting-started"],
  },
  {
    group: "API",
    pages: ["reference/endpoints", "reference/auth"],
  },
],
\`\`\`

Page IDs are file paths relative to \`pages/\`, without the extension.

## Add social links

\`\`\`javascript
socialLinks: [
  { platform: "github", url: "https://github.com/your-org/your-repo" },
  { platform: "discord", url: "https://discord.gg/your-server" },
  { platform: "twitter", url: "https://x.com/your-handle" },
],
\`\`\`

See the [Configuration Reference](/reference/config) for every available option.
`};export{e as default};