## 2026-06-03 - Recharts Custom Label Types
**Learning:** When passing custom components to Recharts `<Label>` content, geographic props (x, y, width, height) arrive typed as `number | string | undefined`. Performing arithmetic blindly will throw type errors or render `NaN`.
**Action:** Always extract and coerce geographic values with a safe fallback (e.g., `const safeX = Number(x) || 0;`) before attempting layout math inside custom chart label renderers.
