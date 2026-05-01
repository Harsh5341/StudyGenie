## 2024-05-01 - Recharts Component Re-rendering Fix
**Learning:** In Next.js with Recharts, passing inline arrays to 'data' props and inline objects to 'margin' props inside React component bodies causes expensive SVG recalculations on every render.
**Action:** Always wrap Recharts data arrays in 'useMemo' and extract static config objects like margins outside the component to prevent layout thrashing.
