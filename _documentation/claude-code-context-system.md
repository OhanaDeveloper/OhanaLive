# Claude Code Context & Session Management System

**Created:** 2025-12-03  
**Purpose:** Maintain continuity across Claude Code terminal sessions for multiple projects

## The Problem

Claude Code operates in terminal sessions without built-in memory between sessions. This means:
- Context from previous coding sessions is lost
- Discoveries and learnings don't carry forward
- Each session starts from scratch
- Managing multiple codebases becomes chaotic

## The Solution

A lightweight, file-based context system that:
- Captures session knowledge automatically
- Makes project context instantly accessible
- Works across multiple projects
- Integrates with your existing git workflow
- Minimal friction to maintain

---

# System Components

## 1. Project Setup Script

Creates the entire context system in any codebase with one command.

**File:** `setup-context.sh`

```bash
#!/bin/bash

cat > .claude-context << 'CTXEOF'
# Project Context for Claude Code

**Project:** [PROJECT_NAME]
**Last Updated:** $(date +%Y-%m-%d)

## Quick Start
- **What this does:** [One sentence]
- **Tech stack:** [e.g., Next.js, TypeScript, Tailwind]
- **Current focus:** [What you're building right now]

## Where We Are
- **Working on:** 
- **Last completed:** 
- **Next up:** 

## Critical Knowledge
- **Key patterns:** 
- **Things to avoid:** 
- **Gotchas:** 

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
ls -t sessions/*.md | head -2 | xargs tail -n 20
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
echo "  - .claude-context (project overview)"
echo "  - sessions/ (session logs)"
echo "  - decisions/ (architecture decisions)"
echo "  - gotchas/ (issues & solutions)"
echo ""
echo "🎯 Usage:"
echo "  Start session: ./start-session.sh"
echo "  End session:   ./end-session.sh"
echo ""
echo "⚙️  Next: Edit .claude-context with your project details"
```

**Installation:**
```bash
cd ~/your-project
chmod +x setup-context.sh
./setup-context.sh
```

---

## 2. Shell Aliases & Functions

Add these to your `~/.zshrc` or `~/.bashrc` for maximum convenience.

```bash
# Quick project session management
alias cs='./start-session.sh'
alias ce='./end-session.sh'

# Ultra-quick context check from anywhere in project
alias ctx='cat .claude-context && echo "" && echo "Last session:" && cat sessions/LATEST.md 2>/dev/null'

# Create a gotcha file quickly
gotcha() {
    local filename="gotchas/$(date +%Y-%m-%d)-$1.md"
    cat > "$filename" << EOF
# $2

Date: $(date +%Y-%m-%d)

## Symptoms
[What you saw]

## Root Cause
[Why it happened]

## Solution
[How you fixed it]

## Prevention
[How to avoid]
EOF
    ${EDITOR:-nano} "$filename"
}

# Create a decision file quickly
decide() {
    local filename="decisions/$(date +%Y-%m-%d)-$1.md"
    cat > "$filename" << EOF
# $2

Date: $(date +%Y-%m-%d)

## Problem
[What needed solving]

## Decision
[What we chose]

## Why
[Reasoning]

## Trade-offs
- ✅ Pros:
- ⚠️ Cons:
EOF
    ${EDITOR:-nano} "$filename"
}
```

**After adding these:**
```bash
source ~/.zshrc  # or ~/.bashrc
```

---

## 3. Git Hook (Optional)

Reminds you to document your work before committing.

**File:** `.git/hooks/pre-commit`

```bash
#!/bin/bash

if [ ! -f "sessions/LATEST.md" ]; then
    echo "⚠️  No session log found. Run './end-session.sh' to document this work?"
    read -p "Continue commit anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi
```

**Installation:**
```bash
chmod +x .git/hooks/pre-commit
```

---

## 4. Multi-Project Index

For managing multiple codebases simultaneously.

**Setup:**
```bash
mkdir -p ~/dev-context

cat > ~/dev-context/projects.md << 'EOF'
# Active Projects

## [Project Name 1]
- Path: ~/code/project1
- Status: [Active/Paused/Maintenance]
- Last worked: [Date]
- Quick context: [One sentence]

## [Project Name 2]
- Path: ~/code/project2
- Status: [Active/Paused/Maintenance]
- Last worked: [Date]
- Quick context: [One sentence]
EOF
```

**Add to shell config:**
```bash
alias projects='cat ~/dev-context/projects.md'
```

---

# The Complete Workflow

## Initial Setup (Once Per Project)

1. Navigate to your project:
   ```bash
   cd ~/code/your-project
   ```

2. Run setup script:
   ```bash
   ./setup-context.sh
   ```

3. Edit `.claude-context` with project-specific details:
   ```bash
   nano .claude-context
   ```

4. (Optional) Add to your projects index:
   ```bash
   nano ~/dev-context/projects.md
   ```

## Daily Workflow

### Starting a Coding Session

1. Navigate to project:
   ```bash
   cd ~/code/your-project
   ```

2. Start session:
   ```bash
   cs
   ```
   This displays:
   - Current project context
   - Last 2 session summaries
   - Recent git commits

3. Launch Claude Code and paste:
   ```
   Read .claude-context and sessions/LATEST.md
   ```

### During the Session

**Hit a weird bug or gotcha?**
```bash
gotcha "nextjs-hydration" "Next.js Hydration Mismatch with Tailwind"
```
This creates a dated file in `gotchas/` and opens it for you to document.

**Made an important architectural decision?**
```bash
decide "api-structure" "Using tRPC instead of REST"
```
This creates a dated file in `decisions/` and opens it for you to document.

**Quick context check without leaving terminal?**
```bash
ctx
```

### Ending a Session

1. Wrap up your work and run:
   ```bash
   ce
   ```

2. Fill in the session template:
   - What you focused on
   - What you completed
   - What you learned
   - Any blockers
   - What's next

3. Update `.claude-context` if anything significant changed

4. Commit your work (including context files):
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

## Switching Between Projects

1. Check your project index:
   ```bash
   projects
   ```

2. Navigate to the project:
   ```bash
   cd ~/code/other-project
   ```

3. Start fresh session:
   ```bash
   cs
   ```

---

# File Structure

After setup, your project will have:

```
your-project/
├── .claude-context              # Main project context file
├── start-session.sh            # Session startup script
├── end-session.sh              # Session logging script
├── quick-catch-up.sh           # Context summary script
├── sessions/
│   ├── template.md             # Session log template
│   ├── LATEST.md               # Symlink to most recent session
│   ├── 2024-12-03-0900.md     # Timestamped session logs
│   └── 2024-12-03-1430.md
├── decisions/
│   ├── README.md               # Decision log guide
│   └── 2024-12-03-api-choice.md
└── gotchas/
    ├── README.md               # Gotcha documentation guide
    └── 2024-12-03-tailwind-purge.md
```

---

# What Gets Version Controlled

**DO commit:**
- `.claude-context` - Project overview
- `sessions/` - All session logs (great for project history)
- `decisions/` - Architecture decisions (valuable documentation)
- `gotchas/` - Known issues (helps future contributors)
- All `.sh` scripts

**Optional `.gitignore` additions:**
```
# If you want sessions private
sessions/

# If you want to keep gotchas but not decisions
decisions/
```

---

# Tips & Best Practices

## Keep Sessions Short & Focused
Instead of one 6-hour session, do 3-4 shorter sessions with breaks. Document between each.

## Update .claude-context Frequently
When your "current focus" changes, update it immediately. 5 seconds now saves 5 minutes later.

## Be Honest in Session Logs
"Spent 2 hours debugging TypeScript generics, still confused" is valuable context.

## Use Gotchas Liberally
If something took more than 15 minutes to figure out, it's worth documenting.

## Link Related Items
In session logs, reference decision files: "See `decisions/2024-12-03-api-choice.md`"

## Review Last Week's Sessions
Every Monday, skim last week's sessions. Patterns emerge.

## Commit Context Files
Treat context files like code. They're part of your project documentation.

---

# Customization Ideas

## For JetBrains Users

Add to your scripts to open in WebStorm:
```bash
# In end-session.sh, replace ${EDITOR:-nano} with:
webstorm "$SESSION_FILE"
```

## For Teams

Share `.claude-context` and `decisions/` so everyone has the same knowledge base.

## For Deep Focus Sessions

Add a "focus mode" that temporarily disables notifications:
```bash
# In start-session.sh, add:
osascript -e 'tell application "System Events" to keystroke "D" using {command down, shift down}'
```

## For Metrics Nerds

Track session duration:
```bash
# In start-session.sh, add:
echo $(date +%s) > .session-start

# In end-session.sh, add:
START=$(cat .session-start)
END=$(date +%s)
DURATION=$((($END - $START) / 60))
echo "Session duration: $DURATION minutes" >> "$SESSION_FILE"
```

---

# Troubleshooting

## Scripts won't execute
```bash
chmod +x *.sh
```

## LATEST.md symlink broken
```bash
cd sessions/
ln -sf $(ls -t *.md | head -1) LATEST.md
```

## Aliases not working
```bash
source ~/.zshrc  # or ~/.bashrc
```

## Want to reset everything
```bash
rm -rf sessions/ decisions/ gotchas/ .claude-context *.sh
./setup-context.sh
```

---

# Why This Works

## Externalizes Memory
Files persist. Terminal sessions don't. Simple as that.

## Low Friction
2-3 minutes at session end vs. 10+ minutes catching up at session start.

## Portable
Everything lives in your repo. Works on any machine, any terminal.

## Git-Friendly
Context files are markdown. Great for diffs, history, and collaboration.

## Incrementally Valuable
Even if you only use `.claude-context`, you're better off. Everything else is gravy.

---

# Original Conversation Context

**User Background:**
- Full-stack developer with experience in Next.js, TailwindCSS, TypeScript, Ruby on Rails
- Uses JetBrains IDEs (WebStorm, PyCharm, RubyMine, DataSpell)
- Runs multiple coding sessions per day across different projects
- Concerned about losing context between Claude Code terminal sessions

**Problem Statement:**
Claude Code operates in terminal without session persistence. Each new session starts fresh with no memory of previous work, discoveries, or decisions made in earlier coding sessions.

**Solution Philosophy:**
Create a lightweight, file-based system that captures context with minimal friction, integrates naturally with existing git workflows, and scales across multiple simultaneous projects.

---

# Next Steps

1. **Save this document** somewhere accessible
2. **Create setup script** in your first project
3. **Run setup** and customize `.claude-context`
4. **Add shell aliases** to your config
5. **Try one session** with the new workflow
6. **Iterate** - adjust templates and scripts to fit your style

Remember: The system works best when it becomes invisible. Spend a few sessions getting comfortable, then let it fade into your natural workflow.

---

**Document Version:** 1.0  
**Last Updated:** 2025-12-03  
**Maintained By:** Your future self will thank you
