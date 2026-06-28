
## 2024-05-24 - Recharts Strict Type Coercion
**Learning:** When passing custom render functions in Recharts, geometric properties like `x`, `y`, `width`, and `height` might be typed loosely or passed as strings/`undefined` depending on the chart structure, leading to TypeScript errors when performing arithmetic operations.
**Action:** Always explicitly coerce geometric properties in Recharts custom renders to numbers (e.g., `Number(x || 0)`) before performing arithmetic to ensure strict TypeScript validation passes.
