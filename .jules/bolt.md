## 2024-05-24 - Debouncing Top-Level Uncontrolled Inputs
**Learning:** In React architectures where heavy components (like Recharts in `ProgressDashboard`) exist, directly binding an `onChange` handler from an uncontrolled input deep in the tree to a state setter at the root level (`StudyGenieApp`) causes devastatingly slow keystroke performance.
**Action:** Always debounce state updates from inputs if that state update forces a re-render of complex child components, or move the typing state closer to the input and use a debounced callback or form submission to propagate changes up.
