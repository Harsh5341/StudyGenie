## 2026-08-04 - Recharts Re-render Optimization
**Learning:** Passing inline object props (like margin) or unmemoized arrays to Recharts components triggers expensive full SVG layout recalculations on every render due to broken reference equality.
**Action:** Always extract static configuration objects outside of React components and wrap dynamically generated data structures for charts in `useMemo`.
