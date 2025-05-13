---
outline: deep
---

Deploying to the Server

Now that your project is built, it’s time to deploy it to your virtual server (V-Server).
This section explains how to manually transfer and run your app, as well as how to automate
it later if desired.

## Prepare the Server

Make sure your server:

- Has Node.js and npm installed (also make sure you have the correct version!)
- Has a dedicated deployment directory (e.g., `/var/www/nest-app`)
- Allows SSH access

### Create a directory

If this is the first time you are deploying your NestJS application, you most likely need to 
create a new directory. You can do it manually using it via an FTP client like WinSCP. Or you
can use the following command:

```bash
mkdir -p /var/www/nest-app
```

## Transfer files to Server

Now it is already the time to bring your files to the server. Here are three easy ways to copy 
your files to your server.

### WinSCP

::: info
This is only available for Windows.
:::

Connect to your server, and copy over the files in the previously created directory. You need 
the following files in your directory:

```
- /dist
- package.json
- .env.production
```

### Using scp

```bash
scp -r dist package.json .env.production user@your-server-ip:/var/www/nest-app
```
Replace `user@your-server-ip` with your actual server credentials.

### Using rsync

::: warning
This is recommended for updates.
:::

```bash
scp -r dist package.json .env.production user@your-server-ip:/var/www/nest-app
```
Replace `user@your-server-ip` with your actual server credentials.

## Install Dependencies

1. Login to your server:
```bash
ssh user@your-server-ip
```

2. Navigate to the app directory
```bash
cd /var/www/nest-app
```

3. Install only production dependencies
```bash
npm install --omit=dev
```

## Run the Application

To run your application, you can either start it manually, just as you already did when you
tested it locally:
```bash
NODE_ENV=production node dist/main.js
```

But preferably you can use a process manager like PM2. With a tool like this you can also let
the application restart automatically if the server restarts.

```bash
npm install -g pm2
pm2 start dist/main.js --name nest-app --env production
pm2 save
pm2 startup
```
