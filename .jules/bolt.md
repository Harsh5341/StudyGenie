## 2026-09-01 - Memoizing Recharts Data Arrays
**Learning:** Recharts triggers expensive full SVG layout recalculations when data props change reference. Passing inline arrays (e.g., `data={[...]}`) or mapping data directly in the render cycle (e.g., `data={Object.entries(...).map(...)}`) causes severe layout thrashing on every render.
**Action:** Always wrap dynamically generated data arrays and objects passed to Recharts components in `useMemo` to maintain reference equality.
