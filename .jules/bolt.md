## 2024-05-23 - Recharts Array References
**Learning:** Passing dynamically generated data arrays to Recharts components without memoization causes reference inequality, triggering expensive full SVG layout recalculations on every render.
**Action:** Always wrap dynamically generated data arrays passed to Recharts components in `useMemo` to maintain reference equality.
