"use client";

import { useState } from "react";
import { Button } from "@repo/ui/button";
import { Panel } from "@repo/ui/panel";
import { Tag } from "@repo/ui/tag";
import {
  sharedResources,
  type SharedResource,
} from "@repo/ui/shared-resources";
import { filterResources, sortResources } from "@repo/ui/utils";
import styles from "../app/page.module.css";

export function ResourceExplorer() {
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [filterTags, setFilterTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"title" | "status" | "owner">("title");

  const filteredResources = filterResources(
    sharedResources,
    filterStatus,
    filterTags,
  );
  const sortedResources = sortResources(filteredResources, sortBy);

  const handleTagFilter = (tag: string) => {
    setFilterTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const allTags = Array.from(new Set(sharedResources.flatMap((r) => r.tags)));

  return (
    <div>
      <Panel title="Resource Explorer" eyebrow="FEATURE">
        <div className={styles.filterSection}>
          <div>
            <label>Filter by Status: </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">All</option>
              <option value="Stable">Stable</option>
              <option value="Beta">Beta</option>
              <option value="Planned">Planned</option>
            </select>
          </div>
          <div>
            <label>Sort by: </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
          >
            <option value="title">Title</option>
            <option value="status">Status</option>
            <option value="owner">Owner</option>
          </select>
        </div>
        <div className={styles.tagFilter}>
          <label>Filter by Tags: </label>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`${styles.tagButton} ${filterTags.includes(tag) ? styles.active : ''}`}
              onClick={() => handleTagFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className={styles.stack}>
          {sortedResources.map((resource, index) => (
            <Panel
              key={resource.id}
              className={styles.item}
              eyebrow={`RESOURCE ${String(index + 1).padStart(2, "0")}`}
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
        </div>
      </Panel>
      <Button appName="docs" className={styles.action}>
        Explore Resources
      </Button>
    </div>
  );
}
