# Connector research — converged external Opus input

Observed: 2026-08-27  
Source report: [Connectors: licensing + catalog-size findings](../../../../connectors-licensing-2026-08-27.md)

## Outcome

The connector lane's final research recommendation is to use OpenConnector's provider catalogue and OAuth engine as the permissively licensed starting point, while building an Actionist-owned connection store and tenancy boundary. A completed execution spike proved the catalogue, encryption, credential verification, authenticated action execution and OAuth authorization setup work. It also demonstrated that OpenConnector's flat connection store is unsuitable as the production Actionist tenancy layer.

The report also identifies Activepieces' unauthenticated catalogue API as a second source of structured connector specifications. This removes the proposed need for an AST extractor for that catalogue.

## Measured findings

- OpenConnector: 1,445 provider definitions reported as verified in-repository; Apache-2.0 project boundary, with provider-icon licensing still unverified.
- Activepieces: 761 pieces from the public catalogue endpoint; authentication mix reported as 374 `SECRET_TEXT`, 205 `CUSTOM_AUTH`, 96 `OAUTH2`, 75 without auth and 11 `BASIC_AUTH`.
- The Slack piece exposed 28 actions, 14 triggers and 30 OAuth scopes in the live per-piece response used by the research lane.
- Nango: 982 providers; 895 declarative and 87 scripted. Among the 36 `popular` providers, 17 are scripted, making marquee connectors materially more expensive than the long tail.
- Nango `SimplifiedJSONSchema`: 434 providers reportedly carry enough ordered/conditional field metadata to drive generated setup forms.
- Search campaign: 170 candidates, 10 deep reads, 24 agents and approximately 1.73M sub-agent tokens. Two agents ended mid-response, but their topics were covered by other reads and the lane's direct verification.
- Execution spike: Node 22 installed 423 packages; the local generator produced 1,445 providers and 15,156 actions; a no-auth Hacker News action and an authenticated GitHub action both executed successfully.
- Credential receipts: real GitHub credentials, OAuth client secrets and OAuth state were encrypted at rest; a fake token was rejected before persistence; a credential profile was resolved automatically.
- OAuth receipt: a correctly parameterized Google Drive authorization URL was generated. Callback completion and refresh remain untested because they require an operator-owned Google OAuth application.
- Tenancy falsifier: two named GitHub connections were visible together through one admin token; the connection table has no tenant column, OAuth client configuration is global per service and key derivation uses a global hardcoded salt.
- Safe deployment requires three independent settings: encryption key, admin token and runtime token.

These numbers are receipts from the final connector report, not admissions into the Actionist block registry.

## Architecture implications

1. Treat a connector catalogue, credential runtime and tenant connection store as separate governed blocks.
2. Import declarative provider metadata where rights and identity permit; do not promise equal effort for scripted marquee providers.
3. Generate setup forms from constrained provider schemas instead of maintaining one React component per connector.
4. Use short-lived, capability-scoped runtime tokens; stable external IDs; refresh locks; explicit refresh errors; envelope-encryption AAD; and lazy executor loading.
5. Keep catalogue-only, needs-credential and locally-executable states distinct so a listed integration is never mistaken for an executable one.

## Open gates

- Provider icon licensing is unverified.
- Actionist tenancy, ownership, audit and secret-store contracts remain undefined.
- No connector has been admitted as a governed block.
- No client data or authenticated vendor account was used by this research packet.
- Provider counts are dominated by API-key integrations: OpenConnector reported 1,302 API-key and 103 OAuth2 providers. The evidence supports implementing the API-key path before OAuth.
- The execution spike was cleaned up: its server, SQLite credential database, clone, dependencies and throwaway keys were removed from session scratch space after receipts were written.

## Boundary

This is an external input to Phase 8. The connector spike itself is `EXECUTED_CLEANED`, but Phase 8 remains unpromoted: admission `NOT_ADMITTED`, admitted blocks `0`, parent goal `active`.
