## 2026-09-17 - Recharts Performance Bottleneck
**Learning:** When passing dynamically generated data arrays or objects to Recharts components, they must be wrapped in `useMemo`. Failing to do so breaks reference equality on every render, which triggers expensive full SVG layout recalculations in Recharts.
**Action:** Always wrap data arrays passed to Recharts in `useMemo` to maintain reference equality and avoid unnecessary layout recalculations.
