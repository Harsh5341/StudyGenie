## 2024-05-18 - Recharts Reference Equality
**Learning:** Recharts triggers deep recalculations and layout thrashing if object/array props (like `margin` or dynamically built data arrays) don't have stable reference equality across renders.
**Action:** Always extract static config objects outside the component and wrap derived chart data structures in `useMemo`. Also, Recharts can unexpectedly pass undefined or string values for geometric props in custom shapes/labels (like `x`, `y`, `width`, `height`), which requires explicit Number coercion for strict TypeScript compliance.
