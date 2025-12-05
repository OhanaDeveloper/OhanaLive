#!/bin/bash

# End Session Script
# Creates a new session log from template

SESSION_DATE=$(date +%Y-%m-%d-%H%M)
SESSION_FILE="sessions/${SESSION_DATE}.md"

# Create session log from template
cat > "$SESSION_FILE" << 'EOF'
# Coding Session Log

**Date**: $(date +"%B %d, %Y %H:%M %Z")

---

## Focus
<!-- What were you working on this session? -->


---

## Done
<!-- What did you accomplish? List completed tasks, features, or fixes -->


---

## Learned
<!-- Any discoveries, insights, or patterns you found? -->


---

## Blockers
<!-- What's preventing progress? Any issues or unknowns? -->


---

## Next Steps
<!-- What should be tackled in the next session? -->


---

**Session Duration**: <!-- How long did you work? -->
**Commits Made**: <!-- Number of commits or key commit messages -->

EOF

# Replace $(date...) with actual date
sed -i '' "s/\$(date +\"%B %d, %Y %H:%M %Z\")/$(date +"%B %d, %Y %H:%M %Z")/g" "$SESSION_FILE"

# Create/update LATEST.md symlink
rm -f sessions/LATEST.md
ln -s "$(basename "$SESSION_FILE")" sessions/LATEST.md

echo "✅ Session log created: $SESSION_FILE"
echo ""
echo "📝 Opening session log..."
echo ""

# Open in default editor
if [ -n "$EDITOR" ]; then
    $EDITOR "$SESSION_FILE"
elif command -v code &> /dev/null; then
    code "$SESSION_FILE"
elif command -v nano &> /dev/null; then
    nano "$SESSION_FILE"
else
    echo "⚠️  No editor found. Please edit manually: $SESSION_FILE"
fi

echo ""
echo "💡 Tip: Fill in the template above and save when done."
echo "   Your session is logged to: $SESSION_FILE"
echo "   Quick access via: sessions/LATEST.md"
