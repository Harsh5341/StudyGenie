## 2026-09-09 - [Performance] Memoize Recharts Data Arrays
**Learning:** Dynamically generated data arrays or objects passed to Recharts components trigger expensive full SVG layout recalculations on every render because they lose reference equality.
**Action:** Always wrap dynamically generated data for Recharts (like `quizData` and `heatmapData`) in `useMemo` to maintain reference equality.
