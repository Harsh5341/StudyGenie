## 2024-06-17 - Recharts Object Reference Equality
**Learning:** Passing inline dynamically generated arrays or objects (like margins) to Recharts components triggers expensive full SVG recalculations and layout thrashing.
**Action:** Always wrap data props in useMemo and extract static configuration objects outside the component body.
