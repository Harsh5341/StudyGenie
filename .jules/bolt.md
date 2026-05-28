## 2026-05-28 - [Recharts Object Reference Equality]
**Learning:** [Recharts components, when passed inline configuration objects or unmemoized derived data arrays, trigger complete re-evaluations and re-renders of their underlying SVG trees on every parent render cycle, creating significant React reconciliation overhead.]
**Action:** [Always extract static configuration props (like margins) outside the React component body and strongly type Recharts label parameters while wrapping derived dataset arrays in useMemo hook]
