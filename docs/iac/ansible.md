# Ansible

Infrastructure automation using declarative playbooks.

```yaml
- hosts: servers
  become: true
  tasks:
    - name: Check uptime
      command: uptime
```
