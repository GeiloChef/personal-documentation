---
outline: deep
---

# Deploy a Static Website from GitHub to your Webspace using GitHub Actions

Since you can't deploy your static Website with GitHub Pages if your repository is `private`, being able to
automatically and seamlessly deploy it from a branch right into your webspace is a game changer.

::: info 
In this tutorial we assume that you're trying to deploy a `Vitepress` application on a `Netcup` webspace.
:::

## Preview of the Steps

1. Create a GitHub action to build the application and push it to a branch
2. Set up your Webspace
3. Create a GitHub action to copy that Build to your webspace


## 1. Set up your Webspace

Next step is to set up your Webspace. To keep it general, you need take care of the following steps. If you're
stuck on anything, check out the documentation of your webhoster.

### Step you need to do
- have a domain or create a subdomain for your application
- create a folder on your webspace where we can push our files to
- create an FTP-user that we will only use for GitHub

::: tip
In this example we create a parent folder called `github-actions`, where we can then deploy multiple 
applications in the sub-folders.
:::

### 2. Create a GitHub action to copy that Build to your webspace

Now we can create a GitHub Action to build you Vue Application and transfer the built to our webspace
via FTP. With the below action we build the static
frontend and push it to a new branch, in this case `release-build`. Make sure you adjust the `FOLDER` to
be the folder the built will end up in.

For Example:
- `Vitepress`: `docs/.vitepress/dist`
- `Vue`: `/dist`

::: warning
You have to create the branch you want to copy the file onto before you first run this action.

**Please note that you will overwrite ALL files on the branch you will save the build on. So make sure you
do not save it on `main`, `master` or any feature branch you are working on**
:::

::: warning
You might face an issue that the action fails to run. If that is the case, you can just create an empty
`.ftp-deploy-sync-state.json` inside the destination folder.
:::

Make sure the `web-deploy` action depends on the `build` action in order to always deploy the newest version
of your application right after it was build.

```yaml
name: Release Build FTP
on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  build:
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
      - name: Push to Branch
        uses: s0/git-publish-subdir-action@develop
        env:
          REPO: self
          BRANCH: release-build # The branch name where you want to push the assets
          FOLDER: docs/.vitepress/dist
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} # GitHub will automatically add this - you don't need to bother getting a token
          MESSAGE: "Build: ({sha}) {msg}" # The commit message
  web-deploy:
    name: Deploy
    runs-on: ubuntu-latest
    needs: publish
    steps:
      - name: Get latest code
        uses: actions/checkout@v4
        with:
          ref: 'release-build'
      - name: Sync files
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USER }}
          password: ${{ secrets.FTP_PASSWORD }}
          protocol: ftps
          server-dir: 'spanish-for-beginners/'
```