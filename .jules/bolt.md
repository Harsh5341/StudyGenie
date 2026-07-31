## 2026-07-31 - Recharts Rendering Optimization
**Learning:** Recharts components trigger expensive full SVG layout recalculations if dynamically generated data arrays or static configuration objects are passed as new references on every render.
**Action:** Always extract static configuration objects outside the component body and wrap dynamically generated data arrays in useMemo to maintain reference equality.
