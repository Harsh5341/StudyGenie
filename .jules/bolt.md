## 2025-05-18 - Prevent Unnecessary Recharts Re-renders
**Learning:** Recharts components are very sensitive to object/array references passed via props (like `data`). If new object/array references are created on every render (e.g., dynamically filtering, mapping, or initializing arrays inline), it forces Recharts to recalculate its internal SVGs on every parent render, causing significant main-thread blocking on complex charts.
**Action:** Always wrap derived chart data arrays/objects (like `quizData` and `heatmapData`) in `React.useMemo` to maintain referential stability.
