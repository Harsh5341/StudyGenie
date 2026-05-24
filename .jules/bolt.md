## 2024-05-24 - [Recharts Optimization]
**Learning:** Extracting static configurations and wrapping generated arrays in `useMemo` for Recharts components minimizes expensive full SVG recalculations, ensuring high performance during re-renders. Also, when calculating inline props like x/y in labels, explicitly cast strings to numbers to avoid TypeScript Type coercion errors.
**Action:** Always extract constant geometric configurations outside the component and use `useMemo` for any dynamic datasets given to heavy visual components like `<BarChart>`.
