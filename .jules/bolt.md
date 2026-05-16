## 2025-02-18 - Extracted Recharts Margin & Arrays Optimization
**Learning:** Recharts components often re-render when inline arrays or static configuration objects (like `margin={{...}}`) are created inside the component body, due to referential inequality on every render.
**Action:** Always extract static configurations outside of the component body, and use `useMemo` for dynamically generated chart data arrays to prevent unnecessary layout thrashings and full SVG recalculations.
