# @nlib/changelog

A command to generate CHANGELOG.md from commit history.

[![Test](https://github.com/nlibjs/changelog/actions/workflows/test.yml/badge.svg)](https://github.com/nlibjs/changelog/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/nlibjs/changelog/branch/master/graph/badge.svg)](https://codecov.io/gh/nlibjs/changelog)

## Install

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

## How commits are collected

The changelog includes every commit reachable from the head commit, each exactly once.

The history is walked along the first-parent chain. When a merge commit is found, the commits it merged (reachable from the merge commit but not from its first parent) are listed right after it, so they belong to the release that contains the merge, even if the merged branch forked before an older tag. Squash merges and rebases need no special handling.

Release tags are expected on the first-parent chain of the head commit (the branch you release from). A tag that exists only on a merged branch also starts a new section where it appears in the walk.
