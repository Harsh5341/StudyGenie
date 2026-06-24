## 2024-11-20 - Recharts Component Optimization
**Learning:** In Next.js/React applications using Recharts, passing inline objects (like `margin={{ top: 20... }}`) or dynamically generated unmemoized arrays as props to chart components causes expensive, unnecessary SVG recalculations and layout thrashing on every render, even if the underlying data hasn't changed.
**Action:** Always extract static configuration objects outside of the component body, and wrap dynamically generated data arrays intended for Recharts in `useMemo` to preserve reference equality.
