## 2026-07-06 - Optimizing Recharts Re-renders and Type Safety
**Learning:** Dynamic arrays/objects passed to Recharts triggers expensive full SVG layout recalculations on every render, and geometric props (x, y, width, height) in custom components like `Label` can arrive as strings or undefined causing arithmetic errors in strict environments.
**Action:** Always wrap Recharts `data` props in `useMemo`, extract inline margin configurations to static constants outside the component, and strictly coerce geometric props to numbers (e.g. `Number(x) || 0`) when performing custom rendering.
