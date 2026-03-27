
## 2024-03-27 - Recharts Optimization with useMemo
**Learning:** Dynamically generated arrays (like from `.map()`) passed to Recharts components trigger expensive full SVG recalculations and layout thrashing on every render if they are not reference-stable. Additionally, passing string values to Recharts' inner geometric props (like `x`, `y`, `width`, `height` in a custom `Label`) can cause arithmetic issues in strict environments.
**Action:** Always wrap dynamically generated arrays or objects passed to Recharts data props in `useMemo`. Explicitly cast internal geometric string props to `Number()` before performing arithmetic.
