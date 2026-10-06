<table width="100%">
<tr>
<td width="34%" align="center" valign="top">

<img src="https://i.ibb.co.com/jZwfy0vB/drferdiikskandar.png" alt="dr. Ferdi Iskandar" width="152" />

### dr. Ferdi Iskandar
**Lead Architect · the Gaffer**

<a href="https://ferdiiskandar.com">
  <img src="https://img.shields.io/badge/FERDIISKANDAR.COM-0D1117?style=for-the-badge&logo=vercel&logoColor=white" alt="Official website" />
</a>

<img src="https://img.shields.io/badge/SENTRA-ARTIFICIAL%20INTELLIGENCE-5B8CFF?style=flat-square" alt="Sentra Artificial Intelligence" />
<img src="https://img.shields.io/badge/KEDIRI-INDONESIA-22D3EE?style=flat-square" alt="Kediri Indonesia" />

</td>
<td width="66%" valign="top">

# MEDBOARD
### SENTRA HEALTHCARE ARTIFICIAL INTELLIGENCE

<img src="public/intelligenceboard.png" alt="MedBoard mark" width="96" align="right" />

<a href="https://medboard.sentrahai.com">
  <img src="https://readme-typing-svg.demolab.com?font=Caveat&weight=700&size=34&duration=3200&pause=1500&color=EB5939&vCenter=true&width=700&height=48&lines=Clinical%20signals%20in.%20Reviewable%20decisions%20out." alt="Clinical signals in. Reviewable decisions out." />
</a>

**A human-governed clinical operations cockpit for Indonesian primary care.**

MedBoard brings clinical workflow, EMR transfer, real-time coordination, reporting, telemedicine, reference tools, security controls, and audited decision-support surfaces into one operational workspace.

<sub><code>CLINICAL SIGNAL -> WORKFLOW -> VERIFICATION -> HUMAN AUTHORITY -> CARE ACTION</code></sub>

</td>
</tr>
</table>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.3.6-0D1117?style=flat-square&logo=next.js&logoColor=white" alt="Next.js 16.3.6" />
  <img src="https://img.shields.io/badge/React-19.2.3-149ECA?style=flat-square&logo=react&logoColor=white" alt="React 19.2.3" />
  <img src="https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5.9.3" />
  <img src="https://img.shields.io/badge/Node.js-24-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js 24" />
  <img src="https://img.shields.io/badge/SAFRS-R2-F59E0B?style=flat-square" alt="SAFRS R2" />
  <img src="https://img.shields.io/badge/TIER-PRIVATE--PRODUCT-8B5CF6?style=flat-square" alt="Private product" />
  <img src="https://img.shields.io/badge/AUTHORITY-HUMAN-14B8A6?style=flat-square" alt="Human authority" />
</p>

---

## 01 / ORIGIN SIGNAL

MedBoard exists to reduce fragmentation across the primary-care operating surface: clinical capture, coding/reference work, operational coordination, reporting, EMR transfer, telemedicine, and reviewable decision support.

The repository is a **Next.js 16 / React 19 / TypeScript** application running behind a custom **Node.js 24** server. It uses **Socket.IO** for real-time channels, **Prisma + PostgreSQL** for persistence, **Playwright** for ePuskesmas workflow automation, **LiveKit** for telemedicine integration, and explicit security/audit controls.

The machine-readable lifecycle contract is <code>project.contract.json</code>: product ID <code>healthcare/medboard</code>, risk class **R2**, Node 24, pnpm 11.21.0, executable lifecycle commands, HTTP smoke expectations, and declared external dependencies.

> **Doctrine:** MedBoard may assist, structure, transfer, calculate, summarize, alert, and coordinate. Final diagnosis, treatment, prescribing, referral, and emergency escalation remain the responsibility of an accountable licensed clinician.

<table>
<tr>
<td width="33%" valign="top"><b>CLINICAL SURFACE</b><br /><br />EMR workspace, ICD-X, calculators, Sentrapedia, telemedicine, reporting, audit and intelligence surfaces.</td>
<td width="33%" valign="top"><b>INTEGRATION PLANE</b><br /><br />Socket.IO, Playwright ePuskesmas transfer, LiveKit, messaging/email hooks, optional AI providers.</td>
<td width="33%" valign="top"><b>CONTROL PLANE</b><br /><br />Authentication, role checks, audit trails, deterministic safety checks, degraded-state behavior, verification gates.</td>
</tr>
</table>

---

## 02 / DOCTRINE

> [!IMPORTANT]
> **Technology enables; clinicians decide.**

<table>
<tr>
<td width="50%" valign="top"><b>HUMAN AUTHORITY IS TERMINAL</b><br /><br />Decision support must terminate at an accountable human reviewer. Automation cannot silently become clinical authority.</td>
<td width="50%" valign="top"><b>STATE MUST BE HONEST</b><br /><br />Unavailable, retired, or unconfigured services must expose that state explicitly. A 503 is safer than simulated confidence.</td>
</tr>
<tr>
<td width="50%" valign="top"><b>PHI STAYS BOUNDED</b><br /><br />Production secrets and patient data belong in controlled runtime systems, not source control, fixtures, screenshots, or unrestricted logs.</td>
<td width="50%" valign="top"><b>AUTOMATION MUST BE REVIEWABLE</b><br /><br />RPA, real-time events, AI-supported paths, reporting, and integrations need observable inputs, outputs, failure modes, and manual fallback.</td>
</tr>
<tr>
<td width="50%" valign="top"><b>SOURCE OUTRANKS STORY</b><br /><br />Executable behavior, package manifests, project contracts, tests, and route code outrank stale prose when documentation disagrees.</td>
<td width="50%" valign="top"><b>NO MAGIC WITHOUT AUDIT</b><br /><br />A generated answer is not evidence. Verification, authorization, auditability, and accountable review are part of the product.</td>
</tr>
</table>

---

## 03 / PRODUCT TOPOLOGY

~~~mermaid
flowchart TB
  HUMAN["CLINICIAN / AUTHORIZED OPERATOR"]
  UI["MEDBOARD WEB COCKPIT<br/>Next.js + React"]
  SERVER["CUSTOM NODE SERVER<br/>Next.js handler + Socket.IO"]
  DOMAIN["CLINICAL + OPERATIONS MODULES"]
  DB["POSTGRESQL + PRISMA"]
  EMR["ePUSKESMAS RPA<br/>Playwright"]
  VIDEO["TELEMEDICINE<br/>LiveKit"]
  AI["OPTIONAL AI / ASSISTED SURFACES"]
  GATE["AUTH + SAFETY + AUDIT<br/>VERIFICATION GATE"]
  OUT["REVIEWABLE OUTPUT / WORKFLOW STATE"]
  ACTION["HUMAN-APPROVED ACTION"]

  HUMAN --> UI
  UI --> SERVER
  SERVER --> DOMAIN
  DB --> DOMAIN
  EMR --> DOMAIN
  VIDEO --> DOMAIN
  AI --> DOMAIN
  DOMAIN --> GATE
  GATE --> OUT
  OUT --> HUMAN
  HUMAN --> ACTION
~~~

<table>
<tr>
<td width="50%" valign="top"><b>CLINICAL COCKPIT</b><br /><br />Routes include EMR, ICD-X, calculators, Sentrapedia, telemedicine, intelligence, audit, reports, crew/admin surfaces, and supporting APIs.</td>
<td width="50%" valign="top"><b>EMR TRANSFER</b><br /><br />Playwright-backed automation supports transfer toward ePuskesmas with runtime credentials and explicit progress/failure states.</td>
</tr>
<tr>
<td width="50%" valign="top"><b>REAL-TIME COORDINATION</b><br /><br />The custom server hosts Socket.IO channels for crew and operational/intelligence events. Protected channels are session-gated.</td>
<td width="50%" valign="top"><b>TELEMEDICINE</b><br /><br />LiveKit client/server packages and telemedicine routes are present. The service is optional and requires runtime configuration.</td>
</tr>
<tr>
<td width="50%" valign="top"><b>DECISION-SUPPORT BOUNDARY</b><br /><br />The legacy MedBoard diagnosis engine remains in source but is <b>retired by default</b>. <code>/api/cdss/diagnose</code> returns 503 unless <code>LEGACY_CDSS_ENGINE_ENABLED=true</code>.</td>
<td width="50%" valign="top"><b>AUDIT + SECURITY</b><br /><br />Crew authentication, role checks, security audit logging, screening audit services, secret scanning, dependency audit, and CI security-baseline checks provide traceable evidence.</td>
</tr>
</table>

---

## 04 / THE ENGINE ROOM

### Operational state is part of the interface

| Surface | Repository-evidenced state | Boundary |
|---|---|---|
| Web cockpit / operational UI | Active source surface | Human operator remains accountable |
| ePuskesmas transfer | Implemented via Playwright | Target-system/session changes can break RPA |
| Socket.IO coordination | Implemented in custom server | Protected channels require valid crew authorization |
| Telemedicine | Implemented via LiveKit integration | Requires LiveKit configuration |
| Legacy MedBoard diagnosis engine | **Retired by default** | 503 unless explicitly re-enabled |
| Differential diagnosis source | Retirement contract names **MIRA via Assist** | External/adjacent service; availability is not inferred from this repo |
| Voice chat | **Disabled** | Returns 503 |
| Voice token | **Disabled** | Returns 503 |
| Voice TTS | **Disabled** | Returns 503 |
| Voice STT | Implemented via **Groq Whisper** | Requires <code>GROQ_API_KEY</code>; failures are audited |
| Sentry | Integrated | Runtime DSN/configuration required |
| PostgreSQL / Prisma | Supported persistence layer | Database-backed flows require <code>DATABASE_URL</code> |

> [!NOTE]
> The presence of legacy or optional code is **not** proof that a feature is active in a deployed environment.

---

## 05 / SIGNAL PATH

~~~mermaid
flowchart TB
  HUMAN["CLINICIAN / AUTHORIZED OPERATOR"]
  INPUT["ENCOUNTER / WORKFLOW INPUT"]
  VALIDATE["VALIDATE + NORMALIZE"]
  SAFETY["DETERMINISTIC SAFETY / WORKFLOW CHECKS"]
  MODULES["DOMAIN MODULES + INTEGRATIONS"]
  SUPPORT["OPTIONAL DECISION-SUPPORT PATH"]
  GATE["AUTH + AUDIT + UNCERTAINTY / FAILURE GATE"]
  RESULT["REVIEWABLE RESULT / STATUS"]
  DEGRADE["503 / MANUAL FALLBACK / ESCALATION"]
  REVIEW["TERMINAL HUMAN REVIEW"]

  HUMAN --> INPUT
  INPUT --> VALIDATE
  VALIDATE --> SAFETY
  SAFETY --> MODULES
  MODULES --> SUPPORT
  MODULES --> GATE
  SUPPORT --> GATE
  GATE --> RESULT
  GATE -. unavailable / unsafe / uncertain .-> DEGRADE
  RESULT --> REVIEW
  DEGRADE --> REVIEW
~~~

**Safety boundary:** MedBoard must expose uncertainty and unavailable states rather than conceal them. The treating clinician remains responsible for final interpretation and care decisions.

---

## 06 / BUILD PROTOCOL

<table>
<tr>
<td width="50%" valign="top"><b>FRONTEND</b><br /><br />Next.js 16.3.6 · React 19.2.3 · TypeScript 5.9.3 · Tailwind CSS 4.2.1 · IBM Plex · Lucide · Chart.js · Leaflet.</td>
<td width="50%" valign="top"><b>BACKEND</b><br /><br />Node.js 24 custom server (<code>server.ts</code>) combining the Next.js handler with Socket.IO. API routes live under <code>src/app/api</code>.</td>
</tr>
<tr>
<td width="50%" valign="top"><b>DATA</b><br /><br />Prisma 6.19.x · PostgreSQL · migrations · controlled runtime files for selected operational state and queues.</td>
<td width="50%" valign="top"><b>INTEGRATIONS</b><br /><br />Playwright · LiveKit · Resend · WhatsApp Cloud API hooks · Sentry · optional model-provider configuration.</td>
</tr>
</table>

### Local development

Authorized repository access is required.

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

The development command loads <code>.env.local</code> and starts the custom server.

### Verification

~~~bash
pnpm run test:capsule
pnpm run lint
pnpm run build
pnpm run security:baseline
pnpm run security:audit
pnpm run deploy:dry-run
pnpm run check
~~~

<code>lint</code> is the repository's TypeScript no-emit check; <code>project.contract.json</code> records that no separate linter is configured.

### Standalone lifecycle contract

| Gate | Contract behavior |
|---|---|
| Install | <code>node scripts/pnpm.mjs install --frozen-lockfile</code> |
| Typecheck | <code>node scripts/pnpm.mjs run lint</code> |
| Test | <code>node scripts/pnpm.mjs run test:capsule</code> |
| Build | <code>node scripts/pnpm.mjs run build</code> |
| Run | <code>node scripts/pnpm.mjs run start:local</code> |
| Smoke | HTTP GET / on 127.0.0.1:4344, expected 200 |
| Deploy dry run | <code>node scripts/pnpm.mjs run deploy:dry-run</code> |

> [!WARNING]
> Do not claim production readiness from documentation alone. Promotion requires current verification, environment-specific configuration, human review, and a rollback path.

---

## 07 / THE SENTRA OPERATING STANDARD

**No magic without audit.**  
**No automation without verification.**  
**No production promotion without rollback.**  
**No sensitive data without explicit boundaries.**  
**No clinical authority without an accountable human reviewer.**

| Interrogation | Required answer |
|---|---|
| What problem does this solve? | Fragmented primary-care workflow, duplicate entry, disconnected operational signals, and cross-system coordination. |
| Who is accountable? | Treating licensed clinician for clinical decisions; authorized operator/admin for operational workflows; Chief for high-impact clinical logic and production decisions. |
| What is outside scope? | Autonomous diagnosis/treatment authority, unsupervised prescribing/referral, silent production changes, and real PHI/secrets in source control. |
| What can fail? | External services, database/configuration, authentication, network, RPA selectors, telemedicine infrastructure, optional providers, and downstream systems. |
| How is it verified? | Capsule tests, TypeScript validation, production build, security baseline, dependency audit, deploy dry run, smoke/health checks, audit evidence, and human review. |

---

## 08 / SENTRA FOUNDATION · AGENT-FIRST ENGINEERING

MedBoard is developed within the **Sentra Artificial Intelligence** engineering ecosystem.

**Human-Governed · Agent-Executed · Machine-Enforced.**

<code>project.contract.json</code> declares product <code>healthcare/medboard</code>, SAFRS risk <code>R2</code>, Node 24, pnpm 11.21.0, deterministic lifecycle commands, smoke-test behavior, mutable-state paths, and external dependency declarations.

Agents may implement and verify inside authorized scope. **Clinical authority and high-impact production decisions remain human-governed.**

<p align="center">
  <img src="https://img.shields.io/badge/HUMAN-GOVERNED-F59E0B?style=flat-square" alt="Human governed" />
  <img src="https://img.shields.io/badge/AGENT-EXECUTED-8B5CF6?style=flat-square" alt="Agent executed" />
  <img src="https://img.shields.io/badge/MACHINE-ENFORCED-14B8A6?style=flat-square" alt="Machine enforced" />
</p>

---

## 09 / SENTRA DIVISIONAL HOME

<table width="100%">
<tr>
<td width="50%" valign="top">
<img src="https://img.shields.io/badge/DIVISION-SENTRA%20HEALTHCARE%20AI-22D3EE?style=flat-square" alt="Sentra Healthcare AI" /><br /><br />
<b>SENTRA HEALTHCARE ARTIFICIAL INTELLIGENCE</b><br /><br />
Healthcare systems, clinical intelligence, operational support, and human-governed decision-support products within Sentra Artificial Intelligence.
</td>
<td width="50%" valign="top">
<img src="https://img.shields.io/badge/PRODUCT-MEDBOARD-8B5CF6?style=flat-square" alt="MedBoard" /><br /><br />
<b>MEDBOARD</b><br /><br />
Clinical operations cockpit and primary-care operating surface with explicit separation between automation, decision support, verification, and clinician authority.
</td>
</tr>
</table>

---

## 10 / OFFICIAL SPONSOR & INSTITUTIONAL CONTEXT

No external sponsor is declared by this repository. MedBoard is developed under **Sentra Artificial Intelligence**.

Repository architecture and deployment documentation identify **UPTD Puskesmas PONED Balowerti, Kota Kediri** as an operational/deployment context. That documentation **must not be interpreted as sponsorship, certification, ownership, or endorsement** beyond what is explicitly established.

Deployment documentation targets <code>medboard.sentrahai.com</code> behind Caddy with a Node/systemd application service and PostgreSQL. Runtime availability must be verified independently.

---

## 11 / OPEN CHANNEL

<p align="center">
  <a href="https://github.com/drferdi/Medboard"><img src="https://img.shields.io/badge/GitHub-MedBoard-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub MedBoard" /></a>
  <a href="https://ferdiiskandar.com"><img src="https://img.shields.io/badge/Web-ferdiiskandar.com-0D1117?style=for-the-badge&logo=vercel&logoColor=white" alt="ferdiiskandar.com" /></a>
  <a href="https://www.linkedin.com/in/dr-ferdi-iskandar-1b620a3b5"><img src="https://img.shields.io/badge/LinkedIn-dr.%20Ferdi%20Iskandar-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
</p>

| Resource | Purpose |
|---|---|
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Architecture notes and system structure |
| [docs/README.md](./docs/README.md) | Documentation index |
| [SECURITY.md](./SECURITY.md) | Security controls and vulnerability reporting |
| [DATA_PRIVACY.md](./DATA_PRIVACY.md) | High-level privacy boundaries |
| [DISCLAIMER.md](./DISCLAIMER.md) | Clinical disclaimer |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Contribution workflow |
| [CHANGELOG.md](./CHANGELOG.md) | Release history |
| [LICENSE](./LICENSE) | Dual-license terms |

MedBoard is dual-licensed as described in <code>LICENSE</code>: qualifying individual/non-commercial use under the stated community terms, while organizational/commercial deployment requires the applicable enterprise license.

---

## 12 / ACTIVE STACK

<table width="100%">
<tr>
<td width="50%" valign="top"><b>APPLICATION</b><br /><br />Next.js 16.3.6 · React 19.2.3 · TypeScript 5.9.3 · Node.js 24</td>
<td width="50%" valign="top"><b>DATA</b><br /><br />Prisma 6.19.x · @prisma/adapter-pg · PostgreSQL / pg</td>
</tr>
<tr>
<td width="50%" valign="top"><b>REAL-TIME + VIDEO</b><br /><br />Socket.IO 4.8.3 · LiveKit 2.x</td>
<td width="50%" valign="top"><b>AUTOMATION</b><br /><br />Playwright 1.40+ · TSX · repository test/deploy scripts</td>
</tr>
<tr>
<td width="50%" valign="top"><b>UI + VISUALIZATION</b><br /><br />Tailwind CSS 4.2.1 · IBM Plex · Lucide · Chart.js · Leaflet · Motion</td>
<td width="50%" valign="top"><b>OPERATIONS</b><br /><br />Sentry 10.43.x · Resend · WhatsApp Cloud API hooks · GitHub Actions</td>
</tr>
</table>

---

## 13 / INSTRUMENTATION

<table width="100%">
<tr>
<td width="50%" valign="top">
<img src="https://img.shields.io/badge/01-RUNTIME-5B8CFF?style=flat-square" alt="Runtime" /><br /><br />
<b>RUNTIME</b><br />Node.js 24 · pnpm 11.21.0 · custom server.ts · Next.js production build.
</td>
<td width="50%" valign="top">
<img src="https://img.shields.io/badge/02-QUALITY-10B981?style=flat-square" alt="Quality" /><br /><br />
<b>QUALITY</b><br />Capsule tests · CDSS engine tests · NEWS2 tests · Symphony safety-gate tests · auth-hardening checks · TypeScript no-emit · build gate.
</td>
</tr>
<tr>
<td width="50%" valign="top">
<img src="https://img.shields.io/badge/03-SECURITY-EB5939?style=flat-square" alt="Security" /><br /><br />
<b>SECURITY</b><br />Crew sessions · clinical-role checks · CORS allowlists · security audit logging · secret scan · dependency audit · PHI-aware telemetry boundaries.
</td>
<td width="50%" valign="top">
<img src="https://img.shields.io/badge/04-OBSERVABILITY-F59E0B?style=flat-square" alt="Observability" /><br /><br />
<b>OBSERVABILITY</b><br />Sentry integration · HTTP health/smoke checks · audit trails · real-time event surfaces · deployment verification scripts.
</td>
</tr>
<tr>
<td width="50%" valign="top">
<img src="https://img.shields.io/badge/05-AI%20BOUNDARY-8B5CF6?style=flat-square" alt="AI boundary" /><br /><br />
<b>AI BOUNDARY</b><br />Legacy CDSS retired by default · MIRA/Assist named by retirement contract · Groq-backed STT when configured · optional provider keys for supported surfaces.
</td>
<td width="50%" valign="top">
<img src="https://img.shields.io/badge/06-GOVERNANCE-14B8A6?style=flat-square" alt="Governance" /><br /><br />
<b>GOVERNANCE</b><br />SAFRS R2 project contract · explicit human clinical authority · degraded-state disclosure · verification before promotion.
</td>
</tr>
</table>

---

<p align="center">
  <img src="public/sentra-mark.png" alt="Sentra Artificial Intelligence" width="52" /><br /><br />
  <b>Architected &amp; Built by dr. Ferdi Iskandar (the Gaffer)</b><br />
  <b>Sentra Artificial Intelligence · Sentra Healthcare Artificial Intelligence</b><br /><br />
  <sub><code>THE SURFACE IS DOCUMENTATION. THE DEPTH IS RUNNING.</code></sub>
</p>
