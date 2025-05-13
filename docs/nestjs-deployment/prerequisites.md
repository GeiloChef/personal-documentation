---
outline: deep
---

# Prerequisites

Before you can deploy your NestJS application to a virtual server,
you should make sure the following requirements are met.

:::info
Some of them are optional, and just listed because they are used in further steps.
:::

## Local Development Requirements

Make sure your development environment includes:
- [Node.js](https://nodejs.org/) (preferably LTS version)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A working NestJS application (`@nestjs/cli` installed globally is helpful)
- Git (for version control and deployment)


## Server Requirements

On your V-Server, the following should be installed and properly configured:

- A Linux-based OS (e.g., Ubuntu 22.04)
- SSH access to the server
- A user with sudo privileges
- [Node.js](https://nodejs.org/) installed
- `npm` or `yarn` installed
- Git installed
- A firewall configured (e.g., UFW or iptables)
- [PM2](https://pm2.keymetrics.io/) installed globally for process management
- [Nginx](https://nginx.org/) as a reverse proxy
- (Optional) A registered domain pointing to your server’s IP address
