## 2026-08-23 - Memoize Recharts Data
**Learning:** When passing dynamically generated data arrays or objects to Recharts components, always wrap them in `useMemo` to maintain reference equality and avoid triggering expensive full SVG layout recalculations on every render.
**Action:** Always memoize `quizData` and `heatmapData` and similar data structures passed to charts.
