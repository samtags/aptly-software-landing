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

- Creates a branch per task.
- Implements in Next.js 16 (JavaScript only).
- Ensures responsiveness and interaction accuracy.
- Marks task as `In Review` when complete.

### QA

- Validates strictly against acceptance criteria.
- Tests:
  - Layout accuracy
  - Responsive behavior
  - Interaction states
  - Console errors
- Marks task:
  - `Done` (if passed)
  - Returns to `In Progress` with defect report (if failed)

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

## 2. Branching Strategy

- Create one branch per task.
- Naming convention:
  feature/task-0001-hero-section
  fix/task-0007-responsive-padding
  refactor/task-0012-layout-structure

- Never commit directly to `main`.

---

## 3. Implementation

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
- Merge branch into `main`.
- Update task status in:
  - `project/docs/task-XXXX.md`
  - `project/Backlog.md`

Only completed, QA-approved tasks may reach `main`.

---

# Rules

- One task per branch.
- One branch per PR.
- No scope creep inside a task.
- "Done" means QA-approved and merged.
