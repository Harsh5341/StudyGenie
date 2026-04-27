## 2024-05-19 - Recharts Layout Thrashing
**Learning:** Recharts recalculates the SVG layout every time the `data` array or inline config objects (like `margin`) change their references. In Next.js App Router applications, this causes severe layout thrashing and unnecessary React component re-renders. Additionally, custom component geometric props in Recharts (like `x`, `y`, `width`, `height` in a `<Label>`) can be `string | number | undefined`, causing TypeScript compilation errors and potential layout bugs if not explicitly coerced to numbers before arithmetic operations.
**Action:** When using Recharts with dynamically computed data or inline properties:
1. Always wrap the `data` arrays in `useMemo`.
2. Extract static objects like `margin={{ top: 20... }}` outside the component scope to preserve reference equality.
3. Explicitly coerce geometric props using `Number(prop) || 0` inside custom Recharts label/shape functions to prevent math failures and pass `tsc` strict checks.
