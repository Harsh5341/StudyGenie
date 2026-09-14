## 2024-05-18 - Recharts Reference Equality
**Learning:** When passing dynamically generated data arrays to Recharts components, they must be wrapped in useMemo to maintain reference equality and avoid triggering expensive full SVG layout recalculations on every render.
**Action:** Always wrap Recharts data props in useMemo when they are derived from component props or state.
