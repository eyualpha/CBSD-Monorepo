"use client";

import { useState } from "react";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Panel } from "@repo/ui/panel";
import { sharedResources } from "@repo/ui/shared-resources";
import { capitalize } from "@repo/ui/utils";
import styles from "../app/page.module.css";

type Notification = {
  id: string;
  type: "update" | "alert" | "info";
  title: string;
  message: string;
  resourceId?: string;
  date: Date;
};

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "update",
    title: "Design System Updated",
    message: "New components added to the design system.",
    resourceId: "design-system",
    date: new Date("2024-05-01"),
  },
  {
    id: "2",
    type: "alert",
    title: "Beta Feature Available",
    message: "Analytics Kit is now in beta.",
    resourceId: "analytics-kit",
    date: new Date("2024-04-28"),
  },
  {
    id: "3",
    type: "info",
    title: "New Resource Planned",
    message: "Auth Core is planned for Q3.",
    resourceId: "auth-core",
    date: new Date("2024-04-25"),
  },
];

export function NotificationCenter() {
  const [notifications, setNotifications] =
    useState<Notification[]>(mockNotifications);
  const [filterType, setFilterType] = useState<string>("");

  const filteredNotifications = filterType
    ? notifications.filter((n) => n.type === filterType)
    : notifications;

  const dismissNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const getResourceTitle = (resourceId?: string) => {
    if (!resourceId) return "";
    const resource = sharedResources.find((r) => r.id === resourceId);
    return resource ? resource.title : "";
  };

  return (
    <div>
      <Panel title="Notification Center" eyebrow="FEATURE">
        <div style={{ marginBottom: "1rem" }}>
          <label>Filter by Type: </label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">All</option>
            <option value="update">Update</option>
            <option value="alert">Alert</option>
            <option value="info">Info</option>
          </select>
        </div>
        <div className={styles.grid}>
          {filteredNotifications.map((notification) => (
            <div key={notification.id}>
              <Card
                className={styles.item}
                title={`${capitalize(notification.type)}: ${notification.title}`}
                href="#"
              >
                <p>{notification.message}</p>
                {notification.resourceId && (
                  <p>Related to: {getResourceTitle(notification.resourceId)}</p>
                )}
                <p>Date: {notification.date.toISOString().split("T")[0]}</p>
              </Card>
              <Button
                appName="web"
                onClick={() => dismissNotification(notification.id)}
                style={{ marginTop: "0.5rem" }}
              >
                Dismiss
              </Button>
            </div>
          ))}
        </div>
      </Panel>
      <Button appName="web" className={styles.action}>
        Check Notifications
      </Button>
    </div>
  );
}
