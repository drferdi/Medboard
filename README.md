<table width="100%">
<tr>
<td width="34%" align="center" valign="top">

<img src="https://i.ibb.co.com/jZwfy0vB/drferdiikskandar.png" alt="dr. Ferdi Iskandar" width="150" />
<br />
<b>dr. Ferdi Iskandar</b><br />
Lead Architect
<br />
<a href="https://ferdiiskandar.com">
  <img src="https://img.shields.io/badge/FERDIISKANDAR.COM-0D1117?style=for-the-badge&logo=vercel&logoColor=white" alt="Official website" />
</a>
<br />
<img src="https://img.shields.io/badge/KEDIRI%20INDONESIA-22D3EE?style=flat-square" alt="Kediri Indonesia" />
<img src="https://img.shields.io/badge/UTC%2B7-5B8CFF?style=flat-square" alt="UTC+7" />

</td>
<td width="66%" valign="top">

SENTRA / MEDBOARD

<img src="public/intelligenceboard.png" alt="MedBoard" width="92" align="right" />

<a href="https://medboard.sentrahai.com">
  <img src="https://readme-typing-svg.demolab.com?font=Caveat&weight=700&size=33&duration=3400&pause=1500&color=EB5939&vCenter=true&width=710&height=44&lines=Clinical%20signals%20in.%20Reviewable%20decisions%20out." alt="Clinical signals in. Reviewable decisions out." />
</a>

<b>Operational signal:</b> Kediri, Indonesia · Clinical operations and decision-support workspace

<a href="https://sentrahai.com/"><b>Sentra Artificial Intelligence</b></a><br />
MedBoard is a clinical intelligence cockpit for Indonesian primary healthcare, combining clinical workflow, EMR integration, real-time coordination, reporting, telemedicine, and audited decision-support surfaces under explicit clinician authority.

<p>
  <a href="https://github.com/drferdi/Medboard" title="GitHub"><img src="https://cdn.simpleicons.org/github/8B949E" width="22" height="22" alt="GitHub" /></a>&nbsp;&nbsp;
  <a href="https://ferdiiskandar.com" title="ferdiiskandar.com"><img src="https://cdn.simpleicons.org/vercel/8B949E" width="22" height="22" alt="ferdiiskandar.com" /></a>&nbsp;&nbsp;
  <a href="https://sentrahai.com/" title="Sentra Artificial Intelligence"><img src="https://cdn.simpleicons.org/googlechrome/8B949E" width="22" height="22" alt="Sentra Artificial Intelligence" /></a>&nbsp;&nbsp;
  <a href="https://medium.com/@drferdiiskandar" title="Medium"><img src="https://cdn.simpleicons.org/medium/8B949E" width="22" height="22" alt="Medium" /></a>&nbsp;&nbsp;
  <a href="https://orcid.org/0009-0003-3788-1307" title="ORCID"><img src="https://cdn.simpleicons.org/orcid/8B949E" width="22" height="22" alt="ORCID" /></a>&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/dr-ferdi-iskandar-1b620a3b5"><img src="https://img.shields.io/badge/LinkedIn-808080?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" height="22" /></a>
</p>

<sub><code>CLINICAL SIGNAL → WORKFLOW / INTEGRATION → VERIFICATION & SAFETY → HUMAN AUTHORITY → CARE ACTION</code></sub>

</td>
</tr>
</table>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.3.6-0D1117?style=flat-square&logo=next.js&logoColor=white" alt="Next.js 16.3.6" />
  <img src="https://img.shields.io/badge/React-19.2.3-149ECA?style=flat-square&logo=react&logoColor=white" alt="React 19.2.3" />
  <img src="https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5.9.3" />
  <img src="https://img.shields.io/badge/Node.js-24-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js 24" />
  <img src="https://img.shields.io/badge/SAFRS-R2-F59E0B?style=flat-square" alt="SAFRS R2" />
  <img src="https://img.shields.io/badge/HUMAN-GOVERNED-14B8A6?style=flat-square" alt="Human governed" />
</p>

01 / ORIGIN SIGNAL

MedBoard is the working clinical surface for primary-care teams who need one place to coordinate patient-facing workflow, operational communication, structured reporting, and integrations that would otherwise be fragmented across separate systems.

The repository implements a Next.js 16 / React 19 application with a custom Node.js server, Socket.IO real-time channels, Prisma/PostgreSQL persistence, Playwright-based ePuskesmas transfer automation, LiveKit telemedicine integration, clinical reference tools, reporting pipelines, and security/audit controls.

The principal users represented by the repository are doctors, dentists, nurses, midwives, pharmacists, triage personnel, and authorized administrators. Clinical outputs remain decision support: diagnosis, prescribing, referral, escalation, and other care decisions stay with the licensed treating clinician.

The repository also carries an explicit standalone project contract. Its lifecycle is defined independently through <code>project.contract.json</code>, with Node 24, pnpm 11.21.0, build/test/typecheck/run commands, HTTP smoke expectations, and external dependency declarations.

-- https://ferdiiskandar.com

<p align="center">
  <img src="https://img.shields.io/badge/SIGNAL-CLINICAL%20WORKFLOW-F43F5E?style=flat-square" alt="Clinical workflow" />
  <img src="https://img.shields.io/badge/SIGNAL-REAL--TIME%20COORDINATION-F59E0B?style=flat-square" alt="Real-time coordination" />
  <img src="https://img.shields.io/badge/SIGNAL-AUDITABLE%20HUMAN%20AUTHORITY-8B5CF6?style=flat-square" alt="Auditable human authority" />
</p>

<table>
<tr>
<td width="33%" valign="top">

<b><code>LAYER I · CLINICAL SURFACE</code></b>

EMR workspace, patient-facing clinical data, calculators, ICD-X lookup, Sentrapedia, telemedicine, reports, and operational dashboards.

</td>
<td width="33%" valign="top">

<b><code>LAYER II · INTEGRATION & COORDINATION</code></b>

Socket.IO, Playwright ePuskesmas transfer, LiveKit, crew access, administrative workflows, reporting pipelines, and optional external services.

</td>
<td width="33%" valign="top">

<b><code>LAYER III · SAFETY & AUTHORITY</code></b>

Authentication, role checks, audit logging, deterministic safety checks, degraded-state behavior, deployment verification, and terminal human clinical authority.

</td>
</tr>
</table>

**Objective:** reduce workflow fragmentation while preserving explicit review, auditability, and clinician control over high-impact care decisions.

02 / DOCTRINE

> [!IMPORTANT]
> **Technology enables; clinicians decide.** MedBoard may structure, surface, transfer, calculate, summarize, or assist. It does not become the final authority for diagnosis, treatment, prescribing, referral, or emergency escalation.

<table>
<tr>
<td width="50%" valign="top">

<b><code>HUMAN AUTHORITY IS TERMINAL</code></b>

Clinical suggestions and workflow automation must terminate at an accountable human reviewer. The treating clinician retains final care authority.

</td>
<td width="50%" valign="top">

<b><code>DEGRADED IS BETTER THAN DECEPTIVE</code></b>

Unavailable or retired clinical services should fail explicitly. The retired MedBoard diagnosis engine and disabled voice lane return service-unavailable behavior instead of pretending to be operational.

</td>
</tr>
<tr>
<td width="50%" valign="top">

<b><code>PHI STAYS BOUNDED</code></b>

Secrets and patient data belong in controlled runtime systems, not source control, fixtures, documentation, or unrestricted logs.

</td>
<td width="50%" valign="top">

<b><code>AUTOMATION MUST REMAIN REVIEWABLE</code></b>

RPA, real-time events, reporting, and AI-supported paths need observable states, failure modes, and a recoverable route back to manual human operation.

</td>
</tr>
<tr>
<td width="50%" valign="top">

<b><code>ONE PROBLEM, THEN DEPTH</code></b>

MedBoard focuses on the primary-care operating surface: capture clinical signals, reduce duplicate work, coordinate care, and present reviewable outputs before expanding automation.

</td>
<td width="50%" valign="top">

<b><code>NO MAGIC WITHOUT AUDIT</code></b>

A result is not trustworthy merely because it was generated. The repository provides explicit tests, security baselines, audit surfaces, health checks, and deployment dry-run checks.

</td>
</tr>
</table>

03 / PRODUCT TOPOLOGY

<p align="center">
  <img src="https://img.shields.io/badge/CLINICAL%20COCKPIT-5B8CFF?style=flat-square" alt="Clinical cockpit" />
  <img src="https://img.shields.io/badge/EMR%20RPA-8B5CF6?style=flat-square" alt="EMR RPA" />
  <img src="https://img.shields.io/badge/REAL--TIME%20SOCKETS-22D3EE?style=flat-square" alt="Real-time sockets" />
  <img src="https://img.shields.io/badge/TELEMEDICINE-14B8A6?style=flat-square" alt="Telemedicine" />
  <img src="https://img.shields.io/badge/SAFETY-F59E0B?style=flat-square" alt="Safety" />
</p>

<details open>
<summary><b><code>LIVE TOPOLOGY // SYSTEM RELATION MAP</code></b></summary>

~~~mermaid
flowchart TB
  HUMAN["CLINICIAN / AUTHORIZED OPERATOR"]
  WEB["MEDBOARD WEB COCKPIT<br/>Next.js + React"]
  SERVER["CUSTOM NODE SERVER<br/>Next.js handler + Socket.IO"]
  DOMAIN["CLINICAL & OPERATIONS MODULES"]
  DATA["POSTGRESQL / PRISMA<br/>+ controlled runtime state"]
  EXT["EXTERNAL INTEGRATIONS<br/>ePuskesmas · LiveKit · Assist/MIRA"]
  GATE["AUTH · SAFETY · AUDIT<br/>VERIFICATION GATE"]
  OUT["REVIEWABLE OUTPUT / WORKFLOW STATE"]
  ACTION["HUMAN-APPROVED CARE OR OPERATION"]

  HUMAN --> WEB
  WEB --> SERVER
  SERVER --> DOMAIN
  DATA --> DOMAIN
  EXT --> DOMAIN
  DOMAIN --> GATE
  GATE --> OUT
  OUT --> HUMAN
  HUMAN --> ACTION
~~~

</details>

<table>
<tr>
<td width="50%" valign="top">

<b><code>01 · CLINICAL COCKPIT</code></b><br />
<b>Primary operating surface</b>

Routes include EMR, ICD-X, calculators, Sentrapedia, telemedicine, intelligence dashboards, audit logbook, crew hub, chat/ACARS, reports, and administration.

<img src="https://img.shields.io/badge/FUNCTION-5B8CFF?style=flat-square" alt="Function" /><br />
<sub>Browser-facing workflow; final clinical decisions remain human.</sub>

</td>
<td width="50%" valign="top">

<b><code>02 · EMR TRANSFER</code></b><br />
<b>Playwright-based workflow automation</b>

Structured clinical data can be transferred toward ePuskesmas through an RPA engine with runtime credentials, progress reporting, and explicit failure states.

<img src="https://img.shields.io/badge/FUNCTION-22D3EE?style=flat-square" alt="Function" /><br />
<sub>Automation is operational assistance, not autonomous clinical authority.</sub>

</td>
</tr>
<tr>
<td width="50%" valign="top">

<b><code>03 · REAL-TIME COORDINATION</code></b><br />
<b>Socket.IO-backed event channels</b>

The custom server provides real-time communication for crew presence, clinical/operational events, and intelligence surfaces.

<img src="https://img.shields.io/badge/FUNCTION-14B8A6?style=flat-square" alt="Function" /><br />
<sub>Authenticated sessions gate protected real-time surfaces.</sub>

</td>
<td width="50%" valign="top">

<b><code>04 · DECISION-SUPPORT BOUNDARY</code></b><br />
<b>Assist/MIRA-forward differential path</b>

The repository explicitly retires MedBoard's own diagnosis engine by default. The source retirement contract states that differential diagnosis is now provided by MIRA through Assist; legacy MedBoard CDSS routes return <code>503</code> unless explicitly re-enabled.

<img src="https://img.shields.io/badge/STATE-RETIRED%20BY%20DEFAULT-F59E0B?style=flat-square" alt="Retired by default" /><br />
<sub>Never interpret the presence of legacy engine code as proof that the engine is active.</sub>

</td>
</tr>
<tr>
<td width="50%" valign="top">

<b><code>05 · TELEMEDICINE</code></b><br />
<b>LiveKit integration</b>

LiveKit client/server packages and telemedicine routes support video consultation workflows when the required service configuration is present.

<img src="https://img.shields.io/badge/FUNCTION-8B5CF6?style=flat-square" alt="Function" /><br />
<sub>Optional external dependency; missing configuration should degrade explicitly.</sub>

</td>
<td width="50%" valign="top">

<b><code>06 · AUDIT & SECURITY</code></b><br />
<b>Traceable protected operations</b>

Crew authentication, security audit logging, screening hash-chain services, CI security baselines, dependency audit commands, and PHI-aware boundaries provide reviewable operational evidence.

<img src="https://img.shields.io/badge/FUNCTION-EB5939?style=flat-square" alt="Function" /><br />
<sub>Audit evidence supports accountability; it does not replace clinical review.</sub>

</td>
</tr>
</table>

04 / THE ENGINE ROOM

<table>
<tr>
<td width="33%" valign="top">

<b><code>CLINICAL WORKFLOW</code></b>

- EMR workspace and transfer orchestration
- ICD-X lookup and coding support
- Clinical calculators and NEWS2-related tests
- Sentrapedia reference content
- Clinical reporting and LB1 automation

</td>
<td width="33%" valign="top">

<b><code>OPERATIONS & INTEGRATION</code></b>

- Custom Node.js server
- Socket.IO channels
- LiveKit telemedicine
- Playwright RPA
- Crew/admin workflow surfaces
- Health and deployment checks

</td>
<td width="33%" valign="top">

<b><code>CONTROL & EVIDENCE</code></b>

- Prisma/PostgreSQL persistence
- HMAC/session-based crew access
- Security and screening audit paths
- Sentry integration
- Type/test/build gates
- SAFRS project contract

</td>
</tr>
</table>

<details open>
<summary><b><code>RUNTIME TOPOLOGY // CONTROL & DATA PLANE</code></b></summary>

~~~mermaid
flowchart TB
  HUMAN["CLINICIAN / OPERATOR"]
  UI["NEXT.JS APP ROUTER UI"]
  API["ROUTE HANDLERS + CUSTOM SERVER"]
  RT["SOCKET.IO REAL-TIME CHANNELS"]
  CORE["DOMAIN LOGIC / WORKFLOW ENGINES"]
  DB["PRISMA + POSTGRESQL"]
  INTEGRATIONS["ePUSKESMAS · LIVEKIT · OPTIONAL PROVIDERS"]
  GATE["AUTHORIZATION · VALIDATION · AUDIT"]
  OUT["REVIEWABLE OUTPUT"]
  OPS["HUMAN-APPROVED ACTION"]
  OBS["SENTRY / HEALTH / AUDIT EVIDENCE"]

  HUMAN --> UI
  UI --> API
  API --> RT
  API --> CORE
  DB --> CORE
  INTEGRATIONS --> CORE
  CORE --> GATE
  GATE --> OUT
  OUT --> HUMAN
  HUMAN --> OPS
  API -. telemetry .-> OBS
  OPS -. audit state .-> OBS
~~~

</details>

<p align="center">
  <img src="https://skillicons.dev/icons?i=nextjs,react,ts,nodejs,postgres,prisma,tailwind" alt="MedBoard core technology icons" />
</p>

05 / SIGNAL PATH

~~~mermaid
flowchart TB
  HUMAN["CLINICIAN / AUTHORIZED OPERATOR"]
  INPUT["ENCOUNTER / WORKFLOW INPUT"]
  NORM["VALIDATE & NORMALIZE"]
  SAFETY["DETERMINISTIC WORKFLOW / SAFETY CHECKS"]
  SERVICES["DOMAIN MODULES + INTEGRATIONS"]
  DIFF["ASSIST / MIRA DIFFERENTIAL<br/>when decision-support is invoked"]
  GATE["AUTH · AUDIT · FAILURE / UNCERTAINTY GATE"]
  OUTPUT["REVIEWABLE RESULT / STATUS"]
  ESC["DEGRADE · 503 · MANUAL FALLBACK · ESCALATE"]
  REVIEW["TERMINAL HUMAN AUTHORITY"]

  HUMAN --> INPUT
  INPUT --> NORM
  NORM --> SAFETY
  SAFETY --> SERVICES
  SERVICES --> DIFF
  DIFF --> GATE
  SERVICES --> GATE
  GATE --> OUTPUT
  GATE -. unavailable / unsafe / uncertain .-> ESC
  OUTPUT --> REVIEW
  ESC --> REVIEW
~~~

MedBoard must expose state rather than hide it. The voice surface is currently disabled and returns <code>503</code>. The legacy MedBoard diagnosis engine is retired by default and likewise returns <code>503</code> unless deliberately re-enabled. These failure states are part of the product's safety boundary: unavailable automation must not masquerade as valid clinical intelligence.

The treating clinician remains responsible for the final diagnosis, prescription, referral, emergency escalation, and interpretation of any decision-support output.

06 / BUILD PROTOCOL

<table>
<tr>
<td width="50%" valign="top">

<b><code>FRONTEND</code></b>

Next.js 16.3.6 App Router, React 19.2.3, TypeScript 5.9.3, Tailwind CSS 4.2.1, IBM Plex fonts, shared CSS surfaces, Lucide icons, Chart.js, and Leaflet.

</td>
<td width="50%" valign="top">

<b><code>BACKEND</code></b>

Node.js 24 custom server (<code>server.ts</code>) combines the Next.js request handler with Socket.IO. API route handlers live under <code>src/app/api</code>.

</td>
</tr>
<tr>
<td width="50%" valign="top">

<b><code>AI RUNTIME</code></b>

MedBoard's legacy diagnosis engine remains in source but is retired by default. MIRA through Assist is the declared differential source in the retirement contract. Optional provider configuration remains for other AI-assisted surfaces. Audrey voice is currently disabled.

</td>
<td width="50%" valign="top">

<b><code>DATA / DOCUMENT / INTEGRATION</code></b>

Prisma 6.19.x with PostgreSQL, controlled runtime files for selected queues/history, ePuskesmas automation through Playwright, LiveKit telemedicine, XLSX/LB1 reporting, and optional messaging/email/observability services.

</td>
</tr>
<tr>
<td width="50%" valign="top">

<b><code>DATA & SECURITY</code></b>

Runtime secrets are environment-driven. Protected surfaces use crew authorization/session checks, CORS allowlists, security audit logging, and explicit PHI handling guidance. Repository documentation forbids production credentials and real patient data in source control.

</td>
<td width="50%" valign="top">

<b><code>DEPLOYMENT</code></b>

The deployment runbook documents a VPS target using Ubuntu, Caddy, systemd, Node 24, and PostgreSQL for <code>medboard.sentrahai.com</code>. Deployment status is not inferred solely from this README; use health checks and release verification before promotion.

</td>
</tr>
</table>

<details open>
<summary><b><code>PROMOTION STATE // DEVELOPMENT → PRODUCTION</code></b></summary>

~~~mermaid
flowchart TB
  DEV["DEVELOPMENT"]
  TEST["TEST / TYPECHECK / BUILD"]
  SEC["SECURITY BASELINE / AUDIT"]
  DRY["DEPLOY DRY RUN"]
  CLIN["CLINICAL / OPERATOR REVIEW"]
  PROD["PRODUCTION PROMOTION"]
  HEALTH["HEALTH CHECK + OBSERVATION"]
  ROLL["ROLLBACK"]

  DEV --> TEST
  TEST --> SEC
  SEC --> DRY
  DRY --> CLIN
  CLIN --> PROD
  PROD --> HEALTH
  HEALTH -. failure / unsafe signal .-> ROLL
  ROLL --> DEV
~~~

</details>

### Local Development

Prerequisites:

- Node.js 24
- pnpm 11.21.0 through Corepack
- PostgreSQL when database-backed flows are required
- Runtime secrets/services only for the features being exercised

~~~bash
git clone https://github.com/drferdi/Medboard.git
cd Medboard
corepack enable
pnpm install --frozen-lockfile
cp .env.example .env.local
pnpm run prisma:generate
pnpm run db:migrate
pnpm run dev
~~~

The development script loads <code>.env.local</code> and starts the custom server. Populate only the environment variables required for the workflow being tested.

### Verification

~~~bash
pnpm run test:capsule
pnpm run lint
pnpm run build
pnpm run deploy:dry-run
pnpm run security:baseline
pnpm run security:audit
pnpm run check
~~~

> [!NOTE]
> The repository currently names its TypeScript check <code>lint</code>; <code>project.contract.json</code> explicitly records that no separate linter is configured and maps typecheck to that script.

The standalone lifecycle contract is encoded in <code>project.contract.json</code>. The repository's GitHub Actions workflow also provisions PostgreSQL and runs the security baseline on pushes to <code>main</code>/<code>develop</code> and pull requests to <code>main</code>.

07 / THE SENTRA OPERATING STANDARD

No magic without audit.  
No automation without verification.  
No production promotion without rollback.  
No sensitive data without explicit security boundaries.  
No clinical authority without an accountable human reviewer.

> [!CAUTION]
> Human authority is a terminal boundary. Any high-impact path that cannot expose its inputs, uncertainty, failure mode, and escalation route is not promotion-ready.

<table>
<tr>
<th align="left">Interrogation</th>
<th align="left">Required answer</th>
</tr>
<tr>
<td><b>What specific problem does this solve?</b></td>
<td>Fragmented primary-care workflow, duplicate entry, disconnected clinical signals, and operational coordination spread across multiple systems.</td>
</tr>
<tr>
<td><b>Who is the human reviewer or accountable operator?</b></td>
<td>The treating licensed clinician for clinical decisions; authorized administrators/operators for operational workflows; Chief retains authority over clinical logic and production-impact decisions.</td>
</tr>
<tr>
<td><b>What is outside the scope?</b></td>
<td>Autonomous diagnosis or treatment authority, unsupervised prescribing/referral, silent production changes, and storage of real PHI or secrets in the repository.</td>
</tr>
<tr>
<td><b>What can fail?</b></td>
<td>External service availability, database/configuration, EMR target changes, authentication, network connectivity, optional AI providers, telemedicine infrastructure, and RPA selectors. Voice is intentionally disabled; legacy MedBoard CDSS is retired by default.</td>
</tr>
<tr>
<td><b>How is it verified?</b></td>
<td>Capsule tests, TypeScript validation, production build, security baseline, dependency audit, deployment dry run, health endpoint checks, audit trails, and explicit human review.</td>
</tr>
</table>

08 / SENTRA FOUNDATION · AGENT-FIRST ENGINEERING

MedBoard is developed within the Sentra Artificial Intelligence engineering ecosystem.

Where SAFRS governance applies, the operating model is:

**Human-Governed · Agent-Executed · Machine-Enforced.**

The repository carries a machine-readable <code>project.contract.json</code> that identifies the product as <code>healthcare/medboard</code>, assigns capsule risk <code>R2</code>, pins the supported Node/pnpm lifecycle, and declares install, typecheck, test, build, run, smoke, and deploy-dry-run behavior.

The engineering boundary is explicit: agents may implement and verify within authorized scope, but clinical authority and high-impact production decisions remain human-governed. Executable checks and current source behavior outrank stale documentation.

<p align="center">
  <img src="https://img.shields.io/badge/SENTRA-ARTIFICIAL%20INTELLIGENCE-5B8CFF?style=flat-square" alt="Sentra Artificial Intelligence" />
  <img src="https://img.shields.io/badge/HUMAN-GOVERNED-F59E0B?style=flat-square" alt="Human Governed" />
  <img src="https://img.shields.io/badge/AGENT-EXECUTED-8B5CF6?style=flat-square" alt="Agent Executed" />
  <img src="https://img.shields.io/badge/MACHINE-ENFORCED-14B8A6?style=flat-square" alt="Machine Enforced" />
</p>

09 / SENTRA DIVISIONAL HOME

<table width="100%">
<tr>
<td width="50%" valign="top">

<img src="https://img.shields.io/badge/DIVISION-SENTRA%20HEALTHCARE%20AI-22D3EE?style=flat-square" alt="Sentra Healthcare Artificial Intelligence" />

<b><code>SENTRA HEALTHCARE ARTIFICIAL INTELLIGENCE</code></b><br />
<sub>Healthcare systems, clinical intelligence, operational support, and human-governed decision-support products within Sentra Artificial Intelligence.</sub>

</td>
<td width="50%" valign="top">

<img src="https://img.shields.io/badge/PRODUCT-MEDBOARD-8B5CF6?style=flat-square" alt="MedBoard" />

<b><code>MEDBOARD</code></b><br />
<sub>Clinical intelligence cockpit and primary-care operating surface, with explicit separation between automation, decision support, and clinician authority.</sub>

</td>
</tr>
</table>

10 / OFFICIAL SPONSOR & INSTITUTIONAL CONTEXT

No external sponsor is declared for this product. MedBoard is developed under Sentra Artificial Intelligence.

Repository architecture and deployment documentation identify **UPTD Puskesmas PONED Balowerti, Kota Kediri** as the operational deployment context. This statement describes repository-documented institutional context and does **not** imply sponsorship, ownership, certification, or endorsement beyond what the repository explicitly records.

11 / OPEN CHANNEL

<p align="center">
  <a href="https://github.com/drferdi/Medboard"><img src="https://img.shields.io/badge/GitHub-MedBoard-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://www.linkedin.com/in/dr-ferdi-iskandar-1b620a3b5"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://medium.com/@drferdiiskandar"><img src="https://img.shields.io/badge/Medium-111111?style=for-the-badge&logo=medium&logoColor=white" alt="Medium" /></a>
  <a href="https://x.com/ClaudesyI81047"><img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" alt="X" /></a>
</p>

Repository channels:

- Technical documentation: <a href="./docs/README.md"><code>docs/README.md</code></a>
- Architecture: <a href="./ARCHITECTURE.md"><code>ARCHITECTURE.md</code></a>
- Security reporting: <a href="./SECURITY.md"><code>SECURITY.md</code></a>
- Data/privacy boundaries: <a href="./DATA_PRIVACY.md"><code>DATA_PRIVACY.md</code></a>
- Clinical disclaimer: <a href="./DISCLAIMER.md"><code>DISCLAIMER.md</code></a>
- Contribution workflow: <a href="./CONTRIBUTING.md"><code>CONTRIBUTING.md</code></a>
- Release history: <a href="./CHANGELOG.md"><code>CHANGELOG.md</code></a>
- License terms: <a href="./LICENSE"><code>LICENSE</code></a>

MedBoard is dual-licensed under the terms in <code>LICENSE</code>. Review those terms before reuse, redistribution, deployment, or commercial operation.

12 / ACTIVE STACK

<table width="100%">
<tr>
<td width="50%" valign="top">

<b><code>Next.js 16.3.6 · React 19.2.3</code></b><br />
<small>App Router UI, route handlers, server rendering, application shell.</small>

</td>
<td width="50%" valign="top">

<b><code>Node.js 24 · TypeScript 5.9.3</code></b><br />
<small>Custom server runtime, typed application/domain logic, build and verification surface.</small>

</td>
</tr>
<tr>
<td width="50%" valign="top">

<b><code>Prisma 6.19.x · PostgreSQL</code></b><br />
<small>Persistent application data, migrations, typed database access.</small>

</td>
<td width="50%" valign="top">

<b><code>Socket.IO 4.8.3</code></b><br />
<small>Real-time crew, operational, and intelligence event channels.</small>

</td>
</tr>
<tr>
<td width="50%" valign="top">

<b><code>Playwright 1.40+</code></b><br />
<small>ePuskesmas workflow automation and browser-driven operational tasks.</small>

</td>
<td width="50%" valign="top">

<b><code>LiveKit 2.x</code></b><br />
<small>Telemedicine client/server integration when configured.</small>

</td>
</tr>
<tr>
<td width="50%" valign="top">

<b><code>Tailwind CSS 4.2.1 · IBM Plex</code></b><br />
<small>UI styling, typography, and design-system implementation.</small>

</td>
<td width="50%" valign="top">

<b><code>Sentry 10.43.x</code></b><br />
<small>Error/operational observability with repository-defined privacy boundaries.</small>

</td>
</tr>
</table>

13 / INSTRUMENTATION

<small><code>ACTUAL TECHNOLOGY SURFACE · MEDBOARD</code></small>

<table width="100%">
<tr>
<td width="50%" valign="top">

<img src="https://img.shields.io/badge/01-LANGUAGES%20%26%20RUNTIMES-5B8CFF?style=flat-square" alt="Languages & Runtimes" />

<b><code>LANGUAGES & RUNTIMES</code></b><br />
<small>TypeScript 5.9.3 · Node.js 24 · TSX runtime tooling · pnpm 11.21.0</small>

</td>
<td width="50%" valign="top">

<img src="https://img.shields.io/badge/02-FRONTEND%20%26%20UI-22D3EE?style=flat-square" alt="Frontend & UI" />

<b><code>FRONTEND & UI</code></b><br />
<small>Next.js 16.3.6 · React 19.2.3 · Tailwind CSS 4.2.1 · Lucide React · Chart.js · Leaflet · IBM Plex</small>

</td>
</tr>
<tr>
<td width="50%" valign="top">

<img src="https://img.shields.io/badge/03-BACKEND%20%26%20API-14B8A6?style=flat-square" alt="Backend & API" />

<b><code>BACKEND & API</code></b><br />
<small>Custom Node server · Next.js route handlers · Socket.IO 4.8.3 · Zod · Resend integration</small>

</td>
<td width="50%" valign="top">

<img src="https://img.shields.io/badge/04-AI%20%C2%B7%20ML%20%C2%B7%20AUTOMATION-8B5CF6?style=flat-square" alt="AI ML Automation" />

<b><code>AI · ML · AUTOMATION</code></b><br />
<small>MIRA via Assist as declared differential source · legacy MedBoard CDSS retired by default · optional DeepSeek configuration for AI-supported surfaces · Playwright automation · Audrey voice disabled</small>

</td>
</tr>
<tr>
<td width="50%" valign="top">

<img src="https://img.shields.io/badge/05-DATABASE%20%26%20STORAGE-0EA5E9?style=flat-square" alt="Database & Storage" />

<b><code>DATABASE & STORAGE</code></b><br />
<small>PostgreSQL · Prisma Client/Adapter PG 6.19.x · controlled runtime files for selected queues/history · XLSX/CSV/JSON reporting artifacts</small>

</td>
<td width="50%" valign="top">

<img src="https://img.shields.io/badge/06-DEVOPS%20%C2%B7%20CLOUD%20%C2%B7%20INFRA-F59E0B?style=flat-square" alt="DevOps Cloud Infra" />

<b><code>DEVOPS · CLOUD · INFRA</code></b><br />
<small>GitHub Actions · documented VPS/Caddy/systemd deployment · Corepack/pnpm · deployment dry-run · HTTP health check</small>

</td>
</tr>
<tr>
<td width="50%" valign="top">

<img src="https://img.shields.io/badge/07-TESTING%20%26%20QA-10B981?style=flat-square" alt="Testing & QA" />

<b><code>TESTING & QA</code></b><br />
<small>Custom TSX test suite · CDSS engine tests · NEWS2 tests · Symphony safety-gate tests · auth-hardening tests · TypeScript no-emit validation · production build gate</small>

</td>
<td width="50%" valign="top">

<img src="https://img.shields.io/badge/08-SECURITY%20%26%20GOVERNANCE-EB5939?style=flat-square" alt="Security & Governance" />

<b><code>SECURITY & GOVERNANCE</code></b><br />
<small>Crew authorization/session controls · CORS allowlists · security audit logging · screening hash chain · secret scan · dependency audit · SAFRS project contract · explicit human clinical authority</small>

</td>
</tr>
</table>

<p align="center">
  <b>Architected and built by dr. Ferdi Iskandar (the Gaffer) · Sentra Artificial Intelligence.</b><br />
  MedBoard turns clinical and operational signals into reviewable workflows without surrendering human authority.<br />
  <sub><code>// the surface is documentation. the depth is running.</code></sub>
</p>
