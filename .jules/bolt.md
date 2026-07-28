## 2026-07-28 - Recharts Re-renders
**Learning:** Passing dynamically generated arrays or inline objects (like margin) directly to Recharts components causes expensive, unnecessary full SVG recalculations and layout thrashing on every render due to reference inequality.
**Action:** Always memoize data arrays using `useMemo` and extract static configuration objects outside the component body when working with Recharts.
