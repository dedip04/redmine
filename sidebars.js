const sidebars = {
  devopsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Networking',
      items: [
        'networking/subnetting',
        'networking/vlan',
        'networking/ospf',
      ],
    },
    {
      type: 'category',
      label: 'Linux Administration',
      items: [
        'linux/linux-basics',
        'linux/filesystem',
        'linux/bash',
      ],
    },
    {
      type: 'category',
      label: 'Docker',
      items: [
        'docker/docker-basics',
        'docker/docker-network',
        'docker/docker-compose',
      ],
    },
    {
      type: 'category',
      label: 'Monitoring',
      items: [
        'monitoring/prometheus',
        'monitoring/node-exporter',
        'monitoring/grafana',
      ],
    },
    {
      type: 'category',
      label: 'Cloud',
      items: [
        'cloud/aws',
        'cloud/gcp',
      ],
    },
    {
      type: 'category',
      label: 'Infrastructure as Code',
      items: [
        'iac/ansible',
        'iac/terraform',
      ],
    },
    {
      type: 'category',
      label: 'Projects',
      items: [
        'projects/overview',
        'projects/docker-compose',
        'projects/prometheus-monitoring',
      ],
    },
  ],
};

export default sidebars;
