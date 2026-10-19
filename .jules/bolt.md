## 2024-05-14 - Type Guarding Recharts
**Learning:** Recharts custom render functions (like `<Label content={({x, y, width, height}) => ...} />`) type their geometric properties as `number | string` or `undefined`.
**Action:** When using Recharts geometric properties in math operations, explicitly type-guard them (e.g., `const safeX = typeof x === 'number' ? x : 0;`) to avoid TypeScript compilation errors.
