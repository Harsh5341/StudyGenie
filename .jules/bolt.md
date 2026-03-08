
## 2026-03-08 - Parallelizing AI requests with Promise.all
**Learning:** In Next.js Server Actions with AI operations, independent `await` calls (e.g., `await translate()`) execute sequentially, especially across properties or inside nested loops like `Array.map`. A study guide translation can trigger dozens of sequential LLM round-trips if left unoptimized, drastically increasing latency.
**Action:** When translating or processing multiple independent pieces of content via AI endpoints, always wrap all independent top-level keys and nested mapped arrays in heavily nested `Promise.all` batches. Doing so collapses total latency to roughly the duration of the single longest request.
