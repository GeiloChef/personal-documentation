---
outline: deep
---

# Protect a Folder using a `.htaccess` so only authenticated user can access (parts of) your Website

If you want to protect your deployed Website (or part of it) from unauthorized access, but you don't want 
to set up a full authentication logic yourself, you can make use of the easy authentication using the right
combination of `.htaccess` and `.htpasswd`.

::: info
For this tutorial we assume you have already successfully deployed your webpage on an *Apache* server.
:::

## Create `.htaccess` and `.htpasswd` 

First step is to create a `.htaccess` and a `.htpasswd`. Those two files will take care of the authentication
of every user that tries to enter your website. 

The password needs to be hashed. You can use any .htaccess-generator on the web to generate your password-hash.

::: code-group
```text [.htaccess]
AuthType Basic
AuthName "Protected Directory"
AuthUserFile  route/to/your/.htpasswd
Require valid-user
```

```text [.htaccess]
admin:$2y$10$xhiTb7Bzh87Gjb48hCP9
```
:::

::: info
Having the correct route to the .htpasswd can be challenging depending on your hosting provider
as you need the ***full path*** to the file. 

If you have trouble with that you can create a PHP-file with the following 
content.

```php
<?php echo $_SERVER['DOCUMENT_ROOT']; ?>
```

If you enter that page, it will print you out the `document root` of your project which you can then use to
determine the path to your .htpasswd.
:::