# Project — Prometheus Server Monitoring

## Objective

Monitor a Linux server using Prometheus and Node Exporter.

## Architecture

```text
Server 2
┌──────────────────────┐
│   Node Exporter      │
│       :9100          │
└──────────┬───────────┘
           │ metrics
           ▼
┌──────────────────────┐
│     Prometheus       │
│       :9090          │
└──────────────────────┘
```

## Node Exporter

Verify the metrics endpoint:

```bash
curl http://localhost:9100/metrics
```

## Prometheus

Example memory metrics:

```promql
node_memory_MemTotal_bytes
```

```promql
node_memory_MemAvailable_bytes
```

## Result

The lab demonstrates how server metrics can be exposed by Node Exporter, scraped by Prometheus and queried for resource monitoring.
