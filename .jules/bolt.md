## 2024-05-18 - [Recharts Optimization]
**Learning:** Passing dynamically generated arrays or objects to Recharts components (e.g., `<BarChart data={...}>`) without memoization causes expensive, unnecessary full SVG recalculations and layout thrashing on every render.
**Action:** Always wrap data passed to Recharts components in `useMemo` to prevent expensive recalculations. Also, extract static configuration objects (e.g., inline margin props like `margin={{ top: 20... }}`) outside of React component bodies to preserve reference equality.
