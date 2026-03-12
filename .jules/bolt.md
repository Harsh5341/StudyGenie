
## 2024-10-27 - Parallelized translateContent API calls
**Learning:** Sequential async API calls inside `.map` and top-level block scope are significant performance bottlenecks. `translateContent` previously executed over 10 sequential translation requests per study guide.
**Action:** Always inspect loops and async logic block structure. Utilize `Promise.all` inside mapped array functions and at the top-level resolution to dispatch parallel networking requests whenever there is no dependency cascade.
