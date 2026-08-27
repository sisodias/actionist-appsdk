# Open first-principles questions

## Problem and market

1. Which single client outcome has the strongest combination of pain, willingness to pay, repeatability and reusable supply?
2. Are the 17 industries the correct market partitions, or should selection begin from workflow archetypes independent of industry?
3. Which industry differences materially change software architecture rather than language and configuration?
4. What evidence would make us kill the semi-custom assembly thesis and build focused vertical products conventionally?

## Capability and reuse

5. What is the minimum semantic `CapabilityContract` that works for a service, embedded module and extracted package?
6. Can one source yield several capabilities and packaging variants without identity confusion?
7. What objective signals predict extraction/adaptation effort?
8. At what point is transplantation cheaper than maintaining an adapter to upstream?
9. Which donor concerns can be standardized through host adapters: branding, onboarding, settings, navigation, identity, billing, notifications and audit?
10. How do we represent a complete application template without making it an indivisible monolith?

## Data plane

11. What state classes do the first 100 high-value capabilities actually require?
12. What operations must the typed data port support: CRUD, transactions, subscriptions, bulk operations, search, files, analytics, schema introspection?
13. Can owned Postgres resources and donor-native resources participate in one product workflow without hidden dual writes?
14. When are events/read models sufficient, and when is synchronous cross-system consistency required?
15. Should each client have one database, one schema, separate service stores or a hybrid?
16. What is the migration and rollback model for an assembled application release?

## Identity, settings and host absorption

17. What is the canonical Actionist identity/session contract?
18. How does a mature donor accept host identity without retaining reachable donor signup/login flows?
19. Which settings are global, tenant, application, capability and user scoped?
20. Can settings/navigation/onboarding surfaces be declared and remounted, or will each donor need bespoke surgery?
21. How are feature permissions and external-action approvals represented consistently?

## Connectors

22. What is the canonical provider/action/trigger schema?
23. Which providers require scripted setup beyond declarative schemas?
24. How does Actionist own tenant connection storage while reusing external catalogues and OAuth engines?
25. What is the idempotency, retry, rate-limit and receipt contract for side effects?
26. When should browser automation be a connector runtime rather than a separate application feature?

## UI and product composition

27. What are the reusable levels: token, primitive, component, pattern, page, workflow and shell?
28. How should 8,515 UI identities be deduplicated and scored by visual/interaction quality?
29. Can design-token adaptation preserve donor UI quality without flattening every product into one generic aesthetic?
30. Is user preference selection through galleries measurably better than chat descriptions?
31. Which shell best serves case/workflow, portal, CRM, support and operations archetypes?
32. How much donor UI should remain intact versus be rebuilt using Actionist components?

## Composition and agents

33. Which compatibility constraints are mechanical before source execution?
34. What information makes the solver return `UNDERDETERMINED`, and which domain must supply it?
35. What portion of adaptation can be represented as repeatable transforms?
36. Which model class is required for source understanding, planning, adaptation and verification?
37. Does plan-then-fill outperform direct code generation on first-pass workflow success, tokens and repair loops?
38. How should the system choose between a complete donor service and several smaller blocks?

## Runtime and operations

39. Which runtime profiles are required for v1: package, microfrontend, iframe, sidecar, service, worker, cron?
40. What should be rented versus operated for sandbox previews and deployment?
41. How are runtime health, logs, versions and failures attributed to individual capabilities?
42. Can one capability be upgraded or rolled back independently without invalidating the application composition?
43. What is the minimal local/preview environment that faithfully predicts production?

## Evidence and learning

44. What does “quality” mean per capability kind: correctness, UX, maintainability, performance, adaptability, observability or production history?
45. Which isolated receipts predict whole-workflow success?
46. How do production incidents and client outcomes update asset rankings?
47. What are the denominators for build success, maintenance burden and client value?
48. What is the cost per accepted application, per workflow and per maintained client?
49. Which research counters are structurally complete but semantically shallow?
50. Where is the authoritative 1.3M/850k/80k corpus, and what is actually indexed?

## Questions that should not consume another broad research loop yet

- “Can we find more repositories?” Almost certainly yes; that does not test reuse.
- “Can we list more Lovable competitors?” Yes; the current bottleneck is evidence depth and architecture, not names.
- “Can we create more industry×repository rows?” Yes; earlier waves proved count growth can hide identity and evidence gaps.
- “Which database brand wins universally?” No universal winner exists without workload classes and ownership constraints.
- “Can an agent automate all of this?” The useful question is which decisions can be made mechanically, which can be model-assisted and which require accountable product judgment.
