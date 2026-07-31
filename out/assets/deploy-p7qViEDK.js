var e={frontmatter:{title:`Deploy Your Site`,description:`Build your docs for production and deploy to any static hosting provider.`,icon:`globe`,hidden:!1,toc:!0,draft:!1},html:`<h1 id="deploy-your-site"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#deploy-your-site"><span class="icon icon-link"></span></a>Deploy Your Site</h1>
<p>Tome builds to static files that work on any hosting platform. This tutorial covers building and deploying.</p>
<h2 id="build-for-production"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#build-for-production"><span class="icon icon-link"></span></a>Build for production</h2>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">npm</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> run</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> build</span></span></code></pre>
<p>This outputs a static site to the <code>out/</code> directory.</p>
<h2 id="deploy-options"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#deploy-options"><span class="icon icon-link"></span></a>Deploy options</h2>
<h3 id="vercel"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#vercel"><span class="icon icon-link"></span></a>Vercel</h3>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">npx</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> vercel</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> deploy</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> ./out</span></span></code></pre>
<h3 id="netlify"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#netlify"><span class="icon icon-link"></span></a>Netlify</h3>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">npx</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> netlify</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> deploy</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> --dir=./out</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> --prod</span></span></code></pre>
<h3 id="cloudflare-pages"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#cloudflare-pages"><span class="icon icon-link"></span></a>Cloudflare Pages</h3>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">npx</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> wrangler</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> pages</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> deploy</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> ./out</span></span></code></pre>
<h3 id="tome-cloud"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#tome-cloud"><span class="icon icon-link"></span></a>Tome Cloud</h3>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">npm</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> run</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> deploy</span></span></code></pre>
<p>This uses <code>tome deploy</code> which uploads your site to Tome Cloud with hash-based deduplication.</p>
<h2 id="cicd"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#cicd"><span class="icon icon-link"></span></a>CI/CD</h2>
<p>This project includes a GitHub Actions workflow at <code>.github/workflows/deploy.yml</code> that automatically deploys on push to <code>main</code> and creates preview deployments for pull requests.</p>
<h2 id="what-you-learned"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#what-you-learned"><span class="icon icon-link"></span></a>What you learned</h2>
<p>You built your site to static files and deployed it. Your docs are now live.</p>`,headings:[{depth:2,text:`Build for production`,id:`build-for-production`},{depth:2,text:`Deploy options`,id:`deploy-options`},{depth:3,text:`Vercel`,id:`vercel`},{depth:3,text:`Netlify`,id:`netlify`},{depth:3,text:`Cloudflare Pages`,id:`cloudflare-pages`},{depth:3,text:`Tome Cloud`,id:`tome-cloud`},{depth:2,text:`CI/CD`,id:`cicd`},{depth:2,text:`What you learned`,id:`what-you-learned`}],raw:`
# Deploy Your Site

Tome builds to static files that work on any hosting platform. This tutorial covers building and deploying.

## Build for production

\`\`\`bash
npm run build
\`\`\`

This outputs a static site to the \`out/\` directory.

## Deploy options

### Vercel

\`\`\`bash
npx vercel deploy ./out
\`\`\`

### Netlify

\`\`\`bash
npx netlify deploy --dir=./out --prod
\`\`\`

### Cloudflare Pages

\`\`\`bash
npx wrangler pages deploy ./out
\`\`\`

### Tome Cloud

\`\`\`bash
npm run deploy
\`\`\`

This uses \`tome deploy\` which uploads your site to Tome Cloud with hash-based deduplication.

## CI/CD

This project includes a GitHub Actions workflow at \`.github/workflows/deploy.yml\` that automatically deploys on push to \`main\` and creates preview deployments for pull requests.

## What you learned

You built your site to static files and deployed it. Your docs are now live.
`};export{e as default};