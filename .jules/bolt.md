## 2026-07-20 - Recharts Performance Optimization
**Learning:** Recharts components perform expensive SVG recalculations and layout thrashing if dynamically generated data arrays or inline static configuration objects (like `margin`) are passed as props, due to failing reference equality checks on every render.
**Action:** Always wrap dynamically generated chart data in `useMemo` and extract static configuration objects outside the React component body to preserve reference equality.
