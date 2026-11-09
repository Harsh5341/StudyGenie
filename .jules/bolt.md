## 2025-02-20 - Memoizing Recharts Data Arrays
**Learning:** Recharts components like `BarChart` perform expensive SVG layout calculations. If data arrays are constructed directly in the component body (e.g. `const data = [...]`), they lose referential equality on every render, triggering deep, unnecessary DOM recalculations even when the actual underlying data hasn't changed.
**Action:** Always wrap dynamically constructed data arrays or objects intended for Recharts components in `React.useMemo` to preserve referential equality and optimize React rendering.
