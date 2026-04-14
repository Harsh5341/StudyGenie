## 2025-02-28 - Recharts Data Memoization and Static Properties
**Learning:** Recharts triggers deep equality checks or re-renders when data arrays or inline style/margin properties are recreated on every React render cycle.
**Action:** Always wrap Recharts data arrays in `useMemo` and extract static configuration objects (like `margin={{...}}`) out of the component body to maintain reference equality and prevent unnecessary SVG recalculation overhead. Also, coerce geometric properties in custom Recharts `Label` components to `number` to satisfy strict TypeScript checking.
