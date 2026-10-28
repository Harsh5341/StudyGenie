## 2026-10-28 - Recharts unnecessary re-renders
**Learning:** Passing dynamically generated data arrays or objects to Recharts components without memoization causes expensive full SVG layout recalculations on every render, as Recharts checks for reference equality on the data array.
**Action:** Always wrap data passed to Recharts in React.useMemo.
