## 2024-05-26 - Recharts Rendering Optimizations
**Learning:** Passing dynamically generated arrays or objects to Recharts components (e.g., `<BarChart data={...}>`) without `useMemo` triggers expensive, unnecessary full SVG recalculations and layout thrashing on every render. Inline margin props also break reference equality.
**Action:** Always wrap dynamically generated data for Recharts in `useMemo` and extract static configuration objects outside the React component body to preserve reference equality.
