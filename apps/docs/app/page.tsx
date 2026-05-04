import { Button } from "@repo/ui/button";
import { Code } from "@repo/ui/code";
import { Panel } from "@repo/ui/panel";
import { sharedResources } from "@repo/ui/shared-resources";
import { Tag } from "@repo/ui/tag";
import { ResourceExplorer } from "../system/ResourceExplorer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.kicker}>DOCS APP</p>
        <h1>Shared Resource Playbook</h1>
        <p>
          Same source data, different presentation. This page reads from{" "}
          <Code>@repo/ui/shared-resources</Code> and renders as a
          documentation-style knowledge wall.
        </p>
      </header>

      <main className={styles.stack}>
        <ResourceExplorer />
        {sharedResources.map((resource, index) => (
          <Panel
            key={resource.id}
            className={styles.item}
            eyebrow={`SECTION ${String(index + 1).padStart(2, "0")}`}
            title={resource.title}
          >
            <p className={styles.summary}>{resource.summary}</p>
            <dl className={styles.meta}>
              <div>
                <dt>Owner</dt>
                <dd>{resource.owner}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{resource.status}</dd>
              </div>
            </dl>
            <div className={styles.tags}>
              {resource.tags.map((tag) => (
                <Tag key={tag} className={styles.tag} label={tag} />
              ))}
            </div>
          </Panel>
        ))}
      </main>

      <Button appName="docs" className={styles.action}>
        Trigger Shared UI Button
      </Button>
    </div>
  );
}
