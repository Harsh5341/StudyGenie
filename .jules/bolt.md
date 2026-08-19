## 2026-08-19 - [Memoize Recharts Data arrays]
**Learning:** When passing dynamically generated data arrays or objects to Recharts components, you MUST wrap them in `useMemo` to maintain reference equality. Otherwise it triggers expensive full SVG layout recalculations on every render.
**Action:** Always wrap Recharts `data` props in `useMemo` when the data is derived from props.
