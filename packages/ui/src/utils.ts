import type { SharedResource } from './shared-resources';

export function filterResources(resources: SharedResource[], status?: string, tags?: string[]) {
  return resources.filter(resource => {
    if (status && resource.status !== status) return false;
    if (tags && tags.length > 0) {
      return tags.some(tag => resource.tags.includes(tag));
    }
    return true;
  });
}

export function sortResources(resources: SharedResource[], sortBy: 'title' | 'status' | 'owner') {
  return [...resources].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString();
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}