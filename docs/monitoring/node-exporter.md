# Node Exporter

Node Exporter exposes Linux host metrics for Prometheus.

## Verify endpoint

```bash
curl http://localhost:9100/metrics
```

Look for metrics such as:

```text
node_memory_MemTotal_bytes
node_memory_MemAvailable_bytes
node_cpu_seconds_total
```
