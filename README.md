# 🌐 Class Hub — Git & GitHub Workshop

> **One page, many widgets. Each one built by a different engineer.**  
> A collaborative web dashboard created for the **Git & GitHub Desktop: From Solo Coding to Team Collaboration** workshop (Computer Engineering Hands-On Lab).

---

## 📚 Interactive Workshop Slides & Study Guide

The complete 24-slide curriculum, interactive AI prompt generator, merge conflict simulator, and study guide are included directly in this repository:

👉 **[Open Workshop Slides & Study Guide (`git_github_workshop_interactive_deck_study_guide.html`)](./git_github_workshop_interactive_deck_study_guide.html)** in any web browser!

- **Slide Deck Mode:** Full-screen presentation mode with keyboard navigation (`←` / `→`, `Space`, `N` for speaker notes, `T` for light/dark theme, `M` for table of contents).
- **Study Guide Mode:** Single-page scrollable reference guide with all 24 slides, code snippets, and diagrams.
- **Interactive Tools:** Built-in AI Prompt Builder, 5-Stage Git Pipeline Inspector, File Tour, and Live Merge Conflict Simulator.

---

## ⚡ Quick Start (No Install Needed)

1. **Clone this repository:**
   ```bash
   git clone https://github.com/CITU-CPE-Mervs/git-github-workshop-2026.git
   ```
   *(Or click **Code → Open with GitHub Desktop**)*
2. **Open the project:**
   - Double-click `index.html` to view the live Class Hub dashboard.
   - Double-click `git_github_workshop_interactive_deck_study_guide.html` to view the workshop deck.
   - No `npm install`, Node.js, or local web server required!

---

## 🎯 Intended Learning Outcomes (ILOs)

By the end of this 3-hour workshop, every participant will be able to:
1. **Speak the Language of VCS:** Clearly explain repositories, commits, branches, remotes (`origin`), and Pull Requests (PRs).
2. **Master GitHub Desktop + CLI:** Execute the full lifecycle using GitHub Desktop while understanding the exact terminal commands underneath.
3. **Collaborate Without Overwriting:** Build and isolate features on custom branches (`widget/yourname`), review peer code, and calmly resolve merge conflicts.
4. **Audit & Recover with Confidence:** Inspect line-by-line diffs before committing AI-generated code, discard uncommitted mistakes (`git restore`), and revert bad commits safely (`git revert`).

---

## 🛠️ Step-by-Step Contribution Guide (The 11-Step Loop)

Follow this exact workflow to build and ship your custom widget to Class Hub:

### 1. Pre-Flight Setup
Ensure your Git identity is configured with your real name and email:
- **GitHub Desktop:** `File → Options → Git` (Windows) or `Settings → Git` (Mac).
- **Terminal:**
  ```bash
  git config --global user.name "Your Full Name"
  git config --global user.email "your-github-email@example.com"
  ```

### 2. Update `main` Before Starting
Always ensure your local repository has the freshest code:
- In GitHub Desktop, switch to `main` and click **Fetch origin** → **Pull origin** (`git pull`).

### 3. Create Your Feature Branch ⚠️ *(NEVER commit directly to `main`!)*
- Click **Branch → New branch...** (`git switch -c widget/yourname`).
- Branch naming convention: `widget/<firstname>` (all lowercase, e.g., `widget/juan`).

### 4. Create Your Widget (`widgets/<yourname>.js`)
- Use AI (ChatGPT, Claude, Gemini) or write your own Vanilla JavaScript widget.
- Wrap all code in an Immediately Invoked Function Expression (IIFE) to avoid variable collisions:
  ```javascript
  (function () {
    const root = document.getElementById('yourname-widget');
    if (!root) return;

    root.innerHTML = `
      <p id="yourname-status">Ready!</p>
      <button id="yourname-btn">Click Me</button>
    `;

    root.querySelector('#yourname-btn').addEventListener('click', () => {
      root.querySelector('#yourname-status').textContent = 'Widget activated! 🚀';
    });
  })();
  ```

### 5. Hook Your Widget into `index.html`
Carefully add your HTML markup under the marked comment lines (do **not** delete existing widgets or comments):
- Under `<!-- ADD YOUR WIDGET SECTION BELOW THIS LINE -->`:
  ```html
  <section class="widget">
    <h2>Your Name's Widget</h2>
    <div id="yourname-widget"></div>
  </section>
  ```
- Under `<!-- ADD YOUR SCRIPT TAG BELOW THIS LINE -->`:
  ```html
  <script src="widgets/yourname.js"></script>
  ```

### 6. Sign the Contributors Wall
Add your name to the bottom of the [Contributors](#contributors) list in `README.md`:
```markdown
- Your Full Name (@yourgithubusername)
```

### 7. Audit Your Diff in GitHub Desktop
- Switch to the **Changes** tab in GitHub Desktop (`git diff`).
- Inspect every green line (`+`). Confirm you didn't accidentally delete comments or modify `style.css`.
- Test `index.html` in your browser to verify your widget renders and functions properly.

### 8. Make Clean, Atomic Commits
Commit one logical idea at a time with clear messages:
- **Commit 1:** `Add <Your Name> to README contributors`
- **Commit 2:** `Add <widget description> logic in widgets/<yourname>.js`
- **Commit 3:** `Register <yourname> widget section and script in index.html`

### 9. Sync with `main` Before Pushing
- Switch to your branch, click **Branch → Update from main** (`git merge main`).
- If conflicts arise in `index.html` or `README.md`, resolve them (see [Resolving Merge Conflicts](#resolving-merge-conflicts)).

### 10. Push & Open a Pull Request
- Click **Publish branch** or **Push origin** (`git push -u origin widget/yourname`).
- In GitHub Desktop, click **Branch → Create Pull Request** (or open PR on GitHub.com).
- Title: `Add <Your Name>'s <Widget Name> Widget`.
- Base branch: `main` ← Compare branch: `widget/yourname`.

### 11. Peer Code Review & Merge
- Pair up with a seatmate! Check their PR's **Files changed** tab:
  1. Did they preserve comment markers and example widgets?
  2. Does the `div` ID in `index.html` match the JS selector?
  3. Did they only touch their own files (`README.md`, `index.html`, `widgets/yourname.js`)?
  4. Leave an approving comment and merge!

---

## 🤖 The 4 Ground Rules for Using AI

1. **AI Writes Code. YOU Do All the Git:** Never ask AI to run git commands or write git commit messages. You drive the repository.
2. **Read the Diff Before You Commit:** If you cannot explain what a line of AI code does, ask the AI to explain it or do not commit it.
3. **Small Prompts, Small Commits:** One prompt → test in browser → one working feature → one commit.
4. **Vanilla JS Only & Zero Secrets:** All logic lives in `widgets/<yourname>.js`. No external libraries, no frameworks, and **never paste API keys or credentials**.

---

## ⚡ Time Travel & Undoing Mistakes

| Scenario | Situation | Solution in GitHub Desktop | Terminal CLI Command |
|---|---|---|---|
| **Uncommitted Mess** | AI broke code, but you **haven't committed yet** | Changes tab → Right-click file → **Discard changes...** | `git restore <file>` |
| **Committed Mistake** | Bad commit was already saved to history | History tab → Right-click commit → **Revert changes in commit** | `git revert <commit-hash>` |
| **Wrong Branch** | Accidentally committed to `main` locally | History tab → Right-click commit → **Undo commit** | `git reset HEAD~1` |

---

## 🔀 Resolving Merge Conflicts

A merge conflict occurs when two contributors edit the exact same lines of a shared file (`index.html` or `README.md`). **Conflicts are not errors**—they are Git safely asking a human to decide what code to keep.

When conflict markers appear:
```html
<<<<<<< HEAD
  <script src="widgets/juan.js"></script>
=======
  <script src="widgets/maria.js"></script>
>>>>>>> main
```

1. Open the file in **VS Code**.
2. **Keep both widgets:** Place both `<script>` (or `<section>`) tags.
3. **Delete the 3 marker lines:** Remove `<<<<<<< HEAD`, `=======`, and `>>>>>>> main`.
4. Save the file, refresh `index.html` in your browser to verify both widgets work.
5. In GitHub Desktop, click **Continue merge** and **Push origin**.

---

## 📁 Repository Structure

```text
class-hub/
├── .gitignore                                          # Prevents secrets (.env) and OS junk from committing
├── CHEATSHEET.md                                       # Desktop-to-CLI command reference guide
├── README.md                                           # Workshop instructions and Contributors Wall (this file)
├── index.html                                          # Shared dashboard grid where widgets render
├── style.css                                           # Shared responsive grid and widget styling (read-only)
├── git_github_workshop_interactive_deck_study_guide.html # 24-slide interactive presentation & study guide
└── widgets/
    ├── example.js                                      # Reference starter Click Counter widget (do not delete)
    └── <yourname>.js                                   # Your custom widget file (created during workshop)
```

---

## 👥 Contributors

<!-- ADD YOUR NAME BELOW THIS LINE -->
- Facilitator (Mervin John Tampus)
- Juan dela Cruz
- Moshi Moshi Saito