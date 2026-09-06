## 2026-09-06 - Recharts Performance Optimization
**Learning:** When passing dynamically generated data arrays or objects to Recharts components, if reference equality is not maintained, it triggers expensive full SVG layout recalculations on every render.
**Action:** Always wrap dynamically generated data arrays passed to Recharts components in `useMemo` to maintain reference equality.
