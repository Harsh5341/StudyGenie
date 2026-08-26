## 2026-08-26 - Recharts Data Memoization
**Learning:** When passing dynamically generated data arrays or objects to Recharts components, always wrap them in `useMemo`. Recharts relies on reference equality, and passing new instances triggers expensive full SVG layout recalculations on every render.
**Action:** Always memoize data arrays and objects passed as props to Recharts components.
