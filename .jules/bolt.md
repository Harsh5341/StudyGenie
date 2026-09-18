## 2026-09-18 - Recharts Re-render Optimization
**Learning:** When passing dynamically generated data arrays to Recharts components, failing to maintain reference equality triggers expensive full SVG layout recalculations on every render, which is a specific bottleneck in this application's architecture due to the heavy use of charts.
**Action:** Always wrap data arrays passed to Recharts in `useMemo` to maintain reference equality and avoid these expensive recalculations.
