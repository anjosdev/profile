# Vinícius Anjos

A minimal, responsive personal website inspired by the typography and spacing of https://zannis.xyz/. Content comes from the supplied Profile.pdf; colors come from the supplied palette files.

No framework, build step, dependencies, remote fonts, or analytics. Deploy the `dist` directory on any static host. Edit `dist/index.html` for content, `dist/styles.css` for styling, and `dist/theme.js` for the theme switch. Dark mode is the default; the bulb button persists the visitor's preference when browser storage is available.

Preview locally:

```sh
python3 -m http.server 4173 --directory dist
```

Open http://localhost:4173.
