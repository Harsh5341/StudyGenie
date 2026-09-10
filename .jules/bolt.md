## 2026-09-10 - Optimize Recharts by memoizing data arrays
**Learning:** Passing dynamically generated data arrays to Recharts components without memoization causes expensive full SVG layout recalculations on every render, because reference equality fails.
**Action:** Always wrap dynamically generated data arrays or objects intended for Recharts in `useMemo` to maintain reference equality and prevent unnecessary re-renders and performance bottlenecks.
