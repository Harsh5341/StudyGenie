## 2026-04-19 - Recharts Custom Label Geometric Props
**Learning:** Geometric props (like x, y, width, height) provided by Recharts custom render components can unexpectedly be typed as strings or be undefined, leading to runtime arithmetic bugs and TypeScript errors.
**Action:** When destructuring geometric props from Recharts, always explicitly coerce them to numbers and provide fallbacks (e.g., `Number(x) || 0`).
