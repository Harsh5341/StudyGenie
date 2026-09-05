## 2026-09-05 - Recharts Data Reference Equality
**Learning:** When passing dynamically generated data arrays or objects to Recharts components, they must be wrapped in `useMemo`. Without it, new object references are created on every render, triggering expensive full SVG layout recalculations and layout thrashing in Recharts.
**Action:** Always wrap dynamically generated data structures passed to Recharts charts in `useMemo` to maintain reference equality and optimize rendering performance.
