## 2026-07-11 - Recharts Performance Optimization
**Learning:** Recharts recalculates SVGs expensively if arrays or inline object configs (like margin) change reference equality on every render.
**Action:** Extract static config objects outside of component body and wrap dynamically generated arrays for Recharts components in useMemo.
