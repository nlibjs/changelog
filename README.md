# @nlib/changelog

A command to generate CHANGELOG.md from commit history.

[![Test](https://github.com/nlibjs/changelog/actions/workflows/test.yml/badge.svg)](https://github.com/nlibjs/changelog/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/nlibjs/changelog/branch/master/graph/badge.svg)](https://codecov.io/gh/nlibjs/changelog)

## Install

```
npm install --save-dev @nlib/changelog
```

## Usage

Add the postversion scripts to your package.json.

```json
{
  "scripts": {
    "postversion": "run-s postversion:*",
    "postversion:changelog": "nlib-changelog --output CHANGELOG.md",
    "postversion:add": "git add .",
    "postversion:commit": "git commit --amend --no-edit"
  }
}
```
