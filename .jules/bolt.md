## 2026-08-30 - Recharts Custom Label Component Performance
**Learning:** When passing dynamically generated data arrays to Recharts components (like `BarChart`), React triggers a re-render. If these arrays aren't memoized (like `quizData` and `heatmapData`), they fail referential equality checks on every render, causing Recharts to perform expensive full SVG layout recalculations, which can significantly degrade frontend performance.
**Action:** Always wrap data arrays passed to Recharts components in `useMemo` to maintain reference equality.
