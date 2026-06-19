## 2024-06-19 - Recharts Margins Optimization
**Learning:** Recharts charts will recalculate layout if margin objects change between renders. Also, geometric props like x, y, width, height passed to `<Label>` components can be strings or undefined, and require explicit numerical coercion to satisfy strict TypeScript and avoid string-number concatenation bugs when doing math operations.
**Action:** Extract margin objects (e.g. `margin={{ top: 20... }}`) to static module constants, and always enforce numerical types inside Recharts custom label content functions.
