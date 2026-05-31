## 2024-05-31 - Recharts Optimization
**Learning:** Recharts components often cause excessive re-renders when data arrays or configuration objects (like `margin={{ top: ... }}`) are created inline, forcing React to recreate elements on every render.
**Action:** Always extract static configuration objects outside the component body and wrap dynamically generated array data in `useMemo` when passing to Recharts to prevent unnecessary DOM recalculations.
