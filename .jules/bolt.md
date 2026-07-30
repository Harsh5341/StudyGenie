## 2026-07-30 - Recharts Performance Optimization
**Learning:** Recharts triggers expensive full SVG layout recalculations when dynamic arrays or inline margin objects are passed on every render, causing severe thrashing.
**Action:** Always wrap dynamically generated data arrays passed to Recharts with `useMemo`, and extract static configuration objects like margins outside component bodies to preserve reference equality.
