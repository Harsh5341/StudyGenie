
## 2024-05-18 - [Recharts Re-renders]
**Learning:** Passing dynamically generated arrays or object literals (like `margin={{ top: 20 }}`) directly into Recharts components causes severe layout thrashing because the reference equality check fails on every parent re-render, forcing a full SVG recalculation. Also, geometric props passed to Recharts `Label` content functions (x, y, width, height) can be undefined or strings, leading to TypeScript errors and runtime bugs if not explicitly coerced to numbers.
**Action:** Always wrap Recharts data arrays in `useMemo`, extract static objects (like margins) outside the component body, and ensure strict number coercion inside `Label` render props.
