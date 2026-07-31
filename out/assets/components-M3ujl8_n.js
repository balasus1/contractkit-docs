import{t as e}from"./index-BpBLqqhj.js";var t=e();function n(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...e.components},{Accordion:r,Callout:a,Card:o,CardGroup:s,Steps:c,Tabs:l}=n;return r||i(`Accordion`,!0),a||i(`Callout`,!0),o||i(`Card`,!0),s||i(`CardGroup`,!0),c||i(`Steps`,!0),l||i(`Tabs`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:`Using Components`}),`
`,(0,t.jsxs)(n.p,{children:[`Tome includes built-in components you can use in any `,(0,t.jsx)(n.code,{children:`.mdx`}),` file. No imports required.`]}),`
`,(0,t.jsx)(n.h2,{children:`Callouts`}),`
`,(0,t.jsx)(n.p,{children:`Draw attention to important information:`}),`
`,(0,t.jsx)(a,{type:`info`,title:`Information`,children:(0,t.jsx)(n.p,{children:`Use info callouts for context and background details.`})}),`
`,(0,t.jsx)(a,{type:`tip`,title:`Tip`,children:(0,t.jsx)(n.p,{children:`Use tip callouts for best practices and helpful suggestions.`})}),`
`,(0,t.jsx)(a,{type:`warning`,title:`Warning`,children:(0,t.jsx)(n.p,{children:`Use warning callouts when the reader should proceed with caution.`})}),`
`,(0,t.jsx)(a,{type:`danger`,title:`Danger`,children:(0,t.jsx)(n.p,{children:`Use danger callouts for critical warnings about destructive actions.`})}),`
`,(0,t.jsx)(n.h2,{children:`Tabs`}),`
`,(0,t.jsx)(n.p,{children:`Present content in multiple variants — different languages, platforms, or package managers:`}),`
`,(0,t.jsxs)(l,{items:[`npm`,`yarn`,`pnpm`],children:[(0,t.jsx)(`div`,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`npm install @tomehq/cli
`})})}),(0,t.jsx)(`div`,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`yarn add @tomehq/cli
`})})}),(0,t.jsx)(`div`,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`pnpm add @tomehq/cli
`})})})]}),`
`,(0,t.jsx)(n.h2,{children:`Cards`}),`
`,(0,t.jsx)(n.p,{children:`Link to related pages or showcase features:`}),`
`,(0,t.jsxs)(s,{cols:2,children:[(0,t.jsx)(o,{title:`Tutorials`,icon:`🎓`,href:`/tutorials/getting-started`,children:(0,t.jsx)(n.p,{children:`Step-by-step lessons to learn the basics.`})}),(0,t.jsx)(o,{title:`Reference`,icon:`📖`,href:`/reference/config`,children:(0,t.jsx)(n.p,{children:`Technical details on every configuration option.`})})]}),`
`,(0,t.jsx)(n.h2,{children:`Steps`}),`
`,(0,t.jsx)(n.p,{children:`Guide readers through a sequential process:`}),`
`,(0,t.jsxs)(c,{children:[(0,t.jsxs)(`div`,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Create an MDX file`})}),(0,t.jsxs)(n.p,{children:[`Create a new file with the `,(0,t.jsx)(n.code,{children:`.mdx`}),` extension in your `,(0,t.jsx)(n.code,{children:`pages/`}),` directory.`]})]}),(0,t.jsxs)(`div`,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Add a component`})}),(0,t.jsx)(n.p,{children:`Use any built-in component directly in your content. No imports needed.`})]}),(0,t.jsxs)(`div`,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Save and preview`})}),(0,t.jsx)(n.p,{children:`The dev server reloads automatically when you save.`})]})]}),`
`,(0,t.jsx)(n.h2,{children:`Accordions`}),`
`,(0,t.jsx)(n.p,{children:`Collapse content behind a toggle — useful for FAQs:`}),`
`,(0,t.jsx)(r,{title:`Do I need to import components?`,children:(0,t.jsxs)(n.p,{children:[`No. All built-in components are automatically available in every `,(0,t.jsx)(n.code,{children:`.mdx`}),` file.`]})}),`
`,(0,t.jsx)(r,{title:`Can I use components in .md files?`,children:(0,t.jsxs)(n.p,{children:[`Components only work in `,(0,t.jsx)(n.code,{children:`.mdx`}),` files. Rename your file from `,(0,t.jsx)(n.code,{children:`.md`}),` to `,(0,t.jsx)(n.code,{children:`.mdx`}),` to use them.`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var a={frontmatter:{title:`Using Components`,description:`Add interactive elements like callouts, tabs, cards, and steps to your documentation.`,icon:`puzzle`,hidden:!1,toc:!0,draft:!1},headings:[{depth:2,text:`Callouts`,id:`callouts`},{depth:2,text:`Tabs`,id:`tabs`},{depth:2,text:`Cards`,id:`cards`},{depth:2,text:`Steps`,id:`steps`},{depth:2,text:`Accordions`,id:`accordions`}]};export{r as default,a as meta};