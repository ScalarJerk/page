# sudibyo.com

personal website. plain html, css, js. no framework, no build step.

## structure

```
sudibyo-site/
├── index.html        # all pages live here as divs
├── css/
│   └── style.css
├── js/
│   └── main.js       # page navigation + hash routing
├── netlify.toml      # netlify config
└── .gitignore
```

## local dev

just open `index.html` in a browser. no server needed.

or use a local server if you prefer:
```bash
npx serve .
```

## deploy

1. push to github
2. import repo on netlify.com
3. build settings: leave blank (no build command, publish dir is `.`)
4. set custom domain in netlify → point namecheap nameservers to netlify

## adding a new essay

in `index.html`, find the `#p-writing` section and add a new `.writing-row`:

```html
<div class="writing-row">
  <span class="w-month">jun</span>
  <span class="w-title">your essay title here</span>
  <span class="w-tag">venture</span>
</div>
```

add it at the top of the correct year group.
