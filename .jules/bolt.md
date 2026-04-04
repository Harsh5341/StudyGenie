## 2024-03-24 - Recharts Strict Type Requirements
**Learning:** Recharts passes geometric properties (x, y, width, height) to render props like `<Label content={...}>` as `string | number | undefined`. Attempting arithmetic on them without explicit coercion fails TypeScript validation (`npm run typecheck`) and can cause `NaN` errors at runtime.
**Action:** Always safely coerce Recharts geometric props using `Number(val || 0)` before using them in arithmetic calculations.
