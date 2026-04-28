## 2024-05-18 - Missing useMemo on Recharts Data
**Learning:** Passing dynamically generated arrays or objects to Recharts components (e.g., `<BarChart data={...}>`) without `useMemo` causes expensive, unnecessary full SVG recalculations and layout thrashing on every render.
**Action:** Always wrap dynamically generated data arrays passed to Recharts in `useMemo` to prevent unnecessary full SVG recalculations.
