## 2026-07-23 - Recharts Performance Optimization
**Learning:** Recharts triggers expensive full SVG recalculations and layout thrashing when dynamically generated arrays or objects are passed as data props without memoization. Inline objects like margins also break reference equality.
**Action:** Always wrap dynamically generated arrays/objects passed to Recharts in useMemo, and extract static configurations like margins outside the component body.
