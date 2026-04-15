## 2024-04-15 - Extracted margin configurations in Recharts
**Learning:** Recharts triggers unnecessary and expensive full SVG recalculations if geometric props or inline margin configuration objects are redefined on every render in React.
**Action:** Extract static configuration objects like margins outside the component and memoize data dynamically generated arrays for `<BarChart>` and similar Recharts components to maintain referential equality across renders.
