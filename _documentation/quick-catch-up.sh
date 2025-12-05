#!/bin/bash

# Quick Catch-Up Script
# Fast overview without starting a full session

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "⚡ Ohana Recovery - Quick Catch-Up"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Current focus
echo "🎯 CURRENT FOCUS"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f .claude-context ]; then
    grep -A 2 "## Where We Are" .claude-context | tail -2
else
    echo "⚠️  No context found"
fi
echo ""

# Last session summary
echo "📝 LAST SESSION"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f sessions/LATEST.md ]; then
    echo "📄 $(basename "$(readlink sessions/LATEST.md)")"
    echo ""
    awk '/## Done/,/---/ {if (/---/) exit; print}' sessions/LATEST.md | head -15
else
    echo "No recent sessions logged"
fi
echo ""

# Recent commit
echo "🔀 LAST COMMIT"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
cd .. && git log --oneline --decorate -1
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "💡 For full session start: ./start-session.sh"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
