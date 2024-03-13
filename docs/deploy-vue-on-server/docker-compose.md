---
outline: deep
---

# docker-compose.yml für Deployment in Portainer

To deploy the frontend container with portainer, we need a docker-compose.yml. It's assumed the container was
already created (f. e. using github actions) and published on the Github Container Registry (ghcr.io).

```yaml
version: "3.9"

services:
  frontend:
    image: "ghcr.io/geilochef/felix-application/frontend:develop"
    restart: "always"
    container_name: "jCONTAINERNAME"
    # tty:true needs to be set for lighttpd to work
    tty: true
    networks:
      - "web"
    environment:
      # here you can set environment variables used in your vue application
      - "VITE_BASE_API_URL=www.example.de/api"
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.CONTAINERNAMEHttp.rule=Host(`your.example.de`, `www.your.example.de`)"
      - "traefik.http.routers.CONTAINERNAMEHttp.entrypoints=web"
      - "traefik.http.routers.CONTAINERNAMEHttp.middlewares=httpsRedirect@file"
      - "traefik.http.routers.CONTAINERNAMEHttps.rule=Host(`your.example.de`, `www.your.example.de`)"
      - "traefik.http.routers.CONTAINERNAMEHttps.entrypoints=web-secure"
      - "traefik.http.routers.CONTAINERNAMEHttps.tls.certresolver=certHttp"
      - "traefik.http.routers.CONTAINERNAMEHttps.tls=true"
      #- "traefik.http.routers.CONTAINERNAMEHttps.middlewares=authAdmin@file"
      - "traefik.http.services.CONTAINERNAME_service.loadbalancer.server.port=80"
networks:
  web:
    external: true
```
___
### Caution!
To make the lighttpd work, it's important to leave the setting for tty as true
> tty: true

___

This `docker-compose.yml` needs an already set up traefik network in your portainer instance. In our Example,
the network we used is called `web`.
