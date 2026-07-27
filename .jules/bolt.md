## 2026-07-27 - Recharts Array Memoization & Static Configs
**Learning:** Passing dynamically generated arrays or inline configuration objects (like margins) directly into Recharts components triggers expensive full SVG recalculations and layout thrashing on every render.
**Action:** Always wrap Recharts data arrays in useMemo and extract static configuration objects outside the React component body to preserve reference equality.
