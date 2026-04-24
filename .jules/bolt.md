## 2024-04-24 - Recharts Prop Strictness
**Learning:** Recharts can sometimes supply coordinate properties (`x`, `y`, `width`, `height`) in label content rendering functions as `number | string` or even undefined, leading to strict TypeScript compilation errors if unhandled, requiring type coercion.
**Action:** When working with Recharts layout components and custom shapes, explicitly cast or handle these geometric coordinate props as `Number()` before performing math operations to pass strict validation.
