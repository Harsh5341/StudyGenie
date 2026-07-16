## 2026-07-16 - Recharts Performance Anti-Pattern
**Learning:** Passing dynamically generated arrays or objects (like data or inline margin props) to Recharts components causes expensive, full SVG recalculations and layout thrashing on every render.
**Action:** Always wrap dynamic data arrays for Recharts in `useMemo` and extract static configuration objects outside of the React component body to preserve reference equality.
