#!/bin/bash

SESSION_FILE="sessions/$(date +%Y-%m-%d-%H%M).md"

echo "Creating session file: $SESSION_FILE"
cp sessions/template.md "$SESSION_FILE"

# Open in your default editor
${EDITOR:-nano} "$SESSION_FILE"

# Create symlink to latest
ln -sf "$(basename $SESSION_FILE)" sessions/LATEST.md

echo "✅ Session logged! Update .claude-context if needed."
