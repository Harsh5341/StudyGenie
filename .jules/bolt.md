## 2024-05-19 - Avoid Recharts Layout Thrashing
**Learning:** Recharts triggers expensive SVG recalculations on every render when dynamic arrays/objects are passed directly to its properties (e.g. data arrays, margin objects). Even simple `map` operations inline cause this.
**Action:** Always wrap Recharts data arrays in `useMemo` and extract static configuration objects (like `margin`) outside of the component body to preserve reference equality.
