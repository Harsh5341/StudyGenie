## 2024-05-24 - Recharts Referential Equality Issue
**Learning:** Recharts components in this application trigger extremely expensive, full SVG recalculations and layout thrashing when their `data` or configuration props (like `margin`) change reference, even if their contents remain identical. This occurs frequently with inline dynamic array creation and inline object configuration.
**Action:** Extract static configuration (like `margin`) outside of component definitions, and consistently use `useMemo` for any dynamically generated `data` arrays passed to Recharts.
