export type SharedResource = {
  id: string;
  title: string;
  summary: string;
  owner: string;
  status: "Stable" | "Beta" | "Planned";
  tags: string[];
};

export const sharedResources: SharedResource[] = [
  {
    id: "design-system",
    title: "Design System",
    summary: "Shared UI language for all products in the monorepo.",
    owner: "Platform Team",
    status: "Stable",
    tags: ["ui", "components", "tokens"],
  },
  {
    id: "analytics-kit",
    title: "Analytics Kit",
    summary: "Reusable events and dashboards used by both apps.",
    owner: "Data Team",
    status: "Beta",
    tags: ["events", "metrics", "tracking"],
  },
  {
    id: "auth-core",
    title: "Auth Core",
    summary: "Common authentication flows and guards.",
    owner: "Security Team",
    status: "Planned",
    tags: ["security", "session", "identity"],
  },
];
