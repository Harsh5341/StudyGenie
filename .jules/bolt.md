## 2026-08-20 - Recharts Performance and Typing
**Learning:** Recharts requires data props to be memoized to prevent expensive full SVG layout recalculations on every render. Additionally, geometric properties in custom render functions (like `Label`) are typed as `number | string` or `undefined`, requiring explicit type guards before mathematical operations to pass strict TypeScript checks.
**Action:** Always wrap Recharts data arrays/objects in `useMemo` and explicitly type-guard geometric properties in custom render functions.
