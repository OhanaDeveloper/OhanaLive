#!/bin/bash

# Start Session Script
# Shows current project context and recent activity

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🌺 Ohana Recovery - Session Start"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Show current context
echo "📋 PROJECT CONTEXT"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f .claude-context ]; then
    cat .claude-context
else
    echo "⚠️  No .claude-context found. Run ./setup-context.sh first."
fi
echo ""

# Show last 2 session summaries
echo "📝 RECENT SESSIONS (Last 2)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -d sessions ] && [ "$(ls -A sessions/*.md 2>/dev/null | wc -l)" -gt 0 ]; then
    ls -t sessions/*.md | head -2 | while read session; do
        echo ""
        echo "📄 $(basename "$session")"
        echo "─────────────────────────────────────────────"
        # Show Focus and Done sections only
        awk '/## Focus/,/## Done/ {print} /## Done/,/---/ {if (/---/) exit; print}' "$session" | head -20
        echo ""
    done
else
    echo "No session logs yet. Use ./end-session.sh to create one."
fi
echo ""

# Show recent git commits
echo "🔀 RECENT COMMITS (Last 5)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
cd .. && git log --oneline --decorate -5
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ Ready to code! Have a great session."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "💡 When done, run: ./end-session.sh"
echo ""
