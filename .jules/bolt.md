## 2024-05-24 - Recharts Re-rendering Anti-pattern
**Learning:** Recharts components like `<BarChart>` will trigger full SVG recalculations and layout thrashing on every render if the data arrays passed to them are recreated on each render.
**Action:** Always wrap dynamically generated arrays or objects passed to Recharts components in `useMemo` to prevent expensive, unnecessary recalculations.
