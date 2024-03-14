---
outline: deep
---

# Push an existing repository to a GitHub repository

After creating a repository on GitHub previously, you can now push your local repository to it.

::: info
If you didn't initiate your local git repository yet, start with `git init`
:::

## Add the GitHub repository as remote and push your first commit

```console
# Set Remote
git remote add origin git@github.com:GeiloChef/personal-documentation.git

# checkout branch main
git branch -M main

# make first commit
...

# push commit to main branch
git push -u origin main
```

***:heavy_check_mark: Now you successfully connected your local git repository to your GitHub Repository.***
