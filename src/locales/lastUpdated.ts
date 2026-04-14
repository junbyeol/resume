export const lastUpdated = new Date("2026-04-14").toLocaleDateString();
export const lastUpdatedNowDaysInterval = Math.floor(
  (new Date().getTime() - new Date(lastUpdated).getTime()) /
    (1000 * 60 * 60 * 24),
);
