## 2024-02-23 - [Recharts Array Memoization]
**Learning:** Recharts triggers expensive full SVG recalculations and layout thrashing if dynamically generated arrays or objects are passed directly to its components (e.g., `<BarChart data={...}>`) without memoization.
**Action:** Always wrap dynamically generated arrays or objects in `useMemo` when passing them to Recharts components to maintain stable references across renders.
