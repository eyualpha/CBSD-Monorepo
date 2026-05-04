# Resource Explorer Feature

## Overview
The Resource Explorer is a complex feature that allows users to search, filter, and sort through shared resources in the monorepo. It provides an interactive interface for discovering and managing shared components and utilities.

## Features
- Filter resources by status (Stable, Beta, Planned)
- Filter by tags
- Sort by title, status, or owner
- Interactive tag selection
- Real-time updates

## Usage
```tsx
import { ResourceExplorer } from './system/ResourceExplorer';

<ResourceExplorer />
```

## Dependencies
- @repo/ui/button
- @repo/ui/panel
- @repo/ui/tag
- @repo/ui/shared-resources
- @repo/ui/utils

## Architecture
This feature is assembled in the system folder, importing only from internal monorepo packages. It uses utility functions for filtering and sorting, and UI components for rendering.