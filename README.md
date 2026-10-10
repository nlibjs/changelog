# @nlib/changelog

A command to generate CHANGELOG.md from commit history.

[![Test](https://github.com/nlibjs/changelog/actions/workflows/test.yml/badge.svg)](https://github.com/nlibjs/changelog/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/nlibjs/changelog/branch/master/graph/badge.svg)](https://codecov.io/gh/nlibjs/changelog)

## Install

Requires Node.js 22.12.0 or later.

```
npm install --save-dev @nlib/changelog
```

## Usage

Add the [npm-version](https://docs.npmjs.com/cli/commands/npm-version) scripts to your package.json.

```json
{
  "scripts": {
    "version": "npx @nlib/changelog --output CHANGELOG.md && git add CHANGELOG.md"
  }
}
```

### Options

```
npx @nlib/changelog [options]
```

| Option | Description |
| --- | --- |
| `-o, --output <path>` | Write the changelog to a file. Without it, the changelog is written to stdout. Diagnostic logs always go to stderr. |
| `--head <commit-ish>` | Generate the changelog from this commit instead of `HEAD`. |
| `--remote <name>` | The remote used to build commit links. Defaults to `origin`. |
| `--alias <from/to...>` | Commit type aliases, such as `--alias chore/build`. Supplying any alias replaces the whole default alias map. |

```sh
# Print the changelog for the current version
npx @nlib/changelog

# Write the changelog up to v1.0.0 to a file
npx @nlib/changelog --head v1.0.0 --output CHANGELOG.md

# Link commits to the "upstream" remote and render chore: commits as Build System
npx @nlib/changelog --remote upstream --alias chore/build
```

Commit links are generated for GitHub, GitLab, and Bitbucket remotes in the HTTPS form (`https://github.com/example/repo.git`) or the SCP-like SSH form (`git@github.com:example/repo.git`), with or without the `.git` suffix. Other forms, such as `ssh://git@github.com/example/repo.git`, are not recognized and produce links like `/example/repo/commit/<hash>`.

## How commits are collected

The history walk collects every commit reachable from the head commit, each exactly once. Not every collected commit appears in the output: see [What is rendered](#what-is-rendered).

The history is walked along the first-parent chain. When a merge commit is found, the commits it merged (reachable from the merge commit but not from its first parent) are listed right after it, so they belong to the release that contains the merge, even if the merged branch forked before an older tag. Squash merges and rebases need no special handling.

Release tags are expected on the first-parent chain of the head commit (the branch you release from). A tag that exists only on a merged branch also starts a new section where it appears in the walk.

## Release sections

Collected commits are grouped into releases by tags that start with `v` (such as `v1.2.0`). A tagged commit and the earlier commits down to the previous release tag form one section, headed `## <tag> (<date>)`, where the date is the committer date of the tagged commit.

When `--head` is not given and the current directory has a `package.json` with a `version`, the commits after the newest tag are rendered as a section named `v<version>`. When no tag `v<version>` exists yet, the section is dated today; this is the section the `version` script above adds before npm creates the tag. When the newest tag already is `v<version>`, the commits after it are added to that tag's existing section, which keeps the tagged commit's date.

Commits that belong to no release section are omitted. This happens when `--head` is given (the `package.json` version is not used) or when there is no `package.json` version: commits after the newest tag do not appear.

## What is rendered

Only the first line of each commit message is rendered, without its type prefix. A commit appears under a heading when its type starts with one of these prefixes:

| Prefix | Heading |
| --- | --- |
| `break` | Breaking Changes |
| `feat` | Features |
| `fix` | Bug Fixes |
| `revert` | Reverts |
| `perf` | Performance Improvements |
| `test` | Tests |
| `refactor` | Code Refactoring |
| `style` | Styles |
| `docs` | Documentation |
| `build` | Build System |
| `ci` | Continuous Integration |
| `deps` | Dependency Upgrades |

Commits whose type matches none of these, such as `chore:`, and messages without a `type:` prefix are omitted. A release section whose commits are all omitted still gets its heading.

By default these aliases are applied before matching: `breaking` → `break`, `feature` → `feat`, `performance` → `perf`, `refactoring` → `refactor`, `document`, `documents`, `doc` → `docs`, `dependency`, `dependencies`, `dep` → `deps`. Passing `--alias` replaces this list, so add the defaults you still need.

A scope is rendered in bold, and a commit marked with `!` or a `BREAKING CHANGE:` (or `BREAKING-CHANGE:`) footer is listed under Breaking Changes regardless of its type:

| Commit message | Rendered |
| --- | --- |
| `fix(parser): handle empty input` | Bug Fixes: `**parser:** handle empty input` |
| `feat!: drop Node.js 20` | Breaking Changes: `drop Node.js 20` |
| `refactor: tidy` with a `BREAKING CHANGE: rename the API` footer | Breaking Changes: `tidy` |
| `chore: housekeeping` | omitted |
| `update readme` | omitted |
