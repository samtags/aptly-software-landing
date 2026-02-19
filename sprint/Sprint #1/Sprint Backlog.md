# Sprint Backlog - Sprint #1

## Scope Lock
Only tasks listed here may be implemented during Sprint #1.

## Selected Tasks
| ID | Title | Estimate | Status |
| --- | --- | --- | --- |
| task-0001 | Global Layout & Design Tokens | 3 | Verified |
| task-0002 | Header / Navigation | 5 | Verified |
| task-0003 | Hero Headline, Copy, and CTAs | 5 | Verified |
| task-0004 | Hero Social Proof Row | 3 | Verified |
| task-0005 | Hero Floating Testimonial Cards | 3 | Verified |

## Total Story Points
19

## QA Updates
- 2026-02-19: task-0001 reset to To Do per user request (supersedes prior QA note).
- 2026-02-20: task-0001 re-verified against screenshots; marked Verified.
- 2026-02-19: task-0002 verified against screenshots; marked Verified.
- 2026-02-19: task-0003 failed QA. Mobile headline missing required emojis. Playwright blocked local PDFs, so compared against `ref-*.png` exports from the PDF references.
- 2026-02-19: task-0005 failed QA. Floating testimonial cards are oversized and overlap the hero headline; positioning/angle does not match the reference. Copy does not match reference screenshots.
- 2026-02-20: task-0003 failed QA. Mobile headline still includes emojis; reference mobile screenshot does not show emojis. (PDFs exported to PNG for comparison due to Playwright file:// restrictions.)
- 2026-02-20: task-0004 verified against mobile/tablet/desktop references (PDFs exported to PNG for comparison).
- 2026-02-20: task-0005 preliminary QA indicates copy/position mismatch vs reference; fix will follow after task-0003 due to single active dev task rule.
- 2026-02-20: task-0003 verified after removing mobile emojis to match reference screenshots.
- 2026-02-20: task-0005 verified on desktop/desktop-large; cards hidden on tablet/mobile. Copy updated per user request (does not match reference screenshots).
