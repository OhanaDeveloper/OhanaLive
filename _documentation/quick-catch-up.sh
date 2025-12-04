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
