## 2026-09-03 - Recharts Performance Bottleneck
**Learning:** When passing dynamically generated data arrays or objects to Recharts components without memoization, it triggers expensive full SVG layout recalculations on every render, degrading frontend performance.
**Action:** Always wrap dynamically generated data arrays or objects passed to Recharts components in useMemo to maintain reference equality and avoid unnecessary recalculations.
