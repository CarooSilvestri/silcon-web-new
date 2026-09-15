import { defineConfig } from "astro/config";

const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages";

export default defineConfig({
  output: "static",
  site: isGitHubPages ? "https://caroosilvestri.github.io" : "https://silcon.com.ar",
  base: isGitHubPages ? "/silcon-web-new" : "/",
  outDir: isGitHubPages ? "../docs" : "./dist",
});
