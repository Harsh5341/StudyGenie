
## 2024-05-02 - Recharts Component Re-rendering Optimization
**Learning:** Recharts components are susceptible to severe performance degradation through unnecessary SVG recalculations if object props (like `margin` config objects or dynamically generated data arrays) are passed inline during rendering, as they create new references on every cycle.
**Action:** Always extract static configuration objects (e.g. `margin={{ top: 10 }}`) to constants outside of the component body, and use `useMemo` for derived array/object inputs to ensure reference equality between renders and prevent costly full-chart layouts.
