## 2026-09-11 - Recharts dynamic arrays causing expensive re-renders
**Learning:** Passing dynamically generated arrays directly to Recharts components breaks reference equality on every render. This triggers expensive full SVG layout recalculations even when the underlying data hasn't changed, acting as a significant bottleneck in this React architecture.
**Action:** Always wrap dynamically generated data arrays or objects passed to Recharts components in `useMemo` to maintain reference equality and avoid unnecessary SVG recalculations.
