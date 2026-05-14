## 2024-05-15 - Recharts Optimization
**Learning:** Passing dynamically generated arrays or inline objects directly to Recharts components causes expensive SVG recalculations and layout thrashing on every render.
**Action:** Always wrap arrays for Recharts in `useMemo` and extract static configurations like `margin` outside the component body.
