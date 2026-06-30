## 2024-03-01 - Recharts Memoization and Static Object Extraction
**Learning:** Recharts components can be computationally expensive. Recreating data arrays (like Object.entries mappings) or static inline configuration objects (like margin={{ top: 20... }}) on every render breaks reference equality, causing Recharts to perform full, expensive SVG layout recalculations unecessarily.
**Action:** Always wrap Recharts data calculations in useMemo and extract static configuration objects outside the component body to maintain reference equality and prevent unnecessary downstream recalculations.
