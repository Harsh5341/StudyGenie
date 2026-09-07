## 2026-09-07 - Memoize Recharts Data
**Learning:** When passing dynamically generated data arrays or objects to Recharts components, they should always be wrapped in `useMemo` to maintain reference equality and avoid triggering expensive full SVG layout recalculations on every render.
**Action:** Always wrap Recharts data props in `useMemo` when computing them from other props or state.
