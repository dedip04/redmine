import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function Skill({name, level}) {
  return (
    <div className="skill-row">
      <div className="skill-label"><span>{name}</span><span>{level}</span></div>
      <div className="skill-bar"><span style={{width: level}} /></div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout title="Dedi Prastiyo" description="DevOps engineering portfolio and technical lab documentation">
      <main>
        <section className="hero-custom">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">IT SUPPORT & IT OPERATIONS → DEVOPS</div>
              <h1>Dedi Prastiyo</h1>
              <p className="hero-lead">
                Building practical DevOps skills through hands-on labs, infrastructure,
                monitoring, containers, cloud and automation.
              </p>
              <div className="hero-actions">
                <Link className="button button--primary button--lg" to="/docs/intro">
                  Explore My Lab
                </Link>
                <Link className="button button--secondary button--lg" to="/docs/projects/overview">
                  View Projects
                </Link>
              </div>
            </div>
            <div className="terminal-card">
              <div className="terminal-head"><span>devops@dedi-lab</span><span>● ● ●</span></div>
              <pre>{`$ whoami
dedi-prastiyo

$ focus
Linux • Docker • Monitoring
Cloud • IaC • Networking

$ status
learning → building → documenting

$ next
CI/CD + Cloud Automation`}</pre>
            </div>
          </div>
        </section>

        <section className="section-custom">
          <div className="section-heading">
            <span className="eyebrow">ABOUT</span>
            <h2>From IT Operations to DevOps</h2>
            <p>
              A practical portfolio documenting the transition from IT Support & IT Operations
              into DevOps engineering through reproducible labs and real troubleshooting notes.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card"><div className="feature-icon">🐧</div><h3>Linux</h3><p>Administration, services, permissions, SSH and Bash fundamentals.</p></div>
            <div className="feature-card"><div className="feature-icon">🐳</div><h3>Containers</h3><p>Docker, networks, volumes and Docker Compose application stacks.</p></div>
            <div className="feature-card"><div className="feature-icon">📊</div><h3>Monitoring</h3><p>Prometheus, Node Exporter, metrics and Grafana visualization.</p></div>
            <div className="feature-card"><div className="feature-icon">☁️</div><h3>Cloud & IaC</h3><p>AWS, GCP, Ansible and Terraform learning projects.</p></div>
          </div>
        </section>

        <section className="section-custom section-muted">
          <div className="section-heading">
            <span className="eyebrow">TECH STACK</span>
            <h2>Skills in Progress</h2>
          </div>
          <div className="skills-grid">
            <div><Skill name="Networking" level="75%" /><Skill name="Linux" level="70%" /><Skill name="Docker" level="65%" /></div>
            <div><Skill name="Monitoring" level="60%" /><Skill name="Cloud" level="45%" /><Skill name="IaC" level="40%" /></div>
          </div>
        </section>

        <section className="section-custom">
          <div className="section-heading">
            <span className="eyebrow">FEATURED LABS</span>
            <h2>What I Build</h2>
          </div>
          <div className="project-grid">
            <Link className="project-card" to="/docs/projects/docker-compose">
              <span className="project-tag">DOCKER</span>
              <h3>Backend + MySQL with Docker Compose</h3>
              <p>Two-service application, persistent MySQL volume and isolated Docker network.</p>
              <span className="project-link">Read documentation →</span>
            </Link>
            <Link className="project-card" to="/docs/projects/prometheus-monitoring">
              <span className="project-tag">MONITORING</span>
              <h3>Prometheus Server Monitoring</h3>
              <p>Collect server metrics with Node Exporter and query memory and CPU usage.</p>
              <span className="project-link">Read documentation →</span>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
