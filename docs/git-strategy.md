# Git Workflow Strategy

## Branching
- `main` — стабильная ветка (только релизы)
- `dev` — основная ветка разработки
- Фичи: `feature/<feature-name>`
- Исправления: `fix/<bug-name>`

## Rules
- Перед созданием ветки обновляй `dev`
- Перед коммитом проверяй форматирование кода
- Pull Request обязателен
- Все PR ревьюит IvanZdannovich
- После одобрения — squash and merge