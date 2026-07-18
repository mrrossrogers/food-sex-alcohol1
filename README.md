# Food Sex Alcohol — Astro Source

Complete Astro source for the Food Sex Alcohol Founding Edition, Issue No. 1.

## Technology

- Astro with static output
- React and TypeScript
- Tailwind CSS 4 through the Vite plugin
- Responsive editorial CSS
- Local production photography with no external image dependency
- Zero required environment variables

## Run locally

```bash
npm install
npm run dev
```

Astro will print the local development URL.

## Verify a production build

```bash
npm run build
```

The static production site is written to `dist/`.

## Connect to your GitHub repository

1. Create a new empty repository at GitHub.
2. Unzip this project.
3. Upload everything inside the project folder to the repository root. Do not upload the enclosing ZIP.
4. Confirm GitHub shows `package.json`, `astro.config.mjs`, `src`, and `public` at the top level.
5. Commit the files to the `main` branch.

## Connect the GitHub repository to the existing Vercel project

1. Open the existing FSA project in Vercel.
2. Go to **Settings → Git**.
3. Choose **Connect Git Repository**.
4. Select the GitHub repository you created.
5. In **Settings → Build and Deployment**, confirm the framework is **Astro**.
6. Vercel should use `npm run build` and the `dist` output directory automatically.

After that, every push to the connected production branch creates a new Vercel deployment in the same project.

## Project structure

```text
src/
  components/Home.tsx     Interactive publication experience
  layouts/Layout.astro    Document shell and social metadata
  pages/index.astro       Homepage
  pages/404.astro         Custom not-found page
  styles/global.css       Complete editorial visual system
public/
  images/                 Bundled editorial photography
astro.config.mjs          Astro, React and Tailwind configuration
package.json              Commands and dependencies
vercel.json               Vercel framework detection
```

## Editing the publication

- Story titles, summaries, emotional framing and verdicts live in `src/components/Home.tsx`.
- The visual language and responsive layouts live in `src/styles/global.css`.
- Site title, description and social-sharing metadata live in `src/layouts/Layout.astro`.
