## 2026-08-27 - Recharts Performance Optimization
**Learning:** When passing dynamically generated data arrays to Recharts components, always wrap them in `useMemo` to maintain reference equality and avoid triggering expensive full SVG layout recalculations on every render.
**Action:** Ensure dynamic props passed to Recharts (like arrays) are memoized, especially if they depend on primitive state or props.
