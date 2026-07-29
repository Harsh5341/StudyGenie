## 2026-07-29 - Recharts Performance Optimization
**Learning:** Recharts triggers expensive SVG layout recalcs if inline array literals (e.g. `margin={{ top: 20 }}`) or dynamically mapped datasets are passed directly as props.
**Action:** Always extract static configurations to constants outside the React component, and `useMemo` for dynamically transformed charting data (like `heatmapData`) to preserve reference equality.
