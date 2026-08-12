## 2024-05-24 - [Recharts Optimization]
**Learning:** When passing dynamically generated data arrays or objects to Recharts components, always wrap them in `useMemo` to maintain reference equality and avoid triggering expensive full SVG layout recalculations on every render.
**Action:** Use `useMemo` for Recharts data arrays and props like `margin`.
