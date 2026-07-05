## 2024-05-18 - Prevent Recharts Re-renders
**Learning:** When passing dynamically generated arrays or objects to Recharts components (e.g., `<BarChart data={...}>`), always wrap them in `useMemo` and define configuration objects outside component bodies to prevent expensive, unnecessary full SVG recalculations and layout thrashing on every render.
**Action:** Use `useMemo` to cache chart data and extract static margin props in `ProgressDashboard`.
