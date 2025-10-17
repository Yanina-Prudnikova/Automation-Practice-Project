# Git Workflow and Branching Strategy

## 1. Branching Strategy

- The `main` branch is **protected** — direct commits and pushes are not allowed.
- All changes must go through **Pull Requests (PRs)**.
- Each PR must be reviewed and approved by at least **one reviewer** before merging.
- Feature development is done in separate branches using the following naming convention:
  Example: `feature/setup-cypress`, `fix/readme-typo`.

## 2. Commit Rules

- Use clear and meaningful commit messages:
  Examples:
- `feat: add initial Cypress configuration`
- `fix: correct typo in README`
- `chore: update .gitignore`

## 3. Pull Requests (PR)

- Create a PR from your feature branch into `main`.
- Add a short description of the changes.
- Assign a reviewer (`@IvanZdanovich`) in the PR description.
- Wait for the reviewer’s approval before merging.
- Once approved, perform **Squash and Merge**.

## 4. Merge Rules

- Only **Squash and Merge** is allowed.
- This keeps the commit history clean and linear.
- The source branch will be **automatically deleted** after the merge.

## 5. Protection Rules

The repository is configured as follows:

- Direct commits to `main` are **blocked**.
- At least **1 approving review** is required for every PR.
- Only **Squash merges** are allowed.
- Source branches are **auto-deleted** after merging.

## 6. Summary

This Git workflow ensures:

- Consistent and controlled code integration.
- Clean and readable history (one commit per feature).
- Protection from accidental changes to the main branch.
