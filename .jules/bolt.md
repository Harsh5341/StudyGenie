## 2024-03-24 - Recharts Data Optimization
**Learning:** Recharts components like `<BarChart>` perform expensive full SVG recalculations on every render when passed inline object configurations (like `margin={{ top: 20... }}`) and unmemoized dynamic data arrays. This layout thrashing can cause significant frontend jank.
**Action:** Extract static configuration objects (like `margin`) outside of component bodies to preserve reference equality. Wrap dynamic data arrays passed to Recharts (e.g., `quizData`, `heatmapData`) in `useMemo` hooks to prevent unnecessary recalculations.
