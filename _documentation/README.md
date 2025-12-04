# Ohana Recovery - Development Documentation

This directory contains all development notes, session logs, and context for maintaining continuity across coding sessions.

**⚠️ This directory is separate from the application code and is for development reference only.**

---

## 📁 Directory Structure

```
_documentation/
├── README.md                           # This file
├── ClaudeNotes.md                      # Comprehensive session notes (Dec 3, 2025)
├── claude-code-context-system.md       # Context management system guide
├── .claude-context                     # Quick project context
│
├── sessions/                           # Coding session logs
│   ├── template.md                     # Session template
│   └── YYYY-MM-DD-HHMM.md             # Individual sessions
│
├── decisions/                          # Architecture decisions
│   ├── README.md                       # Decision template
│   └── YYYY-MM-DD-decision-name.md    # Individual decisions
│
├── gotchas/                            # Known issues & solutions
│   ├── README.md                       # Gotcha template
│   └── component-name-issue.md        # Individual gotchas
│
└── scripts/                            # Context management scripts
    ├── setup-context.sh                # Initialize context system
    ├── start-session.sh                # Begin coding session
    ├── end-session.sh                  # Log session
    └── quick-catch-up.sh               # Quick context review

```

---

## 🚀 Quick Start

### Starting a Session
```bash
cd _documentation
./start-session.sh
```

This will show:
- Current project context
- Last 2 session summaries
- Recent git commits

### Ending a Session
```bash
cd _documentation
./end-session.sh
```

Opens a template to log:
- What you worked on
- What you completed
- What you learned
- Any blockers
- Next steps

### Quick Catch-Up
```bash
cd _documentation
./quick-catch-up.sh
```

Fast overview without starting a full session.

---

## 📖 Key Documents

### **ClaudeNotes.md**
Comprehensive development session notes including:
- Critical errors fixed
- Major changes (performance, spacing, Recovery Network)
- Architecture decisions
- Code patterns to follow
- User preferences
- Known issues

### **claude-code-context-system.md**
Guide for the context management system:
- How it works
- Why it exists
- Usage patterns
- Templates

### **.claude-context**
Quick reference for Claude Code:
- Project overview
- Current focus
- What to avoid
- Critical knowledge

---

## 📝 Logging Sessions

### Create a Session Log
1. Run `./end-session.sh`
2. Fill in the template:
   - **Focus**: What were you working on?
   - **Done**: What did you accomplish?
   - **Learned**: Any discoveries or insights?
   - **Blockers**: What's preventing progress?
   - **Next**: What should be tackled next?

### Example Session Log
```markdown
# Session: 2025-12-03 18:00

## Focus
Performance optimization and spacing improvements

## Done
- Reduced DOM nodes from 30 to 1 (96% reduction)
- Added GPU acceleration with willChange hints
- Reduced spacing by 35-50% across all pages
- Created Recovery Network directory

## Learned
- Story page is the quality benchmark
- User prefers tighter spacing
- CSS gradients > 30 DOM nodes

## Blockers
- None

## Next
- Elevate About page to Story-level quality
- Add donation platform integration (Ko-fi)
```

---

## 🏛️ Architecture Decisions

Document major technical decisions in `decisions/`:

### Template
```markdown
# [Decision Title]
Date: YYYY-MM-DD

## Problem
What needed solving?

## Decision
What we chose

## Why
Reasoning behind the choice

## Trade-offs
- ✅ Pros: Benefits
- ⚠️ Cons: Drawbacks
```

### Example
- `2025-12-03-gpu-acceleration.md` - Why we added willChange hints
- `2025-12-03-recovery-network.md` - Why we replaced donations with directory

---

## 🐛 Known Issues (Gotchas)

Document recurring issues and solutions in `gotchas/`:

### Template
```markdown
# [Component/Area]: [Issue]

## Symptoms
What you see

## Root Cause
Why it happens

## Solution
How to fix

## Prevention
How to avoid next time
```

### Example
- `next-metadata-client-component.md` - Can't export metadata from "use client"
- `background-performance.md` - Avoid 30+ animated DOM nodes

---

## 🔄 Workflow

### Daily Development
1. **Start**: `./start-session.sh` - Get context
2. **Code**: Make changes, commit frequently
3. **End**: `./end-session.sh` - Log session
4. **Repeat**: Next session picks up where you left off

### When Making Big Decisions
1. Create decision doc in `decisions/`
2. Document the problem, choice, and trade-offs
3. Reference in commit message

### When Finding Issues
1. Create gotcha doc in `gotchas/`
2. Document symptoms, cause, solution, prevention
3. Add to `.claude-context` if critical

---

## 🎯 Best Practices

### ✅ Do
- Log sessions after significant work
- Document architectural decisions
- Update `.claude-context` with critical learnings
- Keep gotchas up to date
- Reference these docs when starting new sessions

### ❌ Don't
- Commit session logs to git (optional - your choice)
- Let sessions pile up - log frequently
- Skip documentation for "obvious" decisions
- Ignore recurring issues - document them

---

## 🔧 Maintenance

### Add to .gitignore (optional)
```
# Session logs (optional - you can commit these)
_documentation/sessions/*.md
_documentation/sessions/LATEST.md
```

### Update Context
When you discover something important:
```bash
nano _documentation/.claude-context
```

### Archive Old Sessions
```bash
mkdir _documentation/sessions/archive
mv _documentation/sessions/2025-*.md _documentation/sessions/archive/
```

---

## 📊 Project Statistics (Dec 3, 2025)

- **Total Commits**: 5 recent
- **Major Changes**: 39 files changed, 1850 insertions, 962 deletions
- **Performance Gains**: 96% reduction in animated DOM nodes
- **Spacing Improvements**: 35-50% reduction in padding
- **New Features**: Recovery Network directory, Home page redesign

---

## 💡 For Future Claude Code Sessions

When starting a new session, tell Claude Code:

> "Read `_documentation/.claude-context` and `_documentation/ClaudeNotes.md` to understand the project context."

Or run:
```bash
cd _documentation && ./start-session.sh
```

---

**Last Updated**: December 3, 2025
**Maintainer**: Ohana Recovery Development Team
