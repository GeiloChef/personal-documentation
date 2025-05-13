---
outline: deep
---

# Building the Project

Before deploying the application to your server, you need to build the NestJS project for
production. This compiles your TypeScript code into plain JavaScript in the `dist/` folder.

## Set up the build script

Make sure your `package.json` includes the following scripts. These should already be present
if you created your NestJS application with the `@nestjs/cli`.

```json
{
  ...
  "scripts": {
    ...
    "build": "nest build",
    "start:prod": "node dist/main.js",
    ...
  },
  ...
}
```
::: info
The build script uses the Nest CLI to compile the project.
The start:prod script is used to run the compiled code.
:::

## Build the project 

Now you can run the build script to create the `/dist` directory.

```bash
npm run build
```

## Verify the output

If everything went well with the build you should have the following folder structure:
```
/dist
  ├── main.js
  ├── app.module.js
  └── ...
```

## Run the build locally 
If you want to make sure, the built version runs without any errors, you can already test
it locally.

```bash
NODE_ENV=production node dist/main.js
```