#!/bin/bash

cat > .claude-context << 'CTXEOF'
# Project Context for Claude Code

**Project:** Ohana Recovery
**Last Updated:** $(date +%Y-%m-%d)

## Quick Start
- **What this does:** Recovery community platform with nightly meetings 11 PM - 3 AM PT
- **Tech stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion, Django
- **Current focus:** Performance optimization, spacing improvements, Recovery Network directory

## Where We Are
- **Working on:** Frontend optimization and content density improvements
- **Last completed:** Performance optimizations (96% reduction in DOM nodes), Recovery Network directory, Home page redesign
- **Next up:** About page elevation to Story-level quality, donation platform integration

## Critical Knowledge
- **Key patterns:** Story page is the quality benchmark - parallax scrolling, floating gradient orbs, smooth animations
- **Things to avoid:** min-h-screen creates excessive whitespace, metadata exports in client components, 30+ animated DOM nodes
- **Gotchas:** User prefers tighter spacing (reduce padding by 35-50%), aesthetics over functionality

## Session Startup
Run: `./quick-catch-up.sh`
Or paste: "Read .claude-context and the last session in sessions/LATEST.md"
CTXEOF

mkdir -p sessions decisions gotchas

cat > sessions/template.md << 'TMPLEOF'
# Session: [YYYY-MM-DD HH:MM]

## Focus
[What are you working on this session?]

## Done
-
-

## Learned
-

## Blockers
-

## Next
-
TMPLEOF

cat > decisions/README.md << 'DECEOF'
# Architecture Decisions

Each decision gets its own file: `YYYY-MM-DD-decision-name.md`

Template:
```
# [Decision Title]
Date: [YYYY-MM-DD]

## Problem
[What needed solving?]

## Decision
[What we chose]

## Why
[Reasoning]

## Trade-offs
- ✅ Pros:
- ⚠️ Cons:
```
DECEOF

cat > gotchas/README.md << 'GOTEOF'
# Known Issues & Solutions

Each gotcha gets its own file: `component-name-issue.md`

Template:
```
# [Component/Area]: [Issue]

## Symptoms
[What you see]

## Root Cause
[Why it happens]

## Solution
[How to fix]

## Prevention
[How to avoid next time]
```
GOTEOF

cat > quick-catch-up.sh << 'QCUEOF'
#!/bin/bash
echo "=== QUICK CATCH-UP ==="
echo ""
echo "📋 PROJECT CONTEXT:"
cat .claude-context
echo ""
echo "📝 LAST 2 SESSIONS:"
ls -t sessions/*.md 2>/dev/null | head -2 | xargs tail -n 20 2>/dev/null
echo ""
echo "🔀 RECENT COMMITS:"
git log --oneline -5
echo ""
echo "=== Ready to code! ==="
QCUEOF

chmod +x quick-catch-up.sh

cat > end-session.sh << 'ENDEOF'
#!/bin/bash

SESSION_FILE="sessions/$(date +%Y-%m-%d-%H%M).md"

echo "Creating session file: $SESSION_FILE"
cp sessions/template.md "$SESSION_FILE"

# Open in your default editor
${EDITOR:-nano} "$SESSION_FILE"

# Create symlink to latest
ln -sf "$(basename $SESSION_FILE)" sessions/LATEST.md

echo "✅ Session logged! Update .claude-context if needed."
ENDEOF

chmod +x end-session.sh

cat > start-session.sh << 'STARTEOF'
#!/bin/bash

clear
echo "🚀 Starting coding session..."
echo ""

# Show quick context
./quick-catch-up.sh

echo ""
echo "💡 Tell Claude Code: 'Read .claude-context and sessions/LATEST.md'"
echo ""
echo "When done, run: ./end-session.sh"
STARTEOF

chmod +x start-session.sh

echo "✅ Context system initialized!"
echo ""
echo "📁 Created:"
echo "  - .claude-context (main project context)"
echo "  - sessions/ (session logs)"
echo "  - decisions/ (architecture decisions)"
echo "  - gotchas/ (known issues)"
echo "  - quick-catch-up.sh (quick context review)"
echo "  - start-session.sh (begin coding)"
echo "  - end-session.sh (log session)"
echo ""
echo "🚀 To start: ./start-session.sh"
echo "✅ To end: ./end-session.sh"
