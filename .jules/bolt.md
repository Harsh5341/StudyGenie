## 2024-05-27 - Recharts Strict Type Coercion
**Learning:** Recharts custom label rendering passes geometric props (`x`, `y`, `width`, `height`) which are often loosely typed and can be strings under the hood depending on chart configuration, leading to tricky arithmetic bugs or NaN errors.
**Action:** Always explicitly coerce Recharts geometric props to numbers (e.g., `Number(x)`) when performing calculations inside custom render functions.
