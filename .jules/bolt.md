
## 2026-07-21 - Recharts Performance Anti-Pattern
**Learning:** Recharts <BarChart> and similar components trigger expensive full SVG recalculations if object props (like data arrays or margin objects) change their reference equality on every render, even if the underlying values are identical.
**Action:** Always wrap dynamically generated arrays (like mapped data from props) passed to Recharts in useMemo(), and hoist static inline margin objects to constants outside the React component body to prevent unnecessary layout thrashing.
