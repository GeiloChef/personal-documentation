---
outline: deep
---

# Build static pages with GitHub Actions

With the correct GitHub Action, you can automatically build your static webpage
whenever you add a new commit, and deploy this build to GitHub Pages. With this,
your Webpage will always be on the latest version.

### Create a GitHub action workflow

In this case we always build the static webpage whenever a new commit is pushed
to the branch `main`. 

::: info
 With `workflow_dispatch:` you can run you script manually on the `actions` tab of your repository.

The `push` hook lets this workflow run, whenever a push is made to the branch passed to it. In this
case its `main`.
 ```yaml
 on:
  workflow_dispatch:
  push:
    branches:
      - main
 ```
:::

::: warning
 It is important to set the permission for the workflow in case you don't
 use a GitHub access token
 ```yaml
 permissions:
   contents: write
 ```
:::

::: Danger
Make sure to adjust the `branch` that is passed to the hook as well as the script that is run, as it
may differ, depending on what you want to deploy.
 ```yaml
 permissions:
   contents: write
 ```
:::

### The full `release-build.yml` file
```yaml
name: Release Build
on:
  workflow_dispatch:
  push:
    branches:
      - main // [!code warning]

permissions:
  contents: write

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Set up Node.js
        uses: actions/setup-node@v4.0.2
        with:
          node-version: '20'
      - name: Build website
        run: |
          npm install --non-interactive
          npm run docs:build // [!code warning]
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4.5.0
        with:
          folder: docs/.vitepress/dist
          clean: true
          clean-exclude: |
            "CNAME"
            ".gitattributes"
          single-commit: true
```