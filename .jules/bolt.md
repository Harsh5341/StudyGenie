## $(date +%Y-%m-%d) - Recharts Geometric Properties Typing
**Learning:** Recharts custom render functions (like `<Label content={({x, y, width, height}) => ...} />`) can type geometric properties as `number | string` or `undefined`. Performing arithmetic on these directly without type-guards causes strict TypeScript compilation failures.
**Action:** Always explicitly type-guard these geometric properties (e.g., `const posX = typeof x === 'number' ? x : 0;`) before using them in calculations to pass `npm run typecheck`.
