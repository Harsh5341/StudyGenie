## 2024-04-10 - Recharts Object References
**Learning:** Recharts is highly sensitive to object reference changes. Passing inline objects like `margin={{ top: 20... }}` directly into components forces the entire SVG chart to recalculate layout and rerender on every parent render cycle, even if the underlying values haven't changed.
**Action:** Always extract static configuration objects (like `margin` or `padding`) outside of React component bodies, and wrap dynamically computed array data (like Recharts `data={...}`) in `useMemo`.
