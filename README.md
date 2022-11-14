# evyn-me-web
This repository contains the files needed to run my web services.

|  Application  |              Service              |
| ------------- | --------------------------------- |
| Nginx         | Reverse Proxy and root webserver  |
| Certbot       | SSL Certificates                  |
| Express       | API endpoint                      |
| Grafana       | Metrics Dashboard                 |
| Telegraf      | Metrics Collection                |
| InfluxDB      | Time Series Metrics DB            |

## Nginx
Nginx is used as a reverse proxy for the web stack. It routes clients to the specific services based on the subdirectory and serves static files.
