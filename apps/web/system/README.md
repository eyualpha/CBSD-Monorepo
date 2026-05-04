# Notification Center Feature

## Overview
The Notification Center is a feature that displays notifications related to shared resources, allowing users to stay updated on changes, alerts, and information within the monorepo.

## Features
- Display notifications of different types (update, alert, info)
- Filter notifications by type
- Dismiss individual notifications
- Link notifications to related resources
- Date formatting

## Usage
```tsx
import { NotificationCenter } from './system/NotificationCenter';

<NotificationCenter />
```

## Dependencies
- @repo/ui/button
- @repo/ui/card
- @repo/ui/panel
- @repo/ui/shared-resources
- @repo/ui/utils

## Architecture
Assembled in the system folder using internal packages only. Utilizes UI components for cards and panels, and utility functions for text formatting.