## 2023-11-20 - Memoization of Recharts Data
**Learning:** Recharts recalculates the entire SVG layout on every render if the data array identity changes. This is especially expensive in a dashboard component that passes dynamically constructed objects or arrays (e.g. `quizData`, `heatmapData`) directly into Recharts components.
**Action:** Always wrap data passed to Recharts in `React.useMemo` to maintain object identity across renders unless the data truly changes.
