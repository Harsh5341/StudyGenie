## 2025-02-28 - Avoid redundant layout calculation in ProgressDashboard
**Learning:** Recharts triggers unnecessary layout recalculations on every render if complex data props are passed inline (e.g., dynamically mapped arrays in object literals) because reference equality check fails.
**Action:** Always wrap data objects/arrays passed to Recharts in `useMemo` when they are computed from props, to preserve object reference between renders unless underlying data changes.
