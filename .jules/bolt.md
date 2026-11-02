## 2026-11-02 - Recharts Performance and Typing
**Learning:** Passing dynamically generated, unmemoized arrays to Recharts components forces expensive full SVG layout recalculations on every render. Additionally, geometric properties in Recharts custom render functions (like `<Label content={...} />`) are typed as `number | string | undefined` and must be type-guarded before use in math.
**Action:** Always wrap data passed to Recharts in `React.useMemo`. Always type-guard geometric properties in Recharts render functions.
