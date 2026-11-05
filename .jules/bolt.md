## 2024-11-05 - Recharts layout recalculation
**Learning:** Passing dynamically generated data arrays to Recharts components causes them to lose reference equality on every render, triggering expensive full SVG layout recalculations. Additionally, strict TypeScript requires type-guarding geometric properties in Recharts custom render functions (like `<Label content={...} />`).
**Action:** Always wrap Recharts data arrays in `useMemo`, and explicitly type-guard `x`, `y`, `width`, and `height` parameters in custom render functions.
