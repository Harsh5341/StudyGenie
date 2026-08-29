## 2026-08-29 - Recharts Reference Equality
**Learning:** When passing dynamically generated data arrays or objects to Recharts components, it triggers expensive full SVG layout recalculations on every render unless the objects maintain reference equality.
**Action:** Always wrap dynamically generated data arrays passed to Recharts in `useMemo` to maintain reference equality and avoid expensive re-renders.
