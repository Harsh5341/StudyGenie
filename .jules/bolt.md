## 2026-08-31 - Recharts Performance Optimization
**Learning:** Passing dynamically generated data arrays directly to Recharts components causes expensive full SVG layout recalculations on every render due to reference inequality.
**Action:** Always wrap data arrays and objects passed to Recharts in `useMemo` to maintain reference equality and prevent unnecessary re-renders.
