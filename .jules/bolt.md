## 2026-04-18 - Recharts Performance Bottleneck
**Learning:** Passing dynamically generated arrays or objects to Recharts components causes expensive SVG recalculations and layout thrashing on every render.
**Action:** Always wrap Recharts data arrays in `useMemo` and extract static margin/layout configuration objects outside of the React component body to preserve reference equality.
