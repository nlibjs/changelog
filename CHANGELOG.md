# Changelog

## v0.1.9 (2020-10-04)

### Features

- add DefaultTypeAliases (d84f4ca)
- add --alias argument (2d6ac20)
- add parseTypeAliases (ad0003a)
- add ExtractCommitTypeProps (8af17ee)

### Bug Fixes

- update index (cb79769)
- dep → deps (e6c73e7)

### Tests

- --head (1744f8c)

### Dependency Upgrades

- upgrade dependencies (974dbc1)


## v0.1.8 (2020-10-03)

### Bug Fixes

- get initial version from cwd/package.json (3568127)

### Dependency Upgrades

- install @types/node (c249371)
- install @nlib/lint-commit (977ce7d)


## v0.1.7 (2020-09-16)

### Features

- output to stdout if --output is empty (4d79f15)

### Bug Fixes

- use require.main === module (8553875)

### Tests

- cli execution (7438f6d)

### Code Refactoring

- use exec() from @nlib/nodetool (0861111)

### Documentation

- fix the help output (29d91b5)

### Build System

- generate index automatically (6382298)

### Continuous Integration

- cleanup package.json before publish (7734182)

### Dependency Upgrades

- @nlib/nodetool@0.1.10 (4bfa5db)


## v0.1.6 (2020-09-15)

### Code Refactoring

- replace module.parent with require.main (e8dafa3)

### Dependency Upgrades

- upgrade dependencies (2f35c9d)


## v0.1.5 (2020-09-07)

### Dependency Upgrades

- @nlib/date@0.1.1 (ca84cea)


## v0.1.4 (2020-09-07)

### Bug Fixes

- use hash instead of shortHash (49b190a)


## v0.1.2 (2020-09-07)

### Features

- add initialTag option (c2b330a)
- set initialTag when --head is unset (8a334c7)
- skip if title is empty (f1b19d7)

### Bug Fixes

- replace testTypeChecker (7852fb5)

### Dependency Upgrades

- upgrade @nlib/typing and husky (cb57838)


## v0.1.1 (2020-09-07)

### Bug Fixes

- import source of testTypeChecker (ba5d050)

### Documentation

- add some badges (6b4baa7)


## v0.1.0 (2020-09-07)

### Features

- improve cli using nlib/nodetool (0924ed3)
- expose DefaultTagPattern (e7fd68b)
- write cli (d5662db)
- add serializeCommitGroup (fa555b2)
- add tagged commit to group (f1ddd95)
- add groupCommits (d9383e8)
- add extractCommitType (b3c65a1)
- getCommit works (ff56aa2)
- add parseRefNames (c90f268)
- add parseUnquotedCSVLine (2ce53a3)
- add type checkers (4a6542d)
- add isCommit (4f25e7e)
- add the "exec" function (b3ec2a6)

### Bug Fixes

- tsconfig.json (b216d77)
- set the type (3eb8b0b)
- update index to export some modules (c7dfeb0)
- add prefix (86c7e9e)
- remove trim() (8ce5882)

### Tests

- fix a test (ec0ff2f)
- test types (385c80a)
- log the output (093e6af)
- fix the expected value (985add1)
- rewrite tests to use sample commits (54dccf1)
- add sample commits (e29746e)

### Code Refactoring

- change the default type label (4e22880)

### Styles

- fix an eslint error (85d8145)

### Continuous Integration

- fetch all history (8653c8c)

### Dependency Upgrades

- upgrade nlib/typing (974ee5c)
- upgrade dependencies (404fd8f)


