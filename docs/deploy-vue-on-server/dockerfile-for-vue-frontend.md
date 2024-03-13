---
outline: deep
---

# Dockerfile for Vue 3 Frontend with `lighttpd`

This dockerfile is used to automatically de

```dockerfile
FROM node:20-alpine AS builder

COPY package.json .

COPY package-lock.json .

RUN npm install --non-interactive

COPY ../vue-with-typescript .

RUN npm run build-only --production

FROM rtsp/lighttpd

COPY --from=builder dist /var/www/html/

COPY router.conf /etc/lighttpd/conf.d
```

## Router Config

The Following config settings are needed to deploy the vue frontend with `lighttdp` and make the web history
routing possible.

```
// router.conf

server.modules += ( "mod_rewrite" )

url.rewrite-if-not-file = ( "" => "/" )
```