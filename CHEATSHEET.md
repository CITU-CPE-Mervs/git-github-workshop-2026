# Git + GitHub Desktop Cheat Sheet

| Task | GitHub Desktop | Command |
|---|---|---|
| Start a repo | File > New repository | `git init` |
| Copy a repo | File > Clone repository | `git clone <url>` |
| See changes | Changes tab | `git status` / `git diff` |
| Save a snapshot | Commit button | `git add .` then `git commit -m "msg"` |
| View history | History tab | `git log --oneline` |
| Send to GitHub | Push origin | `git push` |
| Get updates | Fetch / Pull origin | `git pull` |
| New branch | Branch > New branch | `git switch -c <name>` |
| Switch branch | Current Branch dropdown | `git switch <name>` |
| Undo uncommitted change | Right-click file > Discard changes | `git restore <file>` |
| Undo a commit (safely) | History > right-click > Revert | `git revert <commit>` |

## Good habits
- One idea, one commit. Write messages like "Add tip calculator logic", not "update".
- Read the diff before you commit, especially AI-written code.
- Pull before you start working. Push when you finish.
- Never commit secrets (.env, API keys).

## Merge conflict markers
<<<<<<< HEAD      your version
=======
>>>>>>> branch    their version
Keep what you want, delete the three marker lines, save, then commit.
