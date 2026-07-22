## 2026-07-22 - Memoize Recharts Data and Extract Configs
**Learning:** Passing dynamically generated arrays or inline configuration objects (like margins) to Recharts components causes expensive, unnecessary full SVG recalculations and layout thrashing on every render because they break reference equality.
**Action:** Always wrap dynamically generated data passed to Recharts in `useMemo` and extract static configuration objects outside the React component body.
