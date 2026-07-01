## 2024-07-01 - Recharts Geometry Prop Typing
**Learning:** Recharts custom shape/label geometry properties (like `x, y, width, height`) can be passed natively as strings or undefined. Performing arithmetic on these props without explicit numeric coercion inside a `Next.js` strict `tsc` setup causes blocking TypeScript errors (`TS2365: Operator '+' cannot be applied to types 'string | number' and 'number'`).
**Action:** When creating custom labels or elements in Recharts components, safely coerce all geometric props using `Number(x)` before applying arithmetic formulas.
