## 2026-05-08 - Recharts Referential Equality Optimization
**Learning:** Recharts components (like BarChart) are highly sensitive to referential equality for their 'data' and inline configuration props (e.g., margin). Passing dynamically generated arrays or objects causes expensive full SVG recalculations and layout thrashing on every render.
**Action:** Always wrap dynamically generated arrays or objects passed to Recharts components in useMemo. Extract static configuration objects (like margin) outside of React component bodies to preserve reference equality.
