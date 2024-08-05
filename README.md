sudo vi /etc/nginx/sites-available/default

```conf
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    # root /var/www/html;

    server_name _;

    location / {
        root /var/www/front;
        try_files $url /index.html;
    }

    location /api {
        proxy_pass http://localhost:3080/api;
    }
}
```

```bash
echo "PORT=3080" > .env
echo "SECRET='sdfaservaescrasebtrse'" >> .env
```
