## 2024-05-14 - Fix Type Errors in Recharts Custom Label
**Learning:** Recharts custom label geometric properties like `x`, `y`, `width`, and `height` are typed as `number | string` or `undefined`.
**Action:** When using mathematical operations on these properties, you must explicitly type-guard them (e.g., `typeof x === 'number' ? x : 0`).
