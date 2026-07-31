var e={frontmatter:{title:`Component Reference`,description:`API reference for every built-in MDX component.`,icon:`box`,hidden:!1,toc:!0,draft:!1},html:`<h1 id="component-reference"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#component-reference"><span class="icon icon-link"></span></a>Component Reference</h1>
<p>All built-in components are available in <code>.mdx</code> files without imports.</p>
<h2 id="callout"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#callout"><span class="icon icon-link"></span></a>Callout</h2>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">&lt;</span><span style="color:#005CC5;--shiki-dark:#79B8FF">Callout</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> type</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"info"</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> title</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"Title"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  Content here.</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">&lt;/</span><span style="color:#005CC5;--shiki-dark:#79B8FF">Callout</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt;</span></span></code></pre>
<table>
<thead>
<tr>
<th>Prop</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>type</code></td>
<td><code>"info" | "tip" | "warning" | "danger"</code></td>
<td>Yes</td>
<td>Visual style</td>
</tr>
<tr>
<td><code>title</code></td>
<td><code>string</code></td>
<td>No</td>
<td>Header text</td>
</tr>
</tbody>
</table>
<h2 id="tabs"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#tabs"><span class="icon icon-link"></span></a>Tabs</h2>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">&lt;</span><span style="color:#005CC5;--shiki-dark:#79B8FF">Tabs</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> items</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8">{[</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"Tab 1"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"Tab 2"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">]}&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  &lt;</span><span style="color:#22863A;--shiki-dark:#85E89D">div</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt;Content for tab 1&lt;/</span><span style="color:#22863A;--shiki-dark:#85E89D">div</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  &lt;</span><span style="color:#22863A;--shiki-dark:#85E89D">div</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt;Content for tab 2&lt;/</span><span style="color:#22863A;--shiki-dark:#85E89D">div</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">&lt;/</span><span style="color:#005CC5;--shiki-dark:#79B8FF">Tabs</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt;</span></span></code></pre>
<table>
<thead>
<tr>
<th>Prop</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>items</code></td>
<td><code>string[]</code></td>
<td>Yes</td>
<td>Tab labels</td>
</tr>
</tbody>
</table>
<h2 id="card"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#card"><span class="icon icon-link"></span></a>Card</h2>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">&lt;</span><span style="color:#005CC5;--shiki-dark:#79B8FF">Card</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> title</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"Title"</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> icon</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"🚀"</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> href</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"/link"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  Description text.</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">&lt;/</span><span style="color:#005CC5;--shiki-dark:#79B8FF">Card</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt;</span></span></code></pre>
<table>
<thead>
<tr>
<th>Prop</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>title</code></td>
<td><code>string</code></td>
<td>Yes</td>
<td>Card heading</td>
</tr>
<tr>
<td><code>icon</code></td>
<td><code>string</code></td>
<td>No</td>
<td>Emoji or icon</td>
</tr>
<tr>
<td><code>href</code></td>
<td><code>string</code></td>
<td>No</td>
<td>Link target</td>
</tr>
</tbody>
</table>
<h2 id="cardgroup"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#cardgroup"><span class="icon icon-link"></span></a>CardGroup</h2>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">&lt;</span><span style="color:#005CC5;--shiki-dark:#79B8FF">CardGroup</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> cols</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8">{</span><span style="color:#005CC5;--shiki-dark:#79B8FF">2</span><span style="color:#24292E;--shiki-dark:#E1E4E8">}&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  &lt;</span><span style="color:#005CC5;--shiki-dark:#79B8FF">Card</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> title</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"A"</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  &lt;</span><span style="color:#005CC5;--shiki-dark:#79B8FF">Card</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> title</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"B"</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">&lt;/</span><span style="color:#005CC5;--shiki-dark:#79B8FF">CardGroup</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt;</span></span></code></pre>
<table>
<thead>
<tr>
<th>Prop</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>cols</code></td>
<td><code>number</code></td>
<td>No</td>
<td>Column count (default: 3)</td>
</tr>
</tbody>
</table>
<h2 id="steps"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#steps"><span class="icon icon-link"></span></a>Steps</h2>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">&lt;</span><span style="color:#005CC5;--shiki-dark:#79B8FF">Steps</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  &lt;</span><span style="color:#22863A;--shiki-dark:#85E89D">div</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt;**Step 1** — Description&lt;/</span><span style="color:#22863A;--shiki-dark:#85E89D">div</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  &lt;</span><span style="color:#22863A;--shiki-dark:#85E89D">div</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt;**Step 2** — Description&lt;/</span><span style="color:#22863A;--shiki-dark:#85E89D">div</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">&lt;/</span><span style="color:#005CC5;--shiki-dark:#79B8FF">Steps</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt;</span></span></code></pre>
<p>Each direct child <code>&lt;div&gt;</code> becomes a numbered step.</p>
<h2 id="accordion"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#accordion"><span class="icon icon-link"></span></a>Accordion</h2>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">&lt;</span><span style="color:#005CC5;--shiki-dark:#79B8FF">Accordion</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> title</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"Question?"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  Answer content.</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">&lt;/</span><span style="color:#005CC5;--shiki-dark:#79B8FF">Accordion</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt;</span></span></code></pre>
<table>
<thead>
<tr>
<th>Prop</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>title</code></td>
<td><code>string</code></td>
<td>Yes</td>
<td>Toggle header</td>
</tr>
</tbody>
</table>`,headings:[{depth:2,text:`Callout`,id:`callout`},{depth:2,text:`Tabs`,id:`tabs`},{depth:2,text:`Card`,id:`card`},{depth:2,text:`CardGroup`,id:`cardgroup`},{depth:2,text:`Steps`,id:`steps`},{depth:2,text:`Accordion`,id:`accordion`}],raw:`
# Component Reference

All built-in components are available in \`.mdx\` files without imports.

## Callout

\`\`\`jsx
<Callout type="info" title="Title">
  Content here.
</Callout>
\`\`\`

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| \`type\` | \`"info" \\| "tip" \\| "warning" \\| "danger"\` | Yes | Visual style |
| \`title\` | \`string\` | No | Header text |

## Tabs

\`\`\`jsx
<Tabs items={["Tab 1", "Tab 2"]}>
  <div>Content for tab 1</div>
  <div>Content for tab 2</div>
</Tabs>
\`\`\`

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| \`items\` | \`string[]\` | Yes | Tab labels |

## Card

\`\`\`jsx
<Card title="Title" icon="🚀" href="/link">
  Description text.
</Card>
\`\`\`

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| \`title\` | \`string\` | Yes | Card heading |
| \`icon\` | \`string\` | No | Emoji or icon |
| \`href\` | \`string\` | No | Link target |

## CardGroup

\`\`\`jsx
<CardGroup cols={2}>
  <Card title="A" />
  <Card title="B" />
</CardGroup>
\`\`\`

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| \`cols\` | \`number\` | No | Column count (default: 3) |

## Steps

\`\`\`jsx
<Steps>
  <div>**Step 1** — Description</div>
  <div>**Step 2** — Description</div>
</Steps>
\`\`\`

Each direct child \`<div>\` becomes a numbered step.

## Accordion

\`\`\`jsx
<Accordion title="Question?">
  Answer content.
</Accordion>
\`\`\`

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| \`title\` | \`string\` | Yes | Toggle header |
`};export{e as default};