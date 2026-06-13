## 2026-06-13 - Recharts array recalculation
**Learning:** Passing dynamically generated arrays or objects to Recharts components causes expensive, unnecessary full SVG recalculations and layout thrashing on every render.
**Action:** Always wrap dynamically generated arrays or objects passed to Recharts components in useMemo, and extract static configuration objects (e.g., inline margin props) outside of React component bodies to preserve reference equality.
