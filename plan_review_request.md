1. **Fix TypeScript errors and memoize data arrays in `src/components/app/ProgressDashboard.tsx`**:
   - Explicitly import `useMemo` from 'react'.
   - Use `useMemo` to memoize `quizData` and `heatmapData` array creation to prevent expensive recalculations on re-renders, adhering to Recharts performance optimization best practices.
   - Extract inline `margin` objects out of the component to prevent reference inequality and unnecessary child component re-renders.
   - Fix the `Label` custom render content type issues by safely coercing `x`, `y`, `width`, and `height` to numbers, resolving TypeScript errors and ensuring no runtime crashes.
2. **Add a learning entry to `.jules/bolt.md`**:
   - Write a journal entry documenting the importance of memoizing Recharts data arrays and extracting static config objects to prevent layout thrashing and unnecessary SVG recalculations.
3. **Verify the changes using `npm run typecheck` and `npm run build`**:
   - Ensure the TypeScript errors are fixed and the build passes.
4. **Complete pre-commit steps**:
   - Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.
5. **Submit the Pull Request**:
   - Create a PR with a performance-focused title and a structured description including 'What', 'Why', 'Impact', and 'Measurement'.
