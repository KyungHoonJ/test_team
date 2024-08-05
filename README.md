```conf
server {
listen 80 default_server;
listen [::]:80 default_server;

    # root /var/www/html;

    server_name _;

    location / {
        root /var/www/front;
        try_files $url $url/ =/index.html;
    }

    location /api {
        proxy_pass http://localhost:3080/api;
    }
}
```
