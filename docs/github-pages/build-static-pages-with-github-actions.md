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

> For testing purposes it might be better to change from 
> ```yaml
> on:
>   push:
>    branches:
>      - main
> ```
> to 
> ```yaml
> on:
>   dispatch-workflow
> ```
> Then you can start the workflow yourself from the `actions` tab of your
> repository.

> It is important to set the permission for the workflow in case you don't
> use a GitHub access token
> ```yaml
> permissions:
>   contents: write
> ```


### The full `release-build.yml` file
```yaml
name: Release Build
on:
  push:
    branches:
      - main

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
          npm run docs:build
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