## 2024-07-02 - Memoizing Recharts Data
**Learning:** Recharts recalculates and redraws the entire SVG chart on every render if data arrays or config objects (like `margin={{...}}`) are passed as inline literals because their reference equality changes.
**Action:** Always wrap dynamically generated chart data arrays in `useMemo` and extract static configuration objects outside the React component body.
