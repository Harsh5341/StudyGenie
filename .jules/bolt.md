## 2026-08-28 - Memoizing Recharts Data
**Learning:** Recharts requires reference equality on its data prop to avoid full SVG layout recalculations. Dynamically generated data arrays must be wrapped in `useMemo` to maintain this equality and avoid performance bottlenecks.
**Action:** Always wrap dynamically generated data arrays or objects passed to Recharts components in `useMemo`.
