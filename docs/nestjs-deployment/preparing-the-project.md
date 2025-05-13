---
outline: deep
---

# Preparing the Project

Before deploying to the server, you need to prepare your NestJS project to
ensure it can run correctly in a production environment.

## Environment Configuration

If you don't already use a .env file for your environment variables, it is time to create one.
It should look something like this:

```dotenv
PORT=3000
DATABASE_URL=...
API_KEY=...
```


### .env.production

You can create a `.env.production` to cover different environment variables when deploying your
application for production. Just create a file like `.env.${Node environment mode}`. To use it
inside your code, just do it like this:

```typescript
// in AppModule (or ConfigModule import)
ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: `.env${process.env.NODE_ENV ? '.' + process.env.NODE_ENV : ''}`,
});
```

With that setup, NestJS will be able to pick up the correct environment variable depending
on your deployment mode.

## Set NODE_ENV When Running the App

To make the magic finally work, all you need to do is set the NODE_ENV mode when deploying.

```bash
NODE_ENV=production node dist/main.js
```

## Fallback or shared values
If you want to load both .env and .env.production with .env.production overriding shared values:

```ts
ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: ['.env', `.env.${process.env.NODE_ENV}`],
});
```