## 2026-09-16 - Optimize Recharts rendering with useMemo
**Learning:** When passing dynamically generated data arrays or objects to Recharts components, always wrap them in useMemo to maintain reference equality and avoid triggering expensive full SVG layout recalculations on every render.
**Action:** Wrap quizData and heatmapData arrays in useMemo in ProgressDashboard.tsx.
