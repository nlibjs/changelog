# Changelog

## v0.2.0 (2022-06-18)

### Code Refactoring

- use latest indexen and commander ([70ef54b](https://github.com/nlibjs/changelog/commit/70ef54beae23cb7ef8267a3f0db91a5dbec01720))

### Documentation

- change the badge text ([6d1e61b](https://github.com/nlibjs/changelog/commit/6d1e61ba7bea60cee582c5d4b8ec47b127d3ecc0))
- update a badge ([1030f68](https://github.com/nlibjs/changelog/commit/1030f6855674c37ac4f1c2cabfa35db1d37c55fb))

### Continuous Integration

- delete node 12 and add node 18 ([802e893](https://github.com/nlibjs/changelog/commit/802e89370a578f9750a34dde7a36881660e6d6f3))
- remove Setup job ([846d9ac](https://github.com/nlibjs/changelog/commit/846d9ac58dc839af5e228c1365ba5b0523eeddef))
- use cleanup-package-json directly ([abe23c0](https://github.com/nlibjs/changelog/commit/abe23c06ffe6985ed868112379ef0b37d20e72bd))

### Dependency Upgrades

- upgrade @nlib/indexen ([347b17c](https://github.com/nlibjs/changelog/commit/347b17c9a858bd2362ce3459599a65caccd77f4d))
- @nlib/eslint-config:3.17.25→3.18.0 @nlib/typing:0.2.0→0.3.4 @types/eslint:7.28.0→8.4.3 @types/node:16.7.10→18.0.0 @typescript-eslint/eslint-plugin:4.30.0→5.28.0 @typescript-eslint/parser:4.30.0→5.28.0 ava:3.15.0→4.3.0 eslint:7.32.0→8.18.0 lint-staged:11.1.2→13.0.2 ts-node:10.2.1→10.8.1 typescript:4.4.2→4.7.4 ([c12d210](https://github.com/nlibjs/changelog/commit/c12d21084123c8ff7a2698724f715cba57dda8bb))
- uninstall @nlib/date and @nlib/global ([332e798](https://github.com/nlibjs/changelog/commit/332e7982bf8f611f23d9eff13b2c9d2968a75b96))
- @nlib/eslint-config:3.17.24→3.17.25 @nlib/githooks:0.0.5→0.1.0 @nlib/nodetool:0.1.17→0.3.0 ([babe13c](https://github.com/nlibjs/changelog/commit/babe13cfac04ce12c2024d0f89887c9d6df65824))
- call lint-commit directly ([d8f8143](https://github.com/nlibjs/changelog/commit/d8f81432586cc7055c61350f836d216c4e7ce31f))


## v0.1.11 (2021-09-04)

### Features

- add bin.changelog to call directly ([30afec8](https://github.com/nlibjs/changelog/commit/30afec8bf90151406bedcc7ffd612e3dd5acb289))

### Documentation

- update a badge ([db91dd6](https://github.com/nlibjs/changelog/commit/db91dd6e99e8c440395f07a6a6b1a001d7ee3cc1))

### Continuous Integration

- omit name ([39484eb](https://github.com/nlibjs/changelog/commit/39484eb5fc40ce42155696a4b468fbd04a260f6c))


## v0.1.10 (2021-09-04)

### Features

- serialize commit with links ([a871a5b](https://github.com/nlibjs/changelog/commit/a871a5bfcd3dd75cc11fd558e2126288c36449b8))
- add RemoteRepository ([8ae2826](https://github.com/nlibjs/changelog/commit/8ae28261d9c5af992559245ec6dd8ecf76e76ff6))

### Bug Fixes

- quotation ([c3f80fe](https://github.com/nlibjs/changelog/commit/c3f80fec7f6ab4da8366a37085093c402caa56f7))

### Tests

- other patterns ([ca8a0ef](https://github.com/nlibjs/changelog/commit/ca8a0efc11ac369d5a9875c9c84db7c914686283))
- move ava configuration ([bd1f9c1](https://github.com/nlibjs/changelog/commit/bd1f9c1a7bdc12ea418fa273d1e39f1e7625b087))

### Styles

- fix eslint errors ([2371cc0](https://github.com/nlibjs/changelog/commit/2371cc0be6c50022bf052ae1699c58c812b260d1))
- move eslint config ([2b59249](https://github.com/nlibjs/changelog/commit/2b592499a49652849224ecf60c1f18fb0e7a69fe))

### Continuous Integration

- set fail-fast ([7cfeecb](https://github.com/nlibjs/changelog/commit/7cfeecb5ccfdce3959d1d986d09c190de0dffe1b))
- echo SHELL ([e772801](https://github.com/nlibjs/changelog/commit/e772801e98bcad712600d804ac2a1dd84d75d387))
- fetch all history ([e64748f](https://github.com/nlibjs/changelog/commit/e64748f4e5d4af793eb51178fbd365285950a048))
- update actions ([eceb644](https://github.com/nlibjs/changelog/commit/eceb6449834b2f1a7ee9229de05f705b2e4bb9c9))

### Dependency Upgrades

- reinstall packages ([b9866a4](https://github.com/nlibjs/changelog/commit/b9866a4c2ec646565e19c07670215984ef40b4f9))
- npm audit fix ([c4a6d3f](https://github.com/nlibjs/changelog/commit/c4a6d3fec4083a1ed6c5fe808a496e974949e1b7))
- @nlib/eslint-config:3.17.16→3.17.22 lint-staged:10.5.4→11.0.0 ([c7193b4](https://github.com/nlibjs/changelog/commit/c7193b4eacc47a4211643b08495e02998be95e3d))


## v0.1.9 (2020-10-04)

### Features

- add DefaultTypeAliases ([d84f4ca](https://github.com/nlibjs/changelog/commit/d84f4ca1c17820271e155ac47ad65af63717ad21))
- add --alias argument ([2d6ac20](https://github.com/nlibjs/changelog/commit/2d6ac20c9fe4ad2485716d9cb109aa586bda8498))
- add parseTypeAliases ([ad0003a](https://github.com/nlibjs/changelog/commit/ad0003a863729c94221ace89abb5d2f0e2a8b4f6))
- add ExtractCommitTypeProps ([8af17ee](https://github.com/nlibjs/changelog/commit/8af17ee2bc027e567ebff3fca328abae2bd77369))

### Bug Fixes

- update index ([cb79769](https://github.com/nlibjs/changelog/commit/cb797698b66027378ee2d23c5f0c20293802b1aa))
- dep → deps ([e6c73e7](https://github.com/nlibjs/changelog/commit/e6c73e777031621b4b310dcc85943920f0c87be7))

### Tests

- --head ([1744f8c](https://github.com/nlibjs/changelog/commit/1744f8c58bc9b86de3188a32540e2ba34892f119))

### Dependency Upgrades

- upgrade dependencies ([974dbc1](https://github.com/nlibjs/changelog/commit/974dbc15681c0bde15942f67a027825da805fc0c))


## v0.1.8 (2020-10-03)

### Bug Fixes

- get initial version from cwd/package.json ([3568127](https://github.com/nlibjs/changelog/commit/3568127782dbbb8a23b26c36eccddbc8bc5e8abe))

### Dependency Upgrades

- install @types/node ([c249371](https://github.com/nlibjs/changelog/commit/c249371eea6b676e59d633588b9b6ad6444c3374))
- install @nlib/lint-commit ([977ce7d](https://github.com/nlibjs/changelog/commit/977ce7dd617686000538ee808e19ea9b2ba7c8bc))


## v0.1.7 (2020-09-16)

### Features

- output to stdout if --output is empty ([4d79f15](https://github.com/nlibjs/changelog/commit/4d79f15d5d43f1283871953fb300b6e13a6825e3))

### Bug Fixes

- use require.main === module ([8553875](https://github.com/nlibjs/changelog/commit/85538757c506ab047f1f34d0ba5ab95d2950b4a7))

### Tests

- cli execution ([7438f6d](https://github.com/nlibjs/changelog/commit/7438f6d25b079092b37ce4ad3b3d34bfcf342094))

### Code Refactoring

- use exec() from @nlib/nodetool ([0861111](https://github.com/nlibjs/changelog/commit/0861111941ef43a4de9ef3b92bf128a08773acf0))

### Documentation

- fix the help output ([29d91b5](https://github.com/nlibjs/changelog/commit/29d91b54235d31081fd3ddfb2fc4dfa61285e58b))

### Build System

- generate index automatically ([6382298](https://github.com/nlibjs/changelog/commit/638229890c1222ebc5bcf5d870649c3192edf40a))

### Continuous Integration

- cleanup package.json before publish ([7734182](https://github.com/nlibjs/changelog/commit/7734182fa16d1b7bd46629d6a562355bfeef8690))

### Dependency Upgrades

- @nlib/nodetool@0.1.10 ([4bfa5db](https://github.com/nlibjs/changelog/commit/4bfa5db9d8b1cee7d4449faa915111789f40ad9d))


## v0.1.6 (2020-09-15)

### Code Refactoring

- replace module.parent with require.main ([e8dafa3](https://github.com/nlibjs/changelog/commit/e8dafa3f57957115d5cdad853cf6a0f6bb9569ab))

### Dependency Upgrades

- upgrade dependencies ([2f35c9d](https://github.com/nlibjs/changelog/commit/2f35c9d0c873f3b48b1cd7720157a3a2ab3f897f))


## v0.1.5 (2020-09-07)

### Dependency Upgrades

- @nlib/date@0.1.1 ([ca84cea](https://github.com/nlibjs/changelog/commit/ca84cea71c10447fb7ff6aa81eb1e514636dbec2))


## v0.1.4 (2020-09-07)

### Bug Fixes

- use hash instead of shortHash ([49b190a](https://github.com/nlibjs/changelog/commit/49b190abf3ad83ef713695af9cae7a32c0e36219))


## v0.1.2 (2020-09-07)

### Features

- add initialTag option ([c2b330a](https://github.com/nlibjs/changelog/commit/c2b330afd53a47b6c1d1ec7a429a089330d0a8b4))
- set initialTag when --head is unset ([8a334c7](https://github.com/nlibjs/changelog/commit/8a334c7476dfba841985f8091b132e9639ee5ea9))
- skip if title is empty ([f1b19d7](https://github.com/nlibjs/changelog/commit/f1b19d787eaa0e2534b322e8b8592d0cb7e98620))

### Bug Fixes

- replace testTypeChecker ([7852fb5](https://github.com/nlibjs/changelog/commit/7852fb5118f5283529ba0d549f7a1c64f209d5d3))

### Dependency Upgrades

- upgrade @nlib/typing and husky ([cb57838](https://github.com/nlibjs/changelog/commit/cb5783858edd365f51012d711c4f6c3e2fabdb56))


## v0.1.1 (2020-09-07)

### Bug Fixes

- import source of testTypeChecker ([ba5d050](https://github.com/nlibjs/changelog/commit/ba5d050702d68249486f2166b8b9ddcd5669ca90))

### Documentation

- add some badges ([6b4baa7](https://github.com/nlibjs/changelog/commit/6b4baa72a901658de65c862f956d2fae763b9b66))


## v0.1.0 (2020-09-07)

### Features

- improve cli using nlib/nodetool ([0924ed3](https://github.com/nlibjs/changelog/commit/0924ed397327ad680dc8630593c851ed7e7e0263))
- expose DefaultTagPattern ([e7fd68b](https://github.com/nlibjs/changelog/commit/e7fd68b700ac1ae0ae4ff83e0a9296969ee494cb))
- write cli ([d5662db](https://github.com/nlibjs/changelog/commit/d5662dbb30eeddd8e698f16857295ff59a43ea7c))
- add serializeCommitGroup ([fa555b2](https://github.com/nlibjs/changelog/commit/fa555b299d6adf23e3ee7fcacede369443ae8161))
- add tagged commit to group ([f1ddd95](https://github.com/nlibjs/changelog/commit/f1ddd9507cd1b3c76413a6ba2edac61cd7e3d32b))
- add groupCommits ([d9383e8](https://github.com/nlibjs/changelog/commit/d9383e8858e5f8f5e6628e9a6fd6ddc70adaee9e))
- add extractCommitType ([b3c65a1](https://github.com/nlibjs/changelog/commit/b3c65a1ab0d94f6f3939c3dec7e58d5e9307c06c))
- getCommit works ([ff56aa2](https://github.com/nlibjs/changelog/commit/ff56aa2e7ae523f46f81fd5fb0757af74f721cce))
- add parseRefNames ([c90f268](https://github.com/nlibjs/changelog/commit/c90f2686009b9a3f0cdbf9881b5cc32ebd667c1e))
- add parseUnquotedCSVLine ([2ce53a3](https://github.com/nlibjs/changelog/commit/2ce53a371b74b85a338efbfc7e19f31aade23d99))
- add type checkers ([4a6542d](https://github.com/nlibjs/changelog/commit/4a6542d83d84f943797c183ade8830a9e26308f8))
- add isCommit ([4f25e7e](https://github.com/nlibjs/changelog/commit/4f25e7e3672d591fbb379790192d0b035889a5e2))
- add the "exec" function ([b3ec2a6](https://github.com/nlibjs/changelog/commit/b3ec2a662d1adf4d040960bd5ae40b2d7e308418))

### Bug Fixes

- tsconfig.json ([b216d77](https://github.com/nlibjs/changelog/commit/b216d779542404d8e9e4345b133cbc86411b58f9))
- set the type ([3eb8b0b](https://github.com/nlibjs/changelog/commit/3eb8b0bec247d1409cba869373b0146025ea8c96))
- update index to export some modules ([c7dfeb0](https://github.com/nlibjs/changelog/commit/c7dfeb0b3e0733092b377dd88c16458d3b2d4a8b))
- add prefix ([86c7e9e](https://github.com/nlibjs/changelog/commit/86c7e9e453b0c86461e95114d6c935b667aa2e71))
- remove trim() ([8ce5882](https://github.com/nlibjs/changelog/commit/8ce588206b9d10e6cc96ed0a3e982dc8bfecfab1))

### Tests

- fix a test ([ec0ff2f](https://github.com/nlibjs/changelog/commit/ec0ff2f639e51d856515b706f8cf697770731fa9))
- test types ([385c80a](https://github.com/nlibjs/changelog/commit/385c80a124ca7d8a9e70cc0f30eb514100a487f2))
- log the output ([093e6af](https://github.com/nlibjs/changelog/commit/093e6af4e9bdfc7c20093e49f2b2e41d2cd7841d))
- fix the expected value ([985add1](https://github.com/nlibjs/changelog/commit/985add1bf3585e6ef38e238cf644c09b7707f1a9))
- rewrite tests to use sample commits ([54dccf1](https://github.com/nlibjs/changelog/commit/54dccf177fa5cde469b01454e9cb530a242c3156))
- add sample commits ([e29746e](https://github.com/nlibjs/changelog/commit/e29746ea05d8ae9a151f60ced6ee03c1e69a2078))

### Code Refactoring

- change the default type label ([4e22880](https://github.com/nlibjs/changelog/commit/4e2288037f6bcbabbada0f2ccaff64bc49845a6f))

### Styles

- fix an eslint error ([85d8145](https://github.com/nlibjs/changelog/commit/85d814542ec230923e527d0deeae9c62ae510088))

### Continuous Integration

- fetch all history ([8653c8c](https://github.com/nlibjs/changelog/commit/8653c8c650d5af77eb80e9e2927ff60f1aa99712))

### Dependency Upgrades

- upgrade nlib/typing ([974ee5c](https://github.com/nlibjs/changelog/commit/974ee5c2a6041f9993ef654bc3ef65fcae1ec10b))
- upgrade dependencies ([404fd8f](https://github.com/nlibjs/changelog/commit/404fd8fb4158ab5f04ae02ac3e4274a0de01f565))


