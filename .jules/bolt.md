## 2024-03-07 - [Bundle Size Optimization]
**Learning:** Recharts is a heavy library that can significantly increase the First Load JS size in Next.js applications when imported statically on the main page.
**Action:** Always lazy load components that use heavy charting libraries (like Recharts) using `next/dynamic` if they are not immediately visible above the fold or critical for the initial render.
