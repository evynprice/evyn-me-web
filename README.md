# evyn-me-web
This repository contains the files needed to run my web services.

|  Application  |              Service              |
| ------------- | --------------------------------- |
| Nginx         | Reverse Proxy and root webserver  |
| Certbot       | SSL Certificates                  |
| Express       | API endpoint                      |
| Grafana       | Metrics Dashboard                 |
| Prometheus    | Time series Metrics DB            |

## Core Services

### Nginx
[Nginx](https://hub.docker.com/_/nginx) is used as a reverse proxy for the web stack. It routes clients to the specific services based on the subdirectory and serves static files.

### Grafana
[Grafana](https://hub.docker.com/r/grafana/grafana/) hosts a dashboard for metrics and logging visualization. This provides visibility on the overall health and status of each of the services in my lab. It depends on Prometheus for metrics collection and storage. Mail delivery is sent through [SendGrid](https://sendgrid.com).

### Express
[Node.js Express](https://www.npmjs.com/package/express) is used to host API endpoints for web services.

## Dependency Services

### Certbot
[Certbot](https://hub.docker.com/r/certbot/certbot) is needed to create SSL certificates for Nginx and other web services. It uses [Let's Encrypt](https://letsencrypt.org/) TLS certificates.

### Prometheus
[Prometheus](https://prometheus.io/) is used for system metrics collection. It scrapes several endpoints in my lab, such as [node exporter](https://github.com/prometheus/node_exporter) for OS metrics and [cadvisor](https://github.com/google/cadvisor) for Docker metrics.
