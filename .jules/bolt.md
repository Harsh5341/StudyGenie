## 2026-09-15 - Memoizing Recharts Data Props
**Learning:** Recharts triggers expensive full SVG layout recalculations if dynamically generated data arrays are passed without reference equality, causing significant frontend performance bottlenecks.
**Action:** Always wrap dynamically generated data arrays or objects passed to Recharts components in useMemo to maintain reference equality.
