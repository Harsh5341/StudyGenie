## 2026-08-25 - Prevent Recharts Full SVG Layout Recalculation
**Learning:** Recharts components aggressively trigger expensive full SVG layout recalculations on every render if the `data` prop arrays (like `quizData` or `heatmapData`) do not maintain reference equality. Dynamically generating these arrays inline without memoization causes severe frontend performance bottlenecks in dashboards.
**Action:** Always wrap dynamically generated data arrays passed to Recharts components in `useMemo` with appropriate dependency arrays.
