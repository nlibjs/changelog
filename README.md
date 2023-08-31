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
    "version": "nlib-changelog --output CHANGELOG.md && git add CHANGELOG.md"
  }
}
```
