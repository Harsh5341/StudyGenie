## 2024-05-18 - Recharts Geometric Props Coercion
**Learning:** When implementing custom labels in Recharts components, geometric properties (`x`, `y`, `width`, `height`) are often dynamically typed as `string | number | undefined`. Attempting direct arithmetic operations (e.g., `x + width / 2`) can lead to strict TypeScript errors or unintended string concatenation.
**Action:** Always explicitly safely coerce geometric properties to `Number` (e.g., `Number(x)`) inside custom Recharts label rendering functions to satisfy TypeScript and guarantee mathematically safe offset calculations.
