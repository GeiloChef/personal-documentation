# Setting up Nginx as a Reverse Proxy

To serve your NestJS application securely and reliably,
you should place it behind a reverse proxy like Nginx.
This also allows you to add SSL certificates for HTTPS using Certbot.

## Install Nginx

If Nginx isn’t installed yet:

```bash
sudo apt update
sudo apt install nginx
```

Now you can already start and enable it:

```bash
sudo systemctl enable nginx
sudo systemctl start nginx
```

## Configure Nginx

Next step is to create a configuration file for your application:
::: code-group
```bash [create the file]
sudo nano /etc/nginx/sites-available/nest-app
```

```ngingx
server {
    listen 80; <-- make sure this port is free
    server_name yourdomain.com; <-- your domain

    location / {
        proxy_pass http://localhost:3000; <-- your application port 
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
:::

::: warning
Sometimes it might be that your port 80 is already taken by another application, you could 
check that easily by running the following command.

```bash
sudo ss -tuln | grep :80
```
:::


Now you can enable the configuration for your site:
```bash
sudo ln -s /etc/nginx/sites-available/nest-app /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```