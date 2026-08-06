## 2026-08-06 - [Optimize Recharts Rendering]
**Learning:** Recharts components often trigger expensive full SVG layout recalculations if dynamically generated arrays/objects (like data arrays or inline margin props) are passed directly in the render method without referential equality.
**Action:** Always wrap dynamically generated data for Recharts in useMemo and extract static configuration objects (e.g., margins) outside of component bodies to preserve referential equality and improve render performance.
