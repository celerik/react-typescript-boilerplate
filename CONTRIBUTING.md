# Contributing

Thank you for your interest in contributing to this project.

These guidelines help us respect everyone's time. Many people contribute to these repositories. Following these guidelines make it easier for us to review and merge your PR in a timely fashion. These practices minimize conflicts with PRs from other community members and our team. Because PRs that don't follow these guidelines often cause extra work for us and community members, those PRs may be rejected. If you want an exception, start by creating an issue.

## Process for contributing

You need a basic understanding of [Git, GitHub.com](https://guides.github.com/activities/hello-world/), [GitHub Flow workflow](https://guides.github.com/introduction/flow/), and [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

You can divide the GitHub workflow in 4 basic steps:

- Creating a Branch.
- Making a Commit.
- Opening a Pull Request.
- Review of the Pull Request/Merging.

The overall flow of Gitflow is:

- A develop branch is created from master
- A release branch is created from develop
- Feature branches are created from develop
- When a feature is complete it is merged into the develop branch
- When the release branch is done it is merged into develop and master
- If an issue in master is detected a hotfix branch is created from master
- Once the hotfix is complete it is merged to both develop and master

How to commit:

```
npm install -g commitizen
git add .
npx cz
```

### Before submitting your PR, please review the following checklist:

_Put an `x` in the boxes that apply. You can also fill these out after creating the PR. If you're unsure about any of them, don't hesitate to ask. We're here to help! This is simply a reminder of what we are going to look for before merging your code._

- [ ] **DO** our commits messages format follows the default commitizen format.
- [ ] **DO** create one PR for each task. PRs that include multiple unrelated changes are much harder to review. That delays reviews and merging PRs. This guideline applies to reviews as well: we try not to suggest unrelated changes in reviews; we ask that community reviews adhere to this guideline.
- [ ] **DO** code is self-documenting an easy to understand
- [ ] **DO** there is no commented out code
- [ ] **DO** there is no unnecessary logging or debugging code
- [ ] **DO** errors are handled
- [ ] **DO** naming conventions are beign followed for methods, variables classes, etc.
- [ ] **DO** lint has passed locally and any fixes were made for failures
- [ ] **DO** add a unit test if your PR resolves an issue.
- [ ] **DO** add an animated gif showing the what the issue is and another animating gif after resolving the issue.
- [ ] **DO** keep pull requests small so they can be easily reviewed.
- [ ] **DO** make sure unit tests pass.
- [ ] **DO** make sure selenium tests pass.
- [ ] **DO** make sure any public APIs are documented.
- [ ] **DO** extended the README / documentation, if necessary
- [ ] **DO** make sure not to introduce any compiler warnings.
- [ ] **DO** build was run locally, your branch is in sync with master and any changes were pushed
- [ ] **DO** lint has passed locally and any fixes were made for failures
- [ ] **AVOID** breaking the continuous integration build.
- [ ] **AVOID** making significant changes to the overall architecture.
