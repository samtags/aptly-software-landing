# Project Objective

Recreate the reference landing page (https://bravio.framer.website) using:

- Next.js 16
- JavaScript (no TypeScript)
- Deployable to Vercel

The goal is to produce a production-ready landing page that closely matches the reference in:

- Layout structure
- Visual hierarchy
- Spacing and typography
- Component composition
- Interaction behavior
- Responsive behavior across breakpoints

---

## Scope Definition

### Included

- Full landing page structure
- Responsive layouts (mobile → large desktop)
- Section-based component architecture
- Hover states and basic UI interactions
- Clean reusable component structure

### Not Included

- CMS functionality
- Backend integrations
- Authentication
- External analytics
- Framer-specific runtime behavior

---

## Source of Truth

Screenshots in `./screenshots` are the primary design reference.

They include:

- `./screenshots/mobile-view.pdf`
- `./screenshots/tablet.pdf`
- `./screenshots/desktop.pdf`
- `./screenshots/desktop-large.pdf`

If discrepancies exist between the live site and screenshots, the screenshots take priority.

---

## Quality Standards

The final output must:

- Match layout proportions closely
- Maintain consistent spacing system
- Be responsive at:
  - ~360px
  - ~810px
  - ~1200px+
- Avoid layout shifts
- Be Vercel-compatible without custom server logic

---

## Success Criteria

The project is considered successful when:

- All backlog tasks are marked `Done`
- QA validates responsiveness and interactions
- Stakeholder approves visual alignment
- Deployment works on Vercel without errors

# LLM Multi-Agent Workflow

This project follows a structured Scrum-based operating model designed for LLM agents working collaboratively inside the repository.

---

## Status Labels

Use the following status labels for all sprint and task documents:

- `To Do`
- `In Progress - Dev`
- `In Progress - QA`
- `In Review`
- `Verified`
- `Done`

## 1. Product Decomposition (Preparation Phase)

**Owner:** Project Manager  
**Artifacts:** `project/Backlog.md`, `project/docs/task-XXXX.md`

The Project Manager:

- Analyzes the reference landing page.
- Breaks it down into:
  - Screens / Sections
  - Components
  - Atomic Tasks
- Writes structured task documents including:
  - Title
  - Description
  - Component behavior & interactions
  - Acceptance criteria (clear and testable)
  - Estimate placeholder (Fibonacci)
  - Initial status: `To Do`

No sprint may start unless tasks are implementation-ready and testable.

---

## 2. Backlog Refinement (Pre-Sprint Alignment)

**Owner:** Scrum Master  
**Participants:** Project Manager, Frontend Developer, QA  
**Output:** Updated estimates and clarified scope

The Scrum Master:

- Reviews task clarity and completeness.
- Ensures tasks are independent and small enough.
- Facilitates Fibonacci estimation: `1, 2, 3, 5, 8, 13`.
- Resolves ambiguity before sprint planning.
- Moves refined tasks to sprint-ready state.

Tasks lacking clear acceptance criteria are returned to the Project Manager.

---

## Scrum Master Ongoing Responsibilities

- Periodically check for sprint blockers (e.g., QA failures, missing assets, stalled tasks).
- Ensure QA and Frontend are working on the current sprint tasks and that task statuses stay in sync across `sprint/Sprint #N/Sprint Backlog.md` and `project/docs/task-XXXX.md`.
- Enforce status consistency: Sprint Backlog row, task doc status, and any QA update note must match within 10 minutes of any status change.
- If inactive for 30 seconds, the agent should be stopped and respawned only if needed.

## 3. Sprint Planning

**Owner:** Scrum Master  
**Artifacts:**  
`sprint/Sprint #N/Sprint Planning.md`  
`sprint/Sprint #N/Sprint Objective.md`  
`sprint/Sprint #N/Sprint Backlog.md`

The team:

- Defines the Sprint Objective.
- Selects tasks from the backlog based on priority and capacity.
- Locks sprint scope (no mid-sprint expansion unless critical).
- Breaks tasks into implementation order if necessary.

Only tasks in `Sprint Backlog.md` may be worked on during the sprint.

---

## 4. Sprint Execution

**Owner:** Frontend Developer  
**Validation:** QA

### Frontend Developer

- Implements in Next.js 16 (JavaScript only).
- Ensures responsiveness and interaction accuracy.
- Marks task as `In Review` when complete.
- Updates task status in both `sprint/Sprint #N/Sprint Backlog.md` and `project/docs/task-XXXX.md` when status changes (e.g., `In Progress` → `In Review`).
- When QA raises an issue on a task, immediately switch to fix that task to unblock QA. After resolving and re-verifying, return to the next task in the Sprint Backlog.
- If the frontend switches away from an active task, the previous task must revert to `To Do` unless it is in QA; only one task may be `In Progress - Dev` at a time.
- The frontend continues through the Sprint Backlog sequentially until all sprint items are `Done` or `Verified`; do not stop after a single task.
- Proceeds autonomously through the Sprint Backlog without requesting user input.
- App source lives in `src/` (e.g., `src/app`), so all code changes and paths should target `src/`.
- Use Playwright MCP to verify output against reference PDFs in `./screenshots` before marking `In Review`.
- Use Playwright’s bundled Chromium via Playwright MCP (do not use system Chrome or any external browser).
- If inactive for 30 seconds, the agent should be stopped and respawned only if needed.

### QA

- Validates strictly against acceptance criteria.
- Tests:
  - Layout accuracy
  - Responsive behavior
  - Interaction states
  - Console errors
- Marks task:
  - `Verified` (if passed)
  - Returns to `In Progress` with defect report (if failed)
- Updates task status in both `sprint/Sprint #N/Sprint Backlog.md` and `project/docs/task-XXXX.md` when status changes (e.g., `In Review` → `Verified` or `In Progress`).
- Begins verification automatically when tasks are marked `In Review`, without requesting user input.
- Use Playwright MCP to verify output against reference PDFs in `./screenshots`.
- Use Playwright’s bundled Chromium via Playwright MCP (do not use system Chrome or any external browser).
- If inactive for 30 seconds, the agent should be stopped and respawned only if needed.

Work is not complete until QA approves.

---

## 5. Sprint Review

**Owner:** Project Manager  
**Reviewer:** Stakeholder

The Project Manager:

- Presents completed sprint output.
- Demonstrates implemented screens/components.
- Confirms alignment with reference design.

The Stakeholder:

- Provides structured feedback.
- Assigns priority (High / Medium / Low).
- Identifies UX or visual gaps.

Feedback becomes backlog input.

---

## 6. Sprint Retrospective

**Owner:** Scrum Master  
**Artifact:** `sprint/Sprint #N/Sprint Retro.md`

The team evaluates:

- What worked well
- What slowed execution
- Quality of task breakdown
- Estimation accuracy
- Communication efficiency

Actionable improvements are added to the backlog.

---

## 7. Continuous Iteration

After Retro:

- Backlog is updated.
- New tasks are refined.
- Next Sprint Planning begins.

This loop continues until the landing page reaches production quality.

---

## 8. Sprint Authorization Gate (Human Approval Required)

Before starting a new sprint cycle, the system must pause and request explicit approval from the human owner.

### Procedure

After Sprint Retro and Backlog Update:

1. Scrum Master summarizes:
   - Completed tasks
   - Failed / carried-over tasks
   - Retro action items
   - Proposed next sprint objective
   - Candidate tasks for next sprint

2. Scrum Master presents a Sprint Proposal containing:
   - Sprint Goal
   - Selected tasks
   - Total story points
   - Expected scope

3. The system must then ask:

   "Do you approve starting Sprint #N with the proposed scope?"

4. No new sprint may begin unless explicit approval is received.

## Sprint State Management (Single Source of Truth)

All sprint-aware agents must rely on:

sprint/ACTIVE_SPRINT.md

This file defines:

- Current Sprint Number
- Sprint Status (Proposed | Active | Completed | Blocked)
- Sprint Objective
- Authorized Sprint Backlog file
- Scope lock reference

---

### Mandatory Rule

Before performing any sprint-related action, agents must:

1. Read `sprint/ACTIVE_SPRINT.md`
2. Confirm:
   - Sprint Status = Active
   - Sprint Backlog file path
3. Operate only within that sprint boundary

If:

- The file does not exist
- Status is not `Active`
- Sprint number is unclear

The agent must stop and request clarification.

---

### Sprint Lifecycle State Transitions

Proposed → Active → Completed

- Only Scrum Master may change sprint status.
- No implementation work may occur unless Status = Active.
- A new sprint cannot begin unless ACTIVE_SPRINT.md is updated.

This file acts as the system’s shared memory anchor.

---

## Authorization Rules

- If approved → Proceed to Sprint Planning.
- If rejected → Return to Backlog Refinement.
- If scope adjustments are requested → Update proposal and resubmit.

---

## Purpose

This gate ensures:

- Human strategic control
- Scope discipline
- Budget/time awareness
- Prevention of uncontrolled autonomous sprint loops

No sprint cycle may start automatically.
Human approval is mandatory.

---

# Core Principles

- Tasks must be atomic and testable.
- Acceptance criteria is the source of truth.
- No silent scope changes mid-sprint.
- QA approval defines completion.
- Feedback always feeds the backlog.

---

# Development Workflow

This workflow defines how implementation moves from backlog to production-ready code.

---

## 1. Task Selection

**Source of Truth:** `project/Backlog.md`

- Only work on tasks that are:
  - Clearly defined
  - Estimated
  - Included in the current Sprint Backlog
- Confirm acceptance criteria before starting.
- Do not modify scope during implementation.

---

## 2. Implementation

**Tech Stack:** Next.js 16 (JavaScript only)

- Follow the component breakdown defined by the Project Manager.
- Keep components reusable and modular.
- Maintain consistent spacing, typography, and layout structure.
- Ensure:
  - Mobile-first responsiveness
  - Clean DOM structure
  - No console errors
  - Vercel compatibility

Do not alter acceptance criteria during development.

---

## 4. Self-Validation (Before QA)

Before handing off:

- Confirm all acceptance criteria are satisfied.
- Manually test at:
  - Mobile (~360px)
  - Tablet (~768px)
  - Desktop (1024px+)
- Check hover/focus states and interactions.
- Ensure no layout shifts or broken assets.
- Run the dev server and verify the rendered UI (do not mark `In Review` without a running dev server check).

Update task status to `In Review`.

---

## 5. QA Validation

QA will:

- Validate against acceptance criteria.
- Report defects with reproduction steps.
- Return task to `In Progress` if needed.

Frontend applies fixes and resubmits for validation.

---

## 6. Merge to Main

Once QA marks the task as `Done`:

- Squash or clean commits if necessary.
- Merge into `main`.
- Update task status in:
  - `project/docs/task-XXXX.md`
  - `project/Backlog.md`

Only completed, QA-approved tasks may reach `main`.

---

# Rules

- No scope creep inside a task.
- "Done" means QA-approved and merged.
- Status labels for in-progress work must be:
  - In Progress - Dev
  - In Progress - QA
- If QA raises an issue, the task must immediately switch to In Progress - Dev.
- Only one task may be In Progress - Dev at any time.
- QA files, output, and artifacts must be stored in `./artifacts/qa/`.
- Frontend files, output, and artifacts must be stored in `./artifacts/frontend/`.
