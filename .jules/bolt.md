## 2026-09-02 - Recharts Performance Optimization
**Learning:** When passing dynamically generated data arrays or objects to Recharts components, they must be wrapped in `useMemo` to maintain reference equality and avoid triggering expensive full SVG layout recalculations on every render.
**Action:** Always wrap `data` props passed to Recharts in `useMemo` to improve performance.
