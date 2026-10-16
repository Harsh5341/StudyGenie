## 2026-10-16 - Recharts Data Prop Reference Equality
**Learning:** Recharts triggers expensive full SVG layout recalculations if the `data` prop array reference changes. Passing unmemoized dynamically generated arrays or objects causes massive rendering overhead for charts.
**Action:** Always wrap dynamically generated data structures passed to Recharts in `React.useMemo` to maintain reference equality and prevent unnecessary SVG recalculations.
