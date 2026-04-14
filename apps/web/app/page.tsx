import { Button } from "@repo/ui/button";
import { Code } from "@repo/ui/code";
import { Panel } from "@repo/ui/panel";
import { sharedResources } from "@repo/ui/shared-resources";
import { Tag } from "@repo/ui/tag";
import styles from "./page.module.css";

export default function Home() {
  const stableCount = sharedResources.filter(
    (resource) => resource.status === "Stable",
  ).length;
  const betaCount = sharedResources.filter(
    (resource) => resource.status === "Beta",
  ).length;

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.kicker}>WEB APP</p>
        <h1>Resource Operations Board</h1>
        <p className={styles.subtitle}>
          One shared dataset from <Code>@repo/ui/shared-resources</Code>{" "}
          rendered as a dashboard.
        </p>
      </header>

      <main className={styles.grid}>
        <Panel
          className={styles.metric}
          title={`${sharedResources.length}`}
          eyebrow="TOTAL RESOURCES"
        >
          <p>Active shared modules tracked in this monorepo.</p>
        </Panel>

        <Panel
          className={styles.metric}
          title={`${stableCount}`}
          eyebrow="STABLE"
        >
          <p>Production-ready resources available to both apps.</p>
        </Panel>

        <Panel className={styles.metric} title={`${betaCount}`} eyebrow="BETA">
          <p>Resources currently in test rollout.</p>
        </Panel>

        <section className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Resource</th>
                <th>Owner</th>
                <th>Status</th>
                <th>Tags</th>
              </tr>
            </thead>
            <tbody>
              {sharedResources.map((resource) => (
                <tr key={resource.id}>
                  <td>
                    <p className={styles.resourceTitle}>{resource.title}</p>
                    <p className={styles.resourceSummary}>{resource.summary}</p>
                  </td>
                  <td>{resource.owner}</td>
                  <td>{resource.status}</td>
                  <td>
                    <div className={styles.tags}>
                      {resource.tags.map((tag) => (
                        <Tag key={tag} className={styles.tag} label={tag} />
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <Button appName="web" className={styles.action}>
        Trigger Shared UI Button
      </Button>
    </div>
  );
}
