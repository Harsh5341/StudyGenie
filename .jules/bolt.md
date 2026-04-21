## 2024-05-19 - Recharts SVG Recalculations
**Learning:** Dynamically generated arrays and inline objects (like `margin={{ top: 20... }}`) passed to Recharts components cause expensive full SVG recalculations on every React render because reference equality checks fail.
**Action:** Always wrap Recharts dynamic data in `useMemo` and extract static configuration objects outside the React component body to preserve reference equality.
