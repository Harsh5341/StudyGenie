## 2024-05-18 - Recharts Prop Typings Require Explicit Casting
**Learning:** Geometric props provided to custom renderers in Recharts (like Label content) can sometimes be typed as strings or dynamically calculated string/number unions, leading to implicit coercion errors in arithmetic or strict validation failures.
**Action:** Always wrap Recharts geometric props (`x`, `y`, `width`, `height`) in `Number()` when performing arithmetic inside custom SVG component renderers to avoid typing/arithmetic issues, as verified during validation.
