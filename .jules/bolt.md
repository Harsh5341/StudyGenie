## 2026-07-24 - Recharts Performance and TypeScript Fix
**Learning:** Recharts data arrays and margin props must be stabilized (memoized or extracted) to prevent unnecessary full SVG recalculations. Geometric props (x, y, width, height) in Recharts custom labels can be strings or undefined and must be strictly coerced to numbers to satisfy strict TypeScript validation and avoid arithmetic errors.
**Action:** Wrap Recharts data arrays in useMemo and extract static margin props outside component bodies. Explicitly coerce geometric label props to numbers using Number().
