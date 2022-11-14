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
[Nginx](https://hub.docker.com/_/nginx) is used as a reverse proxy for the web stack. It routes clients to the specific services based on the subdirectory and serves static files.

## Certbot
[Certbot](https://hub.docker.com/r/certbot/certbot) is needed to create SSL certificates for Nginx and other web services. It uses [Let's Encrypt](https://letsencrypt.org/) TLS certificates.

## Express
[Node.js Express](https://www.npmjs.com/package/express) is used to host API endpoints for web services.

## Grafana
[Grafana](https://hub.docker.com/r/grafana/grafana/) hosts a dashboard for metrics and logging visualization. It depends on Telegraf and InfluxDB for metrics collection and storage. Mail delivery is sent through [SendGrid](https://sendgrid.com).
