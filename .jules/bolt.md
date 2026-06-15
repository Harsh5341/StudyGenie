## 2026-06-15 - Recharts Referential Equality Optimization
**Learning:** Recharts components (like BarChart) undergo expensive re-renders and full layout recalculations if prop references (like 'data' arrays or 'margin' objects) change on every render, which is a common anti-pattern when calculating them inline.
**Action:** Always wrap dynamically generated data arrays for Recharts in 'useMemo' and extract static objects (like margins) outside the component body to preserve reference equality.
