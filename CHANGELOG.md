# Changelog

## v0.4.1 (2026-10-12)

### Bug Fixes

- remove nonexistent library main entry (#556) ([9bf1dfd](https://github.com/nlibjs/changelog/commit/9bf1dfd0fda20a530df55c42bba4f36a3aef14d6))
- pin release caller to inherited-permission workflow (#555) ([ff3a785](https://github.com/nlibjs/changelog/commit/ff3a7852615b46aa1938b3bb8b1a55b09f7976a4))

### Continuous Integration

- adopt shared npm release workflow for changelog pilot (#554) ([0fc86df](https://github.com/nlibjs/changelog/commit/0fc86dffba69fe6c2dd45d8d91e491fd4de2148c))
- release automatically when the package.json version changes on main (#553) ([0b2b586](https://github.com/nlibjs/changelog/commit/0b2b586369483cab60c5096d72dcc6dedc6012eb))


## v0.4.0 (2026-10-11)

### Breaking Changes

- require Node.js >=22.12.0 to match commander 15 (#539) ([08c85f1](https://github.com/nlibjs/changelog/commit/08c85f1b29fd9c0f81d2d5c6a87b03ff630e2c71))

### Bug Fixes

- build before generating CHANGELOG.md in the version script (#549) ([95071de](https://github.com/nlibjs/changelog/commit/95071deff4933c3eb25bb7b6c85ff8f2f05cea98))
- accept remote URLs without a .git suffix (#546) ([c41fff7](https://github.com/nlibjs/changelog/commit/c41fff7f81b7a4888abe8099bf3988c38a131d6f))
- read committer metadata with Git's committer placeholders (#545) ([48d633d](https://github.com/nlibjs/changelog/commit/48d633de082b34769b07354011436533a8b8bdf0))
- include every merged commit when walking history (#541) ([8393ad8](https://github.com/nlibjs/changelog/commit/8393ad8b299a9e718bfe1ede587da051050be372))
- include scoped and breaking commits in the changelog (#538) ([c3050c2](https://github.com/nlibjs/changelog/commit/c3050c25bd392e0ce41e24383b59c83b06c27660))
- write diagnostic logs to stderr so stdout carries only the changelog (#537) ([072bfb6](https://github.com/nlibjs/changelog/commit/072bfb6ead650aa1aa07b9c0461c2163fcf28c85))
- accept a remote name with --remote (#536) ([685c5b9](https://github.com/nlibjs/changelog/commit/685c5b9ccdb62ebae448b74fa43634c622a21110))

### Performance Improvements

- read commit history in batches instead of one git log per commit (#540) ([a7accc7](https://github.com/nlibjs/changelog/commit/a7accc74aaadfcddb42028ebfd11340781fd24fd))

### Documentation

- point the codecov badge at main and add npm version and license badges (#550) ([73ae8d8](https://github.com/nlibjs/changelog/commit/73ae8d8f70e24da3624243c18cff124e8bf459b4))
- explain which collected commits are rendered and document CLI options (#547) ([0cb618e](https://github.com/nlibjs/changelog/commit/0cb618e009d08f3c8bbb04cc3550983d4913421a))

### Build System

- emit source maps so coverage maps back to src (#551) ([4f5bca5](https://github.com/nlibjs/changelog/commit/4f5bca50a52f0f07185b0b0ffb92f8f4989a60ac))

### Continuous Integration

- stage npm releases for maintainer approval (#548) ([35b867d](https://github.com/nlibjs/changelog/commit/35b867dea2d430c6ca5415056360647760594558))

### Dependency Upgrades

- **renovate:** update dependency typescript to v7 (#528) ([83511b8](https://github.com/nlibjs/changelog/commit/83511b8e92b1e851bdbfdaf05f76ff3e4da1d7b1))
- **renovate:** update dependency node to v24 (#512) ([9348733](https://github.com/nlibjs/changelog/commit/934873355b43a556a412eb1f70a7c0b1641576d2))
- **renovate:** update dependency @biomejs/biome to v2 (#513) ([bc995cf](https://github.com/nlibjs/changelog/commit/bc995cfcc2e7febcda6477f87d18dbd01453237d))
- **renovate:** update dependency @nlib/typing to v3.0.4 (#519) ([e2b2072](https://github.com/nlibjs/changelog/commit/e2b207241bb58a299b076bf4d6cacaf1073961cc))
- **renovate:** update dependency @types/node to v22.20.5 (#509) ([c59ca82](https://github.com/nlibjs/changelog/commit/c59ca82b287ffa7cc4acd029b99e4713ef763cd3))
- **renovate:** update actions/setup-node action to v7 (#529) ([6cf6f08](https://github.com/nlibjs/changelog/commit/6cf6f08b0e9be69cef517d0050822183e23d8fd8))
- **renovate:** update codecov/codecov-action action to v7 (#525) ([a2eb869](https://github.com/nlibjs/changelog/commit/a2eb869e2a7eefdfebbdfecf62184976d96ba7c5))
- **renovate:** update actions/setup-node action to v6 (#518) ([8298560](https://github.com/nlibjs/changelog/commit/82985601372224e85a8369405f4af64bc5e31898))
- **renovate:** update dependency commander to v15 (#524) ([6101216](https://github.com/nlibjs/changelog/commit/61012163777f5569c29ec24321d2a424a894a957))
- **renovate:** update actions/checkout action to v7 (#526) ([ef2fb69](https://github.com/nlibjs/changelog/commit/ef2fb6955871cbc72875ec1bd287776d4ed9ac9f))
- **renovate:** update dependency typescript to v5.9.3 (#517) ([fdc24b6](https://github.com/nlibjs/changelog/commit/fdc24b61b602e8f3405632889260520a95e22d9e))
- **renovate:** update dependency typescript to v5.9.2 (#514) ([6b6816e](https://github.com/nlibjs/changelog/commit/6b6816ec1a772d6599a3bc847884f5e856d9c767))
- **renovate:** update dependency typescript to v5.8.3 (#510) ([b8fff4b](https://github.com/nlibjs/changelog/commit/b8fff4bd1918c41af92d76cb7721b57dd7139619))
- **renovate:** update dependency @types/node to v22.13.9 (#508) ([e3adcc9](https://github.com/nlibjs/changelog/commit/e3adcc9fe9d29ab8aa6878106dd716704223e6a9))
- **renovate:** update dependency @types/node to v22.13.8 (#507) ([29b000d](https://github.com/nlibjs/changelog/commit/29b000dd3b4285f731249359f204f753fa15ad0f))
- **renovate:** update dependency typescript to v5.8.2 (#506) ([d7398d1](https://github.com/nlibjs/changelog/commit/d7398d12e7462084467d86ee0b577ea9573033ae))
- **renovate:** update dependency @types/node to v22.13.7 (#505) ([8164551](https://github.com/nlibjs/changelog/commit/816455110505e78183e2b67b2481ac96b1f88291))
- **renovate:** update dependency @types/node to v22.13.5 (#504) ([7790954](https://github.com/nlibjs/changelog/commit/7790954ce006c05aaadcd6b4517942e858f7286a))
- **renovate:** update dependency @types/node to v22.13.4 (#503) ([3a763b9](https://github.com/nlibjs/changelog/commit/3a763b9d15af6566058f2341c48aac69b21c76fc))
- **renovate:** update dependency @types/node to v22.13.2 (#502) ([433e783](https://github.com/nlibjs/changelog/commit/433e783592c546b79ce1b001fdb289896b0634fd))
- **renovate:** update dependency @types/node to v22.13.1 (#501) ([71a22ed](https://github.com/nlibjs/changelog/commit/71a22ed575bb23eb0863ff7a8ec5bd639561ffa4))
- **renovate:** update dependency @types/node to v22.13.0 (#500) ([ef29f0c](https://github.com/nlibjs/changelog/commit/ef29f0c57ca9ccc0a671bf02e14371e83b78b791))
- **renovate:** update dependency @types/node to v22.12.0 (#499) ([877885d](https://github.com/nlibjs/changelog/commit/877885dac5fd91886ea8822c374fa1ca4845e62b))
- **renovate:** update dependency @types/node to v22.10.10 (#498) ([5346a56](https://github.com/nlibjs/changelog/commit/5346a5624f2d5d2b6935f4b40b52de1212218707))
- **renovate:** update dependency @types/node to v22.10.9 (#497) ([66739d7](https://github.com/nlibjs/changelog/commit/66739d7ac0f53bddfc9cb4773f71f516c8d443c8))
- **renovate:** update dependency @types/node to v22.10.7 (#496) ([d61d3b6](https://github.com/nlibjs/changelog/commit/d61d3b6cd1e636a7a3175ef6bf595fb8c2d9e4de))
- **renovate:** update dependency @types/node to v22.10.6 (#495) ([3ff23f3](https://github.com/nlibjs/changelog/commit/3ff23f327685b6a3dcc7f885c0fa606510931dc5))
- **renovate:** update dependency typescript to v5.7.3 (#494) ([effa919](https://github.com/nlibjs/changelog/commit/effa919ebc75f158de46cebe923933fb747dc054))
- **renovate:** update dependency @types/node to v22.10.5 (#492) ([67418ce](https://github.com/nlibjs/changelog/commit/67418ce7af8295582c5302f66366ae15c9e34ea1))
- **renovate:** update dependency @types/node to v22.10.2 (#491) ([5cb5840](https://github.com/nlibjs/changelog/commit/5cb5840a52c963b9afff6bbb0c34d975e2c21b40))
- **renovate:** update dependency @types/node to v22.10.1 (#490) ([f821c46](https://github.com/nlibjs/changelog/commit/f821c4605d407b21407d6cb5cbb900edba9ec0b2))
- **renovate:** update dependency @types/node to v22.10.0 (#489) ([cfb8c37](https://github.com/nlibjs/changelog/commit/cfb8c37368a032e790886d835d0f22d894bef3a7))
- **renovate:** update dependency @types/node to v22.9.4 (#488) ([40302f9](https://github.com/nlibjs/changelog/commit/40302f9d3302d159d1948d935ebc09af11b5d430))
- **renovate:** update dependency @types/node to v22.9.3 (#487) ([dfb0e01](https://github.com/nlibjs/changelog/commit/dfb0e018517e1de5652ad17518d9e5000ec71b24))
- **renovate:** update dependency typescript to v5.7.2 (#486) ([0081249](https://github.com/nlibjs/changelog/commit/0081249e4a320dc492cee3ccf376b3a6bd3be50d))
- **renovate:** update dependency @types/node to v22.9.1 (#485) ([68bd022](https://github.com/nlibjs/changelog/commit/68bd022edb43048417b76bc35769853e8c6a7a2a))
- **renovate:** update dependency @types/node to v22.9.0 (#483) ([e3ed0a3](https://github.com/nlibjs/changelog/commit/e3ed0a373ac541bba771f51658af404abaabe2d2))
- **renovate:** update dependency @types/node to v22.8.7 ([87ec02a](https://github.com/nlibjs/changelog/commit/87ec02a62c777040252f1093a1630a3c313d3598))
- **renovate:** update dependency @types/node to v22.8.6 ([71c8537](https://github.com/nlibjs/changelog/commit/71c8537b64f646bd7fd2a127b17df8908b8dc1b9))
- **renovate:** update dependency @types/node to v22.8.5 ([6e338c7](https://github.com/nlibjs/changelog/commit/6e338c7369e118d32f758f458626adfce1ada156))
- **renovate:** update dependency @types/node to v22.8.4 ([e70c542](https://github.com/nlibjs/changelog/commit/e70c5428e9ef5b6562e104fa0cbb023c25337788))
- **renovate:** update dependency @types/node to v22.8.2 ([1ca0f41](https://github.com/nlibjs/changelog/commit/1ca0f410850f295c2785b91a286bd7c7f04cfb6b))
- **renovate:** update dependency @types/node to v22.8.1 ([08917b5](https://github.com/nlibjs/changelog/commit/08917b55a5e721b272b7b005df963ed95644e1d3))
- **renovate:** update dependency @types/node to v22.8.0 ([81f9eda](https://github.com/nlibjs/changelog/commit/81f9eda33b6d5847ba3f257636aa5f8ea4704502))
- **renovate:** update dependency @types/node to v22.7.9 ([8bc384d](https://github.com/nlibjs/changelog/commit/8bc384d9b3055300b7cf0a938b7107f77c4b58ba))
- **renovate:** update dependency @types/node to v22.7.8 ([b208047](https://github.com/nlibjs/changelog/commit/b2080470fafbfa186383b335fdafb5daf7ca9dfe))
- **renovate:** update dependency @types/node to v22.7.7 ([d49d4ca](https://github.com/nlibjs/changelog/commit/d49d4cac9e06965b077a74e1759a6f896c5bc633))
- **renovate:** update dependency @biomejs/biome to v1.9.4 ([bcb27e4](https://github.com/nlibjs/changelog/commit/bcb27e42d12788e73259047faee2291e11575de2))
- **renovate:** update dependency @types/node to v22.7.6 ([161d25a](https://github.com/nlibjs/changelog/commit/161d25a0240c7c505ebe7080fa41cc24b7bb7106))
- **renovate:** update dependency @nlib/tsm to v1.1.0 ([6b797c4](https://github.com/nlibjs/changelog/commit/6b797c4305cf3e0cab644ecdf5b7ec4798e323af))
- **renovate:** update dependency typescript to v5.6.3 ([c43688c](https://github.com/nlibjs/changelog/commit/c43688c0e46a11b2bd7d95e66f4555a5742222ad))
- **renovate:** update dependency @types/node to v22.7.5 ([15b8435](https://github.com/nlibjs/changelog/commit/15b8435194109362097db0f5dd86c26cede8933a))
- **renovate:** update dependency @nlib/typing to v3.0.1 ([f72c148](https://github.com/nlibjs/changelog/commit/f72c1489f0a78f47b34f9ad03f2daffc50dcb170))


## v0.3.2 (2024-10-02)

### Tests

- passed ([fbe0e2b](https://github.com/nlibjs/changelog/commit/fbe0e2b8b0f6a254019f8ade30759927abee36f1))

### Styles

- fix biome lint errors ([f301da1](https://github.com/nlibjs/changelog/commit/f301da1fea661a0dfe715b72982725964765e9c4))

### Documentation

- update README.md ([952a69e](https://github.com/nlibjs/changelog/commit/952a69e79751d752c90848d14dea0b3c5ab2d6d7))

### Continuous Integration

- install biome ([0b4dfc1](https://github.com/nlibjs/changelog/commit/0b4dfc147244ab628de98b6e599c0dd41c87b537))
- run npm install ([9cc5070](https://github.com/nlibjs/changelog/commit/9cc50700e566242e89bcbd1b5f5031bab49374a7))
- use v4 actions ([08f7af4](https://github.com/nlibjs/changelog/commit/08f7af4c3d1cc56b2b9d495e0e5cba3fc0bb3621))

### Dependency Upgrades

- @nlib/typing:1.1.0→3.0.0 ([d13f069](https://github.com/nlibjs/changelog/commit/d13f0692f1b3aff88aae9796d829be423407c650))
- @types/node:20.11.29→22.7.4 ([0ac008a](https://github.com/nlibjs/changelog/commit/0ac008a95d440ea1a05827ab801de50e6fa0e951))
- commander:11.1.0→12.1.0 ([b284e9f](https://github.com/nlibjs/changelog/commit/b284e9f504997b2b3f9d2fb3a528d7418cbb1f18))
- typescript:5.4.2→5.6.2 ([14cd51b](https://github.com/nlibjs/changelog/commit/14cd51b7ffd3d9444a4be8e4c64a22b4b7f29651))
- install biome and uninstall some packages ([7660a39](https://github.com/nlibjs/changelog/commit/7660a39b57bda37600e53d5d6c17dd7ada37246a))
- **renovate:** update dependency @nlib/eslint-config to v3.20.5 ([8e22b67](https://github.com/nlibjs/changelog/commit/8e22b6703566588bca571dd009601c473e60fb4d))
- **renovate:** update dependency @types/node to v20.11.29 ([93e5a1d](https://github.com/nlibjs/changelog/commit/93e5a1dce6daceb92ac15064a5d4fb4639dd0aef))
- **renovate:** update dependency @types/node to v20.11.28 ([45c942a](https://github.com/nlibjs/changelog/commit/45c942ab73aa218d1e4875450221f27f86ec1608))
- **renovate:** update dependency @types/node to v20.11.27 ([7a05b2b](https://github.com/nlibjs/changelog/commit/7a05b2be708c3125c2d7954a0f6b35ca1236374b))
- **renovate:** update dependency @types/node to v20.11.26 ([a6ed9b5](https://github.com/nlibjs/changelog/commit/a6ed9b5ac1db76709fba5b2724d764e6303a4ecb))
- **renovate:** update dependency typescript to v5.4.2 ([79b30cf](https://github.com/nlibjs/changelog/commit/79b30cfde7e947debeb17cc28a52ccf1cbb38643))
- **renovate:** update dependency @types/node to v20.11.25 ([c97b6e0](https://github.com/nlibjs/changelog/commit/c97b6e006f0226c7237b8ba3ce5be2651f2aa79b))
- **renovate:** update dependency @types/node to v20.11.24 ([0f9d44a](https://github.com/nlibjs/changelog/commit/0f9d44a3b1e14c3eff496670f47d4ffe42abbfb4))
- **renovate:** update dependency @types/node to v20.11.22 ([fbbfbed](https://github.com/nlibjs/changelog/commit/fbbfbed60548fb6f684aa08a5b6c7fe3e898304c))
- **renovate:** update dependency @types/node to v20.11.21 ([f231342](https://github.com/nlibjs/changelog/commit/f231342eee6218b8ce44d64616691be64e107f1c))
- **renovate:** update dependency eslint to v8.57.0 ([eb07cca](https://github.com/nlibjs/changelog/commit/eb07ccac1bcb5ee7e9e1131dcd7eae6e54027681))
- **renovate:** update dependency @types/node to v20.11.20 ([d29a742](https://github.com/nlibjs/changelog/commit/d29a74291d1ff39cda75b81d25b68af018be26b9))
- **renovate:** update dependency @types/node to v20.11.19 ([d580133](https://github.com/nlibjs/changelog/commit/d580133fffbbf995f0228a5eb1526ea10aae7ffc))
- **renovate:** update dependency @types/node to v20.11.18 ([4f7f81c](https://github.com/nlibjs/changelog/commit/4f7f81c7af5f837f2905311cb7ba8224599cfa30))
- **renovate:** update dependency @types/node to v20.11.17 ([01939c2](https://github.com/nlibjs/changelog/commit/01939c2c79dd0e11f5b944241ec0de52bd8cc575))
- **renovate:** update dependency @typescript-eslint/parser to v6.21.0 ([52c22fc](https://github.com/nlibjs/changelog/commit/52c22fc456cc335ba5dc300123b27572bddfd3dc))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.21.0 ([e224004](https://github.com/nlibjs/changelog/commit/e224004939107f6fdf255c45095bd061392213f7))
- **renovate:** update dependency prettier to v3.2.5 ([af85871](https://github.com/nlibjs/changelog/commit/af85871e60529e5c040895bbdb3a739f6525078b))
- **renovate:** update dependency @types/node to v20.11.16 ([dda2904](https://github.com/nlibjs/changelog/commit/dda2904dff2670f6f1f4bd1856221add5956f706))
- **renovate:** update dependency @types/node to v20.11.15 ([be68165](https://github.com/nlibjs/changelog/commit/be68165cdeaff6ebe8bf75eeae8523b715df3d38))
- **renovate:** update dependency @types/node to v20.11.14 ([7f557b8](https://github.com/nlibjs/changelog/commit/7f557b878fe7970332d246e0f10f7c56ef965e20))
- **renovate:** update dependency @types/node to v20.11.13 ([2328f3c](https://github.com/nlibjs/changelog/commit/2328f3cdf3e9ef13d18366260fb41de56817fcb0))
- **renovate:** update dependency @typescript-eslint/parser to v6.20.0 ([2bda4cc](https://github.com/nlibjs/changelog/commit/2bda4cc0e7b4af2e99ec1743fb4423beae50dce1))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.20.0 ([1e1f707](https://github.com/nlibjs/changelog/commit/1e1f7078962a21c0db713635f88f90baac20d89e))
- **renovate:** update dependency @types/node to v20.11.10 ([b0a6a19](https://github.com/nlibjs/changelog/commit/b0a6a19651b160a41e7ead2e6b28db01a8004071))
- **renovate:** update dependency @types/node to v20.11.9 ([1710e48](https://github.com/nlibjs/changelog/commit/1710e486491203074d02afc5db166d8ec5eedf77))
- **renovate:** update dependency @types/node to v20.11.8 ([2ca6eef](https://github.com/nlibjs/changelog/commit/2ca6eef7abae9b97e9b6d377d6a8cd4e5abb86a7))
- **renovate:** update dependency @types/node to v20.11.7 ([628230b](https://github.com/nlibjs/changelog/commit/628230bb31beb9df108f3d47ad8b488adb82a326))
- **renovate:** update dependency @types/node to v20.11.6 ([5cc04e5](https://github.com/nlibjs/changelog/commit/5cc04e56d15779465e6b76ac0f550ce824c8857a))
- **renovate:** update dependency @typescript-eslint/parser to v6.19.1 ([f2f0ddc](https://github.com/nlibjs/changelog/commit/f2f0ddc2366e40cd803a42cf38f899186faf89dc))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.19.1 ([f170e13](https://github.com/nlibjs/changelog/commit/f170e13a63309f7feba995e8f4b5362acef251f1))
- **renovate:** update dependency prettier to v3.2.4 ([73123ba](https://github.com/nlibjs/changelog/commit/73123ba59f948266435b3c9b6b442a040be7a344))
- **renovate:** update dependency @types/node to v20.11.5 ([dbc5d55](https://github.com/nlibjs/changelog/commit/dbc5d55988f8a6789a360a7722c3e17b062afff4))
- **renovate:** update dependency prettier to v3.2.3 ([1d77f76](https://github.com/nlibjs/changelog/commit/1d77f7698832cf67325015b7dd52ad796dadcdc4))
- **renovate:** update dependency @types/node to v20.11.4 ([7d13ac3](https://github.com/nlibjs/changelog/commit/7d13ac344de63479a16078bd52369d8b9dde0437))
- **renovate:** update dependency @typescript-eslint/parser to v6.19.0 ([fc8f33f](https://github.com/nlibjs/changelog/commit/fc8f33faeee3434761d0a342c934828a2927ae5e))
- **renovate:** update dependency @types/node to v20.11.3 ([635bd2f](https://github.com/nlibjs/changelog/commit/635bd2f90e60c5ac0151003dcd05e3a9811008fb))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.19.0 ([24d7442](https://github.com/nlibjs/changelog/commit/24d74426c5d405d59bb1e08c115f7127ce90ac86))
- **renovate:** update dependency @types/node to v20.11.2 ([a8162b5](https://github.com/nlibjs/changelog/commit/a8162b54dac466a2fc8bd40c25a36a842a840a8f))
- **renovate:** update dependency @types/node to v20.11.1 ([dd12c78](https://github.com/nlibjs/changelog/commit/dd12c78fdaeafd3854aca78c08fe202af1808781))
- **renovate:** update dependency prettier to v3.2.2 ([e3fdfdd](https://github.com/nlibjs/changelog/commit/e3fdfdd6375368854fc6553581c1717f4c241bbf))
- **renovate:** update dependency prettier to v3.2.1 ([afa70ce](https://github.com/nlibjs/changelog/commit/afa70ce08d9f6fde1c4a5652c59adbab429fd61d))
- **renovate:** update dependency @types/node to v20.11.0 ([c9cc835](https://github.com/nlibjs/changelog/commit/c9cc835460b36e25c7172cbef210edbf089532f3))
- **renovate:** update dependency @types/node to v20.10.8 ([2d6fe7b](https://github.com/nlibjs/changelog/commit/2d6fe7bc783c01205c2d807f3dc09863a7bcda1d))
- **renovate:** update dependency @typescript-eslint/parser to v6.18.1 ([76a87a5](https://github.com/nlibjs/changelog/commit/76a87a546d41842b0213fa44783bab8927ce6b9c))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.18.1 ([99e8705](https://github.com/nlibjs/changelog/commit/99e8705fc57fc90c8e0e57d25bb5c8c2f4cdd125))
- **renovate:** update dependency @types/node to v20.10.7 ([5c28064](https://github.com/nlibjs/changelog/commit/5c280641137751f1f7abd7af40013841e4bde146))
- **renovate:** update dependency @typescript-eslint/parser to v6.18.0 ([2759da2](https://github.com/nlibjs/changelog/commit/2759da2e9046557910fbdc6a9dc2d8b4c4f01080))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.18.0 ([2903de2](https://github.com/nlibjs/changelog/commit/2903de2652053d643ffaf6249f3664eb4d5aca4c))
- **renovate:** update dependency @typescript-eslint/parser to v6.17.0 ([d363f28](https://github.com/nlibjs/changelog/commit/d363f287cd5918213496ebb5b958588d991797a1))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.17.0 ([7c6a90d](https://github.com/nlibjs/changelog/commit/7c6a90d1f4ce73a0f92272d17d421b5c575379cd))
- **renovate:** update dependency @types/node to v20.10.6 ([d50dfc1](https://github.com/nlibjs/changelog/commit/d50dfc1cb2a5ea54af4e0b1b9d5a8f993250f0fb))
- **renovate:** update dependency @typescript-eslint/parser to v6.16.0 ([41d891f](https://github.com/nlibjs/changelog/commit/41d891fabd87b084f66f3bcf49a6f7b6b319911c))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.16.0 ([74bcdd7](https://github.com/nlibjs/changelog/commit/74bcdd7d6e755a1203247141b26f14c455e13349))
- **renovate:** update dependency @typescript-eslint/parser to v6.15.0 ([c5abecf](https://github.com/nlibjs/changelog/commit/c5abecf3ff4259d5a0515267fd1b843ae9349153))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.15.0 ([751191c](https://github.com/nlibjs/changelog/commit/751191c5e5d57eb077b00ca31107a06870d178e6))
- **renovate:** update dependency @types/node to v20.10.5 ([e366761](https://github.com/nlibjs/changelog/commit/e3667612faec52b0a0d7e9b6e5f8a59f8101760c))
- **renovate:** update dependency eslint to v8.56.0 ([a75fd5d](https://github.com/nlibjs/changelog/commit/a75fd5d410887e4b47c6ebc44d6c0babda0a1bf9))
- **renovate:** update dependency @typescript-eslint/parser to v6.14.0 ([a146478](https://github.com/nlibjs/changelog/commit/a14647834226bc3b6639de6f82db0501f5f2ae91))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.14.0 ([84fd3b4](https://github.com/nlibjs/changelog/commit/84fd3b48e1a8b2b05b0daa344454853435f00fee))
- **renovate:** update dependency prettier to v3.1.1 ([f32021c](https://github.com/nlibjs/changelog/commit/f32021cf1ad6dbbdc4bf49f4331b8896e5abced3))
- **renovate:** update dependency @types/node to v20.10.4 ([c1f1d99](https://github.com/nlibjs/changelog/commit/c1f1d99259c88d4d0db162493ee6a54dfc35b54c))
- **renovate:** update dependency typescript to v5.3.3 ([fd06b6b](https://github.com/nlibjs/changelog/commit/fd06b6b83e9db9cb41913971bdcb6178773c84d4))
- **renovate:** update dependency @typescript-eslint/parser to v6.13.2 ([a0d90bb](https://github.com/nlibjs/changelog/commit/a0d90bb845d4f99e87ac5d45bed938f4515699d2))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.13.2 ([152d540](https://github.com/nlibjs/changelog/commit/152d54019f1597758403beb6a6a100fd69bc0548))
- **renovate:** update dependency @types/node to v20.10.3 ([196c55b](https://github.com/nlibjs/changelog/commit/196c55beb1071dea242d4e330f8b7fcbc9c1c188))
- **renovate:** update dependency eslint to v8.55.0 ([7d5c360](https://github.com/nlibjs/changelog/commit/7d5c36010f586ab11ef14a9fc8c9bdd40ec663ad))
- **renovate:** update dependency @types/node to v20.10.2 ([8185184](https://github.com/nlibjs/changelog/commit/818518437a3dba3f600598eb4792b2d549125458))
- **renovate:** update dependency @types/node to v20.10.1 ([2f4ad16](https://github.com/nlibjs/changelog/commit/2f4ad16a31f1277d05cfee9c228d5bd87173dc2e))
- **renovate:** update dependency @typescript-eslint/parser to v6.13.1 ([e3ca328](https://github.com/nlibjs/changelog/commit/e3ca328b4481e81eafaaff099f1010ffa093ef20))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.13.1 ([5d31fc9](https://github.com/nlibjs/changelog/commit/5d31fc93a7ec731b10d76d89b95ad83b7aec4e20))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.13.0 ([802bd66](https://github.com/nlibjs/changelog/commit/802bd66f1cfbafc742f0ba8539db9b6c3f533626))
- **renovate:** update dependency @types/node to v20.10.0 ([185f8ff](https://github.com/nlibjs/changelog/commit/185f8fffb3064061f6e25f0c9cadf628c3f8da76))
- **renovate:** update dependency @types/node to v20.9.5 ([e9d7d2a](https://github.com/nlibjs/changelog/commit/e9d7d2aab407ea842e297df209ae3bd9ec77fcc3))
- **renovate:** update dependency @types/node to v20.9.4 ([631c0dd](https://github.com/nlibjs/changelog/commit/631c0ddc933baf8f23840e066eb26c5b5c028209))
- **renovate:** update dependency typescript to v5.3.2 ([6e1ac37](https://github.com/nlibjs/changelog/commit/6e1ac37b97e94bf81875b726639289fcfb8132a6))
- **renovate:** update dependency @types/node to v20.9.3 ([76960f0](https://github.com/nlibjs/changelog/commit/76960f09f282ca26d71f487b31aeeeebbe618b19))
- **renovate:** update dependency @typescript-eslint/parser to v6.12.0 ([0e5c6e7](https://github.com/nlibjs/changelog/commit/0e5c6e70d8026ed5939aa31407c1bebabbadb48d))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.12.0 ([0ced9eb](https://github.com/nlibjs/changelog/commit/0ced9ebaf4518c61e7fc341c588850e5f0fb42c6))
- **renovate:** update dependency @types/node to v20.9.2 ([38b996a](https://github.com/nlibjs/changelog/commit/38b996ac903fa3e217092f44f8ddc289415c596c))
- **renovate:** update dependency eslint to v8.54.0 ([edc9e4e](https://github.com/nlibjs/changelog/commit/edc9e4e909a3503c0b27c61f607778fd0283d908))
- **renovate:** update dependency @types/node to v20.9.1 ([02dd825](https://github.com/nlibjs/changelog/commit/02dd825c85bed3d52ce238bf4ceedcdcd5419241))
- **renovate:** update dependency @typescript-eslint/parser to v6.11.0 ([0f8d711](https://github.com/nlibjs/changelog/commit/0f8d711d59d6965109fc26ff1261e5c9a63b4aee))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.11.0 ([1cf6bd1](https://github.com/nlibjs/changelog/commit/1cf6bd14d4eb99426981aa591156978daa230c6a))
- **renovate:** update dependency prettier to v3.1.0 ([1e3e8b1](https://github.com/nlibjs/changelog/commit/1e3e8b13a4060ce5aec7e805f002a91964316dba))
- **renovate:** update dependency @types/node to v20.9.0 ([6edc0dc](https://github.com/nlibjs/changelog/commit/6edc0dc1eaa0c555d4dc87b0a16cd9a8176c705d))
- **renovate:** update dependency @typescript-eslint/parser to v6.10.0 ([69b776a](https://github.com/nlibjs/changelog/commit/69b776aa173410de1b5d8dcd25e3ddf9e8574797))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.10.0 ([e88f98d](https://github.com/nlibjs/changelog/commit/e88f98d49ffb07aeed62f18ab60e1272848d7e42))
- **renovate:** update dependency eslint to v8.53.0 ([da70c55](https://github.com/nlibjs/changelog/commit/da70c5594375ebdaf1fa1241bb57c6a6e160a51f))
- **renovate:** update dependency @types/node to v20.8.10 ([2d99cdd](https://github.com/nlibjs/changelog/commit/2d99cdd1a81380f9f171c8cc27390b135ecaafe2))
- **renovate:** update dependency @typescript-eslint/parser to v6.9.1 ([f308ef8](https://github.com/nlibjs/changelog/commit/f308ef832f6ce263077dbd656b335856b215dcf7))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.9.1 ([c902e9b](https://github.com/nlibjs/changelog/commit/c902e9bc043ce38217fffb3bd79c72ccba1721ce))
- **renovate:** update dependency @types/node to v20.8.9 ([cc6a340](https://github.com/nlibjs/changelog/commit/cc6a3409e6e613bde0fa5d7414d18a6cce676309))
- **renovate:** update dependency @typescript-eslint/parser to v6.9.0 ([c7cbcf4](https://github.com/nlibjs/changelog/commit/c7cbcf4667f7b80f9cafb02d0efeb294f2fd57ba))
- **renovate:** update dependency @types/node to v20.8.8 ([0cd5b63](https://github.com/nlibjs/changelog/commit/0cd5b635b9e221683f55a90a9578bf7301efb3fd))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.9.0 ([f773748](https://github.com/nlibjs/changelog/commit/f7737485bf1242b0c7ef5f1b1f612f84b9022e40))
- **renovate:** update dependency eslint to v8.52.0 ([f20ec32](https://github.com/nlibjs/changelog/commit/f20ec32e1b438800b40cec564d34821b14836c40))
- **renovate:** update dependency @types/node to v20.8.7 ([76b7027](https://github.com/nlibjs/changelog/commit/76b7027eced6f137f7f8c0a4e789ae1128f32386))
- **renovate:** update dependency @typescript-eslint/parser to v6.8.0 ([303fd1a](https://github.com/nlibjs/changelog/commit/303fd1a11e83e7b51ab8a530dfb76420e1d4517d))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.8.0 ([f8e2272](https://github.com/nlibjs/changelog/commit/f8e2272138aa2d4cd3711f51a038a8c87414f11f))
- **renovate:** update dependency @types/node to v20.8.6 ([b4f0db4](https://github.com/nlibjs/changelog/commit/b4f0db4962ea600681b0a6de43f43f1198866600))
- **renovate:** update dependency commander to v11.1.0 ([dc85c95](https://github.com/nlibjs/changelog/commit/dc85c95018d4cd06f98581f64642a6b17d21dc15))
- **renovate:** update dependency @types/node to v20.8.5 ([cfdaa50](https://github.com/nlibjs/changelog/commit/cfdaa5010f623e901f0a7184ba7315bc3c6f3bbe))
- **renovate:** update dependency @typescript-eslint/parser to v6.7.5 ([1703705](https://github.com/nlibjs/changelog/commit/1703705c5f5bcea9ed02e2043cb68a53f84c9d2c))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.7.5 ([3c80226](https://github.com/nlibjs/changelog/commit/3c80226c03d005d03c30e6643cbe04c8012a3539))
- **renovate:** update dependency @types/node to v20.8.4 ([e1c2e65](https://github.com/nlibjs/changelog/commit/e1c2e65cf5a896aaeb73aa5facb820e15fb1c429))
- **renovate:** update dependency @types/node to v20.8.3 ([fcc1a3e](https://github.com/nlibjs/changelog/commit/fcc1a3eac06108199c0769704432d291610c5ab5))
- **renovate:** update dependency eslint to v8.51.0 ([2064b53](https://github.com/nlibjs/changelog/commit/2064b532971a1f316eff0139cf5e161d3dfba384))
- **renovate:** update dependency @typescript-eslint/parser to v6.7.4 ([48ae181](https://github.com/nlibjs/changelog/commit/48ae18122847c779d1505be549b626c24b1ec504))
- **renovate:** update dependency @types/node to v20.8.2 ([780a3da](https://github.com/nlibjs/changelog/commit/780a3dadb54c880ae4ad2bae7b22cf5ac48ef0c0))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.7.4 ([63201aa](https://github.com/nlibjs/changelog/commit/63201aa3f2c2919502850a3ac10b49623ac3184a))
- **renovate:** update dependency @types/node to v20.8.0 ([2ff7053](https://github.com/nlibjs/changelog/commit/2ff70537407c62be782b3a6a3b570eb0fb6d9c86))
- **renovate:** update dependency @types/node to v20.7.2 ([9bf6982](https://github.com/nlibjs/changelog/commit/9bf698210553c53513adfcffba4eb475460830bc))
- **renovate:** update dependency eslint to v8.50.0 ([2157ce5](https://github.com/nlibjs/changelog/commit/2157ce58abdd23b772435b95a48c810cce523262))
- **renovate:** update dependency @types/node to v20.7.1 ([6e5b613](https://github.com/nlibjs/changelog/commit/6e5b613cb5dd0566441f44503dfad26b49a00948))
- **renovate:** update dependency @typescript-eslint/parser to v6.7.3 ([14170cb](https://github.com/nlibjs/changelog/commit/14170cb2d577cd6f415c604d82ec5951ce071935))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.7.3 ([65c44fc](https://github.com/nlibjs/changelog/commit/65c44fc4c032fffabe9d7cb908956e002bc64456))
- **renovate:** update dependency @types/node to v20.6.2 ([4805c6f](https://github.com/nlibjs/changelog/commit/4805c6f5147af174c448f2aea099f1a79511f445))
- **renovate:** update dependency @typescript-eslint/parser to v6.7.0 ([1fc7ce7](https://github.com/nlibjs/changelog/commit/1fc7ce764b3b9eeeb4914a5807eb7c9907b7bd68))
- **renovate:** update dependency @types/node to v20.6.1 ([430873a](https://github.com/nlibjs/changelog/commit/430873a82059f350ade16f1032de614ed8196f26))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.7.0 ([c7f1975](https://github.com/nlibjs/changelog/commit/c7f19758b5e4b04ffe6dcb8f98fc732aae18dc57))
- **renovate:** update dependency eslint to v8.49.0 ([c395a46](https://github.com/nlibjs/changelog/commit/c395a461707748d0b1ce78ae04d02a65e568bec1))
- **renovate:** update dependency @types/node to v20.6.0 ([126f79a](https://github.com/nlibjs/changelog/commit/126f79a40952c21fa8474f6b45c2af2e5fb00613))
- **renovate:** update dependency @typescript-eslint/parser to v6.6.0 ([be28c7d](https://github.com/nlibjs/changelog/commit/be28c7d4bcc384556f12b303101fd5fa5fba725e))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.6.0 ([3024531](https://github.com/nlibjs/changelog/commit/3024531e7fdb522bbf2ae1085e800fa13d4235c7))
- **renovate:** update dependency @types/node to v20.5.9 ([c88a889](https://github.com/nlibjs/changelog/commit/c88a8894b52be1225415b575ca2b95f05315d9d2))
- **renovate:** update dependency @types/node to v20.5.8 ([f1acaba](https://github.com/nlibjs/changelog/commit/f1acabac4c0182e7163730ce6f8a5ac1b2d713ce))
- **renovate:** update dependency @nlib/eslint-config to v3.20.2 ([c9bead1](https://github.com/nlibjs/changelog/commit/c9bead1854e365f65c951f0cf16a52a83a31a15c))
- **renovate:** update dependency @nlib/typing to v1.1.0 ([abb7f50](https://github.com/nlibjs/changelog/commit/abb7f50628dd8b3711dcf7003081eebfd9a96d93))
- **renovate:** update dependency @nlib/indexen to v0.2.9 ([4d542fe](https://github.com/nlibjs/changelog/commit/4d542feb0eff7f2eaf7c4b7ab9375aa633677303))
- **renovate:** update dependency prettier to v3.0.3 ([f9664af](https://github.com/nlibjs/changelog/commit/f9664af90060e227c0a1b7c6b74422b96a00719e))
- **renovate:** update dependency @typescript-eslint/parser to v6.5.0 ([b8b0013](https://github.com/nlibjs/changelog/commit/b8b0013de9d1db0b1b5ebf662e2adb0fbbdd328c))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.5.0 ([d0099ac](https://github.com/nlibjs/changelog/commit/d0099acfccb16e5b1e6b76c69181fc77c52a01a2))


## v0.3.1 (2023-08-31)

### Features

- set the latest version tag from package.json if it exists ([4452392](https://github.com/nlibjs/changelog/commit/4452392f992a3894ae8ff992df0dc95cf1122215))

### Bug Fixes

- npm-version script ([114b979](https://github.com/nlibjs/changelog/commit/114b97933d378a542a041296980c933c65d9cc67))
- amending a tagged commit pushes the tag aside in the history ([9c0401b](https://github.com/nlibjs/changelog/commit/9c0401b8bc90bf1583627360a291cc69409d69fb))

### Tests

- change timeout ([73b8177](https://github.com/nlibjs/changelog/commit/73b8177bcaf2a93e65fd792475ae476adaa1684d))

### Styles

- add quoteProps ([4b2ae52](https://github.com/nlibjs/changelog/commit/4b2ae52b18bcad714014d274ae3146c94bc68262))
- .ts → .mts ([0dfa943](https://github.com/nlibjs/changelog/commit/0dfa94317218d98359e3dd15689543ba70354224))
- install prettier ([f1e311e](https://github.com/nlibjs/changelog/commit/f1e311e420c61b520acc01f8c8152bb39bb96296))

### Documentation

- update README ([7de3175](https://github.com/nlibjs/changelog/commit/7de31753621e0af0fc773297fa2aa3878ad3c153))

### Continuous Integration

- v2 → v3 ([7d28fe7](https://github.com/nlibjs/changelog/commit/7d28fe762561ac135ca7b9828802f0e75f1ef3f2))

### Dependency Upgrades

- **renovate:** update dependency @types/node to v20.5.7 ([ad58eab](https://github.com/nlibjs/changelog/commit/ad58eabc4454ab83a344b2ac46ef1a1d46d01b07))
- **renovate:** update dependency eslint to v8.48.0 ([9b69a7b](https://github.com/nlibjs/changelog/commit/9b69a7b7fcc1a25b3ef49fe9af42dcada1ed637b))
- **renovate:** update dependency @types/node to v20.5.6 ([af796ba](https://github.com/nlibjs/changelog/commit/af796baf3f1f71107596b1434286791174845b0b))
- **renovate:** update dependency typescript to v5.2.2 ([44192de](https://github.com/nlibjs/changelog/commit/44192de715556e967c50ad9278af6403ad1664ab))
- **renovate:** update dependency @types/node to v20.5.4 ([9e1ea31](https://github.com/nlibjs/changelog/commit/9e1ea3169d72ad68215dd3c5598470497a4631e1))
- **renovate:** update dependency @nlib/indexen to v0.2.8 ([03c8655](https://github.com/nlibjs/changelog/commit/03c86550970a54edc0b780b34944a762572a0115))
- **renovate:** update dependency @types/node to v20.5.3 ([7271311](https://github.com/nlibjs/changelog/commit/727131181a7588512099cc4615ad50699fbdce62))
- **renovate:** update dependency @nlib/githooks to v0.2.0 ([4c7d104](https://github.com/nlibjs/changelog/commit/4c7d1048df7fbdd7e26b0d29dabe694b795c9c9d))
- **renovate:** update dependency @types/node to v20.5.2 ([1ef914e](https://github.com/nlibjs/changelog/commit/1ef914e54ec9d1b245ed94e1098a2bbee4735427))
- **renovate:** update dependency @typescript-eslint/parser to v6.4.1 ([77ef35d](https://github.com/nlibjs/changelog/commit/77ef35dc06894e8f13eaa91676ebe81548863bed))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.4.1 ([24b3c94](https://github.com/nlibjs/changelog/commit/24b3c94f8d9ef39eff08162dfc736c69b0470624))
- **renovate:** update dependency lint-staged to v14.0.1 ([d6b5b32](https://github.com/nlibjs/changelog/commit/d6b5b323d76f859ab4bc627c2a691fdcd013f5b6))
- **renovate:** update dependency @types/node to v20.5.1 ([3a88b34](https://github.com/nlibjs/changelog/commit/3a88b342bba9be0e094f789070a4dd3cbf93ac0d))
- **renovate:** update dependency @nlib/eslint-config to v3.20.1 ([80f7ad2](https://github.com/nlibjs/changelog/commit/80f7ad204e33dae6b62394def71fc70c16006ea1))
- @nlib/eslint-config:3.19.7→3.19.8 ([7e02308](https://github.com/nlibjs/changelog/commit/7e023081260bf8c6193bc371ed6f49e4b747771e))
- typescript:4.9.5→5.1.6 ([e26098f](https://github.com/nlibjs/changelog/commit/e26098f400f0c2c33cc3a3c034b210099f879f35))
- lint-staged:13.1.1→14.0.0 ([28a8273](https://github.com/nlibjs/changelog/commit/28a8273c73786a2dd57103d1515bb94b2b7a7abe))
- @nlib/indexen:0.2.6→0.2.7 ([adfbadb](https://github.com/nlibjs/changelog/commit/adfbadb6217ac46c303a1e310bffab6443178af8))
- @types/node:18.16.15→20.5.0 ([c1c5ab7](https://github.com/nlibjs/changelog/commit/c1c5ab7a2576ac30bc0d1c88bd157ec7f80617b0))
- commander:9.5.0→11.0.0 ([cf4f7aa](https://github.com/nlibjs/changelog/commit/cf4f7aa367d64cbf8bb770eae46abec9a9da58ad))
- @nlib/typing:0.5.7→1.0.0 ([fb8b8f9](https://github.com/nlibjs/changelog/commit/fb8b8f98c6babf6697bde4aa481228f774f7a911))
- ava:5.3.0→5.3.1 ([cdfe19a](https://github.com/nlibjs/changelog/commit/cdfe19ad3e0c31a63e992547c90d49cdf2a3f751))
- eslint:8.31.0→8.47.0 ([6746335](https://github.com/nlibjs/changelog/commit/6746335af4aad66fc89cac53632125b2ca1fe135))
- @nlib/eslint-config:3.19.6→3.19.7 ([10a026b](https://github.com/nlibjs/changelog/commit/10a026b03a2d0e5f8cc852e12713bcb0d2c0b5c5))
- **renovate:** update dependency @types/node to v18.16.15 ([e32c6bf](https://github.com/nlibjs/changelog/commit/e32c6bf292c0caa327e3af31a4d5badb43f7fc27))
- **renovate:** update dependency @types/node to v18.16.14 ([4d9271a](https://github.com/nlibjs/changelog/commit/4d9271a14d759fd37ba413dd190ca3da44f0ae2b))
- **renovate:** update dependency ava to v5.3.0 ([c42cd2c](https://github.com/nlibjs/changelog/commit/c42cd2c00db8773f9ca77298fc721f382db9e2ec))
- **renovate:** update dependency @types/node to v18.16.1 ([e720dff](https://github.com/nlibjs/changelog/commit/e720dffb763207e3f19b4df18e3c8f2de1c840be))
- **renovate:** update dependency @types/node to v18.16.0 ([2b1c257](https://github.com/nlibjs/changelog/commit/2b1c2576b747faff5ec055e3906f273a2c615179))
- **renovate:** update dependency @types/node to v18.15.9 ([09688ee](https://github.com/nlibjs/changelog/commit/09688ee5b484eb99e25f3a2b700034b141cbbe76))
- **renovate:** update dependency @types/node to v18.14.4 ([565d816](https://github.com/nlibjs/changelog/commit/565d816d09871b7bd9bb4854a36e3e739e1e5d57))
- **renovate:** update dependency @types/node to v18.14.3 ([9af4f87](https://github.com/nlibjs/changelog/commit/9af4f87f117480e81d11dc93fa60988c545c80e3))
- **renovate:** update dependency lint-staged to v13.1.1 ([38abc1f](https://github.com/nlibjs/changelog/commit/38abc1f2b1fac98ee1d1d4516101c53d29dd3265))
- **renovate:** update dependency ava to v5.2.0 ([560db21](https://github.com/nlibjs/changelog/commit/560db21055180c06da4a8452d646e140ea567316))
- **renovate:** update dependency typescript to v4.9.5 ([548cc90](https://github.com/nlibjs/changelog/commit/548cc90b600ff76ffdb1f0425e15ad4180202367))
- **renovate:** update dependency @nlib/indexen to v0.2.6 ([3943f28](https://github.com/nlibjs/changelog/commit/3943f28c9cc6f60c74c7576f0307d55d94c806e2))
- **renovate:** update dependency @nlib/esmify to v0.3.3 ([24089f9](https://github.com/nlibjs/changelog/commit/24089f9583aef360386470d6d3dd939d84957a6a))


## v0.2.4 (2023-01-09)

### Bug Fixes

- author.url ([e8651ae](https://github.com/nlibjs/changelog/commit/e8651ae5a0745a880eb1c1d7ffcbd72751978e0c))
- FUNDING.yml ([6847b07](https://github.com/nlibjs/changelog/commit/6847b0764003953567515cad199c0811a4c008c3))

### Dependency Upgrades

- upgrade dependencies ([b4564d0](https://github.com/nlibjs/changelog/commit/b4564d00e0c70c230ac381019c5fee58eb3a5481))
- ava:4.3.3→5.1.0 ([84219dc](https://github.com/nlibjs/changelog/commit/84219dc8485672de3f978d4e5affbfa3436de844))
- @nlib/eslint-config:3.19.5→3.19.6 ([51b8c3b](https://github.com/nlibjs/changelog/commit/51b8c3bbc8940afd99c920d5fda49413bb0e16ef))
- commander:9.4.1→9.5.0 ([cb7c23a](https://github.com/nlibjs/changelog/commit/cb7c23a62ed8aebb00964f7f172e809966063e38))
- **renovate:** update dependency eslint to v8.31.0 ([b403b3c](https://github.com/nlibjs/changelog/commit/b403b3cf78a02adec8d699155eb3e78bec3aa2fa))
- **renovate:** update dependency @types/node to v18.11.18 ([b641e7d](https://github.com/nlibjs/changelog/commit/b641e7dbe6d1b827c85d6b43ba1ccc355e800129))
- **renovate:** update dependency @types/node to v18.11.17 ([682d7b0](https://github.com/nlibjs/changelog/commit/682d7b0ced9bd8ddd7fdef5df7a841cefa737e3a))
- **renovate:** update dependency eslint to v8.30.0 ([eb3eb9d](https://github.com/nlibjs/changelog/commit/eb3eb9d9fcd244f27ca854845c673f41eabd734f))
- **renovate:** update dependency @types/node to v18.11.16 ([c6c3bcf](https://github.com/nlibjs/changelog/commit/c6c3bcf4cdc75396923c9a73676fe738447b6b73))
- **renovate:** update dependency @types/node to v18.11.15 ([2b313a6](https://github.com/nlibjs/changelog/commit/2b313a64d6d61087cb841e5e8ac26a5342a80671))
- **renovate:** update dependency @types/node to v18.11.14 ([e1c9777](https://github.com/nlibjs/changelog/commit/e1c97775fc93e7ddc0b5224bdde8d75b4fcd9054))
- **renovate:** update dependency @types/node to v18.11.12 ([cd8d030](https://github.com/nlibjs/changelog/commit/cd8d0307825139175f712f4e68f97b9aadf5df58))
- **renovate:** update dependency typescript to v4.9.4 ([0210bcf](https://github.com/nlibjs/changelog/commit/0210bcfcf77d0c4b0935b8d709970a02f4040569))
- **renovate:** update dependency @types/node to v18.11.11 ([5f7da63](https://github.com/nlibjs/changelog/commit/5f7da636a99fdc4dedbec859ab97f011f34f3dac))
- **renovate:** update dependency lint-staged to v13.1.0 ([6eae151](https://github.com/nlibjs/changelog/commit/6eae151e5fcabc51719bd7c76b95730d73db71ab))
- **renovate:** update dependency eslint to v8.29.0 ([ae86c17](https://github.com/nlibjs/changelog/commit/ae86c17356f4ccb22f92faffa420a00eb2ddf0c6))
- **renovate:** update dependency @types/node to v18.11.10 ([f13caed](https://github.com/nlibjs/changelog/commit/f13caed256a5b8ab61fefee8f40c53173c9f423d))
- **renovate:** update dependency lint-staged to v13.0.4 ([ebbf989](https://github.com/nlibjs/changelog/commit/ebbf9893e6b9d4c3e8406f4c73a7dff7458ab855))
- **renovate:** update dependency eslint to v8.28.0 ([caa1394](https://github.com/nlibjs/changelog/commit/caa139438f7de21d84ea032e88cb6bb1c63fe9a9))
- **renovate:** update dependency typescript to v4.9.3 ([cbaf3e2](https://github.com/nlibjs/changelog/commit/cbaf3e253d91576b50047c883fc6f891af97c36c))
- **renovate:** update dependency @types/eslint to v8.4.10 ([c57ee9f](https://github.com/nlibjs/changelog/commit/c57ee9f0d72083e4609270c8f39a938f36abe489))
- **renovate:** update dependency @types/node to v18.11.9 ([7b7a679](https://github.com/nlibjs/changelog/commit/7b7a679879e043f4ee29eb97a72e48f3a99d8df8))
- **renovate:** update dependency @types/eslint to v8.4.9 ([3290040](https://github.com/nlibjs/changelog/commit/3290040fa656545bdf7db84bf6ec24405f5cdfb4))
- **renovate:** update dependency @types/node to v18.11.7 ([ed88569](https://github.com/nlibjs/changelog/commit/ed8856941f63aaf62b10efd474dbe4500534273d))
- **renovate:** update dependency @types/node to v18.11.6 ([3a5a74f](https://github.com/nlibjs/changelog/commit/3a5a74f236705284c78271d16247abf5ca911cdd))
- **renovate:** update dependency @types/eslint to v8.4.8 ([a8a86ea](https://github.com/nlibjs/changelog/commit/a8a86ea8c775546f585d407cdac94719e9d28e4d))
- **renovate:** update dependency @types/node to v18.11.5 ([bbfd510](https://github.com/nlibjs/changelog/commit/bbfd510ae56816af821bc3b5a003dd19b75f45fb))
- **renovate:** update dependency @types/node to v18.11.4 ([28be2cc](https://github.com/nlibjs/changelog/commit/28be2cc70d375522009af7ab6f1185122c3114f5))
- **renovate:** update dependency eslint to v8.26.0 ([da050ab](https://github.com/nlibjs/changelog/commit/da050abd56d977063628139cc0c8e817d985126d))
- **renovate:** update dependency @types/node to v18.11.3 ([70a90df](https://github.com/nlibjs/changelog/commit/70a90df19f16b24568569911629506f072bc29e7))
- **renovate:** update dependency @types/node to v18.11.0 ([93b1b53](https://github.com/nlibjs/changelog/commit/93b1b5304a77485d66e387349da8341ef3bdffcc))
- **renovate:** update dependency eslint to v8.25.0 ([1afdcc4](https://github.com/nlibjs/changelog/commit/1afdcc494c5fca0b93eacdad25fb391e922e86ad))
- **renovate:** update dependency @types/node to v18.8.3 ([294a51b](https://github.com/nlibjs/changelog/commit/294a51b5c8f32d60e4e18c6877e4b3d6f5ad8167))
- **renovate:** update dependency commander to v9.4.1 ([095b44f](https://github.com/nlibjs/changelog/commit/095b44f118529bee1852ee1257c41f1880c3a45a))
- **renovate:** update dependency typescript to v4.8.4 ([84bf14f](https://github.com/nlibjs/changelog/commit/84bf14f4fc0b272e39a7962783230f439ae20e14))
- **renovate:** update dependency @types/node to v18.7.23 ([5fb2e9d](https://github.com/nlibjs/changelog/commit/5fb2e9d5bd806f7c5535c5fba3e19d1d3f7e14ab))
- **renovate:** update dependency eslint to v8.24.0 ([8153ce3](https://github.com/nlibjs/changelog/commit/8153ce3c6081c18fb7412a04c6ca70d2562173f7))
- **renovate:** update dependency @types/node to v18.7.18 ([e47ae8d](https://github.com/nlibjs/changelog/commit/e47ae8de97fc32f534322f9431bcfda5c4b6ed34))
- **renovate:** update dependency eslint to v8.23.1 ([0fd195c](https://github.com/nlibjs/changelog/commit/0fd195cbc7bffa48bc2f85dc747064b62cff1e59))
- **renovate:** update dependency typescript to v4.8.3 ([0b66f53](https://github.com/nlibjs/changelog/commit/0b66f535cf5e15ebae49014e79f0deb9a50d71ed))
- **renovate:** update dependency @types/node to v18.7.16 ([1c16e90](https://github.com/nlibjs/changelog/commit/1c16e9064b28f60bcc2ea99dd2a2eeb6d6155dce))
- **renovate:** update dependency @nlib/eslint-config to v3.19.5 ([cc37f12](https://github.com/nlibjs/changelog/commit/cc37f12e23f48014fcc16a9168ba97da814e4c72))
- **renovate:** update dependency @types/node to v18.7.14 ([8cc44ac](https://github.com/nlibjs/changelog/commit/8cc44ac198262ecabe579927d251276964707ee4))
- **renovate:** update dependency @nlib/esmify to v0.3.2 ([c4df293](https://github.com/nlibjs/changelog/commit/c4df2939a51dd9406fe8788ed64f4748a71d33ac))
- **renovate:** update dependency eslint to v8.23.0 ([c5d467f](https://github.com/nlibjs/changelog/commit/c5d467f99dee3a6b6ab21101bc4c384a807c2126))
- **renovate:** update dependency typescript to v4.8.2 ([5d06d82](https://github.com/nlibjs/changelog/commit/5d06d828faae6596cbff8bc57db1164672c6ccf1))
- **renovate:** update dependency @types/node to v18.7.13 ([f3bfdb2](https://github.com/nlibjs/changelog/commit/f3bfdb274be6eb503843f227deb7c862e3417e70))
- **renovate:** update dependency ava to v4.3.3 ([d8cbbec](https://github.com/nlibjs/changelog/commit/d8cbbecdf57e1c9970c4fe98f7e63c177ec2fdd7))
- **renovate:** update dependency @nlib/typing to v0.5.7 ([addba63](https://github.com/nlibjs/changelog/commit/addba630ba611df137b117a6e04a955c1c8025fd))
- **renovate:** update dependency @types/eslint to v8.4.6 ([1f96817](https://github.com/nlibjs/changelog/commit/1f96817ac1722599ceb8f2f1dae70814e2400032))
- **renovate:** update dependency eslint to v8.22.0 ([6f72c23](https://github.com/nlibjs/changelog/commit/6f72c23e0053e845d31e0c6d4165f0b4ab9c5065))
- **renovate:** update dependency @nlib/typing to v0.4.11 ([ccd9e26](https://github.com/nlibjs/changelog/commit/ccd9e26d316e29aa65c2389e2fb2b751da493307))


## v0.2.3 (2022-08-07)

### Bug Fixes

- baseUrl ([7396331](https://github.com/nlibjs/changelog/commit/73963311283b619acc01a4ee72b1158c57fa3761))
- use project's package.json ([97c7e1b](https://github.com/nlibjs/changelog/commit/97c7e1b3d5dd432a9a7f5dc78cfa82a257002aa3))
- postversion not works ([425a7ae](https://github.com/nlibjs/changelog/commit/425a7ae9fbc20bd8a016f6160d0183367ba100ec))

### Tests

- +5s ([7151bea](https://github.com/nlibjs/changelog/commit/7151beaadbe3f105530fa73933f1584aca6671e1))


## v0.2.2 (2022-08-07)

### Bug Fixes

- eslint errors ([e03703a](https://github.com/nlibjs/changelog/commit/e03703a5672f096a38699a72acb39e49a0cf2d50))

### Tests

- add timeout ([1391c3c](https://github.com/nlibjs/changelog/commit/1391c3c486ac0c7ded9178558c5d646e56ec9409))

### Build System

- build before postversion ([7aa0691](https://github.com/nlibjs/changelog/commit/7aa069186457a680793e222588432140d19d1da1))

### Continuous Integration

- drop 14.x ([b050154](https://github.com/nlibjs/changelog/commit/b0501540834d6da9c5ea19d7228d924dc01a79b7))
- drop concurrency ([a45e394](https://github.com/nlibjs/changelog/commit/a45e3946c7721c2c8789749a98ceee292879a9af))

### Dependency Upgrades

- @nlib/eslint-config:3.18.0→3.18.1 ([0a6e2fa](https://github.com/nlibjs/changelog/commit/0a6e2faf0757bb77e383064313af14e062d33db6))
- @types/node:18.6.3→18.6.4 ([fce4ee3](https://github.com/nlibjs/changelog/commit/fce4ee338d6a9ec5ce7aceae3a8723df88f9435a))
- @nlib/esmify:0.1.2→0.3.0 ([3f405de](https://github.com/nlibjs/changelog/commit/3f405def9e64d16015ffaa5401e6401cb28c51ed))
- ava:4.3.0→4.3.1 ([092248a](https://github.com/nlibjs/changelog/commit/092248a367f4de42b07d83cd1708ac32e2e44c5b))
- @nlib/indexen:0.2.2→0.2.5 ([731d77d](https://github.com/nlibjs/changelog/commit/731d77dee80192ca177f78b2dd13e4afb854bad5))
- commander:9.3.0→9.4.0 ([0d4b215](https://github.com/nlibjs/changelog/commit/0d4b2157f84c00da6c7dea9a6518407d57641a30))
- @nlib/typing:0.3.4→0.4.10 ([2ecaf6e](https://github.com/nlibjs/changelog/commit/2ecaf6ecf9a3438860375351f0195414a6024452))
- @typescript-eslint/eslint-plugin:5.29.0→5.32.0 @typescript-eslint/parser:5.29.0→5.32.0 ([41a7dd1](https://github.com/nlibjs/changelog/commit/41a7dd133b9490a76da6c60ff8448b4dddab3528))
- eslint:8.19.0→8.21.0 ([86e511d](https://github.com/nlibjs/changelog/commit/86e511db9c25088e4c476d3766536eda6af9146c))
- **renovate:** update dependency @types/node to v18.6.3 ([2b86a92](https://github.com/nlibjs/changelog/commit/2b86a927c88fa4cd391e8584cdfa7447ef50bc31))
- **renovate:** update dependency @types/node to v18.0.6 ([17a28c0](https://github.com/nlibjs/changelog/commit/17a28c0ac3e3c8c154e02aa59ad106134cb74416))
- **renovate:** update dependency lint-staged to v13.0.3 ([806dcaf](https://github.com/nlibjs/changelog/commit/806dcaf736687a4e138e6f8ebda13f9b507aa628))
- **renovate:** update dependency eslint to v8.19.0 ([0675ae9](https://github.com/nlibjs/changelog/commit/0675ae9afe0e6c1f72b31f1efe07788e39271be4))
- **renovate:** update dependency @types/node to v18.0.3 ([e6c1383](https://github.com/nlibjs/changelog/commit/e6c13837d72da18ae5590093a04f40f7609a00e6))
- **renovate:** update dependency @typescript-eslint/parser to v5.29.0 ([ab0465a](https://github.com/nlibjs/changelog/commit/ab0465ae02a1df332a17abbb78b014058d7ac23e))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v5.29.0 ([b34225c](https://github.com/nlibjs/changelog/commit/b34225c69a1d9762d397d069e09fd7082111b3ba))
- uninstall ts-node ([35697b4](https://github.com/nlibjs/changelog/commit/35697b4a0f35baad137ae449fe1f35bba80a6803))


## v0.2.1 (2022-06-19)

### Bug Fixes

- alias option ([b856869](https://github.com/nlibjs/changelog/commit/b8568697ab4a7317a7ca3817b69b15f441d06be8))
- package.main ([638edbc](https://github.com/nlibjs/changelog/commit/638edbc4cc715c271292e786f2087902fec34d8a))


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
- **renovate:** update dependency @types/node to v16 ([9a32b5b](https://github.com/nlibjs/changelog/commit/9a32b5b8c143d61120fda8c03814c4b1787290f1))
- **renovate:** update dependency ts-node to v10 ([b1e6528](https://github.com/nlibjs/changelog/commit/b1e65280a2920446a9ad606786f06d72a3100cdc))
- **renovate:** update dependency @typescript-eslint/parser to v4.30.0 ([95a3b95](https://github.com/nlibjs/changelog/commit/95a3b95c9596b930efa525382b0da8b329455638))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.30.0 ([bf3411b](https://github.com/nlibjs/changelog/commit/bf3411b8619e1d3eb74f65cbbf31591af27bd13a))
- **renovate:** update dependency typescript to v4.4.2 ([09c993b](https://github.com/nlibjs/changelog/commit/09c993baca198d59da3ec08f06d5ac567a74677b))
- **renovate:** update dependency @nlib/eslint-config to v3.17.24 ([1b11b1b](https://github.com/nlibjs/changelog/commit/1b11b1bddf507f27ee567bb4897f307d2c83c4a6))
- **renovate:** update dependency @typescript-eslint/parser to v4.29.3 ([f03959d](https://github.com/nlibjs/changelog/commit/f03959d878a9152e03c7c7bc43aec00c7201161c))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.29.3 ([6efd353](https://github.com/nlibjs/changelog/commit/6efd35369a571d2c5702c2cfe0c6edc30a2e54b4))
- **renovate:** update dependency @types/node to v15.14.9 ([fcd6fc6](https://github.com/nlibjs/changelog/commit/fcd6fc61400b53faf4a2081d1ed2860a60ea9014))
- **renovate:** update dependency @typescript-eslint/parser to v4.29.2 ([588f098](https://github.com/nlibjs/changelog/commit/588f0983007c0de7c19d4c5c8746d5ea592f1b53))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.29.2 ([66e01d4](https://github.com/nlibjs/changelog/commit/66e01d4cdd3f5c6545d173aece64bebd0f010afc))
- **renovate:** update dependency @typescript-eslint/parser to v4.29.1 ([c2d6f01](https://github.com/nlibjs/changelog/commit/c2d6f01820fe02ada5a790411769ce9626fa925b))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.29.1 ([eaebd10](https://github.com/nlibjs/changelog/commit/eaebd10ac722920741995d31a477d52156895e9f))
- **renovate:** update dependency lint-staged to v11.1.2 ([049272b](https://github.com/nlibjs/changelog/commit/049272bc5403ecf6f522f90cf2464dbbeafff3d0))
- **renovate:** update dependency @types/node to v15.14.7 ([f9c154f](https://github.com/nlibjs/changelog/commit/f9c154f24c2039f553d1722a93fc6af22213d865))
- **renovate:** update dependency @typescript-eslint/parser to v4.29.0 ([61370ea](https://github.com/nlibjs/changelog/commit/61370ea9ef7f91c35d0884b8ca53aa3466d80c6e))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.29.0 ([d5fc575](https://github.com/nlibjs/changelog/commit/d5fc575a03264f1a7de00d9e5979910376d94cfc))
- **renovate:** update dependency eslint to v7.32.0 ([f9e3b5b](https://github.com/nlibjs/changelog/commit/f9e3b5bce0725a630431bf9d2fa39abc7c7bdec9))
- **renovate:** update dependency @types/node to v15.14.4 ([220549b](https://github.com/nlibjs/changelog/commit/220549b75951305ce0c8a98d5b4bfe8ca7709dab))
- **renovate:** update dependency @typescript-eslint/parser to v4.28.5 ([81eb10f](https://github.com/nlibjs/changelog/commit/81eb10f1395cbbfc139418be4c4c9eae67a1b468))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.28.5 ([0715403](https://github.com/nlibjs/changelog/commit/071540373bf7fe8451175bc09d1df8932b14a327))
- **renovate:** update dependency @types/node to v15.14.3 ([e207761](https://github.com/nlibjs/changelog/commit/e2077613ae4a03c46123c150c33e6e19ef2fe6b2))
- **renovate:** update dependency lint-staged to v11.1.1 ([3f65be9](https://github.com/nlibjs/changelog/commit/3f65be9b132053ebcff9a775ea209c85fb27a8ee))
- **renovate:** update dependency @typescript-eslint/parser to v4.28.4 ([9a0e5be](https://github.com/nlibjs/changelog/commit/9a0e5bee7d672b1068b208eb2270dc9a0f74bf0e))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.28.4 ([5c0b0c4](https://github.com/nlibjs/changelog/commit/5c0b0c44e7d6e42719026bfb91d8449158cbf1e6))
- **renovate:** update dependency eslint to v7.31.0 ([d694983](https://github.com/nlibjs/changelog/commit/d694983dc8b418cddeddb8749f755848092c6706))
- **renovate:** update dependency lint-staged to v11.0.1 ([6c51833](https://github.com/nlibjs/changelog/commit/6c51833802598965a899f5f5ab91e3e2e974ace7))
- **renovate:** update dependency @types/eslint to v7.28.0 ([98b7824](https://github.com/nlibjs/changelog/commit/98b78244dca05c9fa4d8ea7562655b27688f6f02))
- **renovate:** update dependency @typescript-eslint/parser to v4.28.3 ([ee20563](https://github.com/nlibjs/changelog/commit/ee20563c454c80fbe324c0b16f6f5d277db7e40f))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.28.3 ([b43933f](https://github.com/nlibjs/changelog/commit/b43933f48c2a62bd495ff5c580bced43820f0ec5))
- **renovate:** update dependency @types/node to v15.14.2 ([7b76b92](https://github.com/nlibjs/changelog/commit/7b76b920d43a0d22b1b208eb5e64594e920b8a41))
- **renovate:** update dependency @types/eslint to v7.2.14 ([8a78199](https://github.com/nlibjs/changelog/commit/8a7819982d80ea91df74086c08865d85f58665a7))
- **renovate:** update dependency @typescript-eslint/parser to v4.28.2 ([8dfca6c](https://github.com/nlibjs/changelog/commit/8dfca6c3ab4e341984ee75b08c480a76b2696105))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.28.2 ([d7218c3](https://github.com/nlibjs/changelog/commit/d7218c3eb089c111cda59377b8cf14ff4ca06049))
- **renovate:** update dependency @types/node to v15.14.1 ([cbf9a13](https://github.com/nlibjs/changelog/commit/cbf9a13eccbcd5432f8be3c14eece49b625c0288))
- **renovate:** update dependency eslint to v7.30.0 ([4937ebc](https://github.com/nlibjs/changelog/commit/4937ebcc302fbe2802e7d0d4143cba5875ed80a9))
- **renovate:** update dependency @nlib/eslint-config to v3.17.23 ([232a26c](https://github.com/nlibjs/changelog/commit/232a26c7e92315ce7c6122964f4c854cc4d760a5))
- **renovate:** update dependency typescript to v4.3.5 ([570bd01](https://github.com/nlibjs/changelog/commit/570bd01b5b6b30e4a5d1ae14b415efe4a96f55df))
- **renovate:** update dependency @typescript-eslint/parser to v4.28.1 ([e9e7f3b](https://github.com/nlibjs/changelog/commit/e9e7f3b6c7b0043a93d591dcbf1e4e77b102c2a7))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.28.1 ([090f6a3](https://github.com/nlibjs/changelog/commit/090f6a35fb96afbf8a32b9486fcf033f5010e141))
- **renovate:** update dependency @types/node to v15.12.5 ([aca7023](https://github.com/nlibjs/changelog/commit/aca7023fb2806568226a7df91390522cf94f94f5))
- **renovate:** update dependency @typescript-eslint/parser to v4.28.0 ([8ca305c](https://github.com/nlibjs/changelog/commit/8ca305c5b36df3e574137f9ea8087ee29ffebf0b))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.28.0 ([a4320c6](https://github.com/nlibjs/changelog/commit/a4320c65ec8017bf1872ca47f139835868d8c25f))
- **renovate:** update dependency eslint to v7.29.0 ([f0d3957](https://github.com/nlibjs/changelog/commit/f0d3957ccb97b8171ddae99d3a1b5bf825d991c1))
- **renovate:** update dependency @types/node to v15.12.4 ([1fc7350](https://github.com/nlibjs/changelog/commit/1fc7350b82b2ac97f50a46ae1e6a1c7df4e6876e))
- **renovate:** update dependency typescript to v4.3.4 ([9cb1a1b](https://github.com/nlibjs/changelog/commit/9cb1a1b70e9d8f9c2bea8f38e560d23cd0d49d62))
- **renovate:** update dependency @typescript-eslint/parser to v4.27.0 ([655c0cf](https://github.com/nlibjs/changelog/commit/655c0cf613d8cefe5697d8501b44f2ee7ac0dcc6))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.27.0 ([c9d4245](https://github.com/nlibjs/changelog/commit/c9d4245973190442aa377d93e63813dcf3645d28))
- **renovate:** update dependency @types/node to v15.12.2 ([16a6e6b](https://github.com/nlibjs/changelog/commit/16a6e6bdc5ead6258b9772dd20903d2c3fc7f54d))
- **renovate:** update dependency @typescript-eslint/parser to v4.26.1 ([66290e7](https://github.com/nlibjs/changelog/commit/66290e7eebe42d5fa110f5bedd857d372fedcda0))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.26.1 ([5eecc84](https://github.com/nlibjs/changelog/commit/5eecc84f1c3b1ef3bb277061bf2234711780ef11))
- **renovate:** update dependency eslint to v7.28.0 ([4fb6094](https://github.com/nlibjs/changelog/commit/4fb6094903918286ce2c73207a75e458107e5a4b))
- **renovate:** update dependency @types/node to v15.12.1 ([1eee55c](https://github.com/nlibjs/changelog/commit/1eee55c4c5d324a337f6ced498016d8f044c183f))
- **renovate:** update dependency @typescript-eslint/parser to v4.26.0 ([2e94a91](https://github.com/nlibjs/changelog/commit/2e94a9141bc3e1fb4a1c779662ce93ee0bef72c5))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.26.0 ([3683ca6](https://github.com/nlibjs/changelog/commit/3683ca69485bd01fd2375b81fe067137d21078af))
- **renovate:** update dependency @types/eslint to v7.2.12 ([71adae9](https://github.com/nlibjs/changelog/commit/71adae9173dea92bb104a786553c5d852202109f))
- **renovate:** update dependency typescript to v4.3.2 ([4ec83f9](https://github.com/nlibjs/changelog/commit/4ec83f9a7902d2805d03f8865f328b540e754725))
- **renovate:** update dependency @types/node to v15.6.1 ([e7cf8ae](https://github.com/nlibjs/changelog/commit/e7cf8ae1bf69ee37166585d615b486fc3c843a36))
- **renovate:** update dependency @typescript-eslint/parser to v4.25.0 ([535e2ad](https://github.com/nlibjs/changelog/commit/535e2adbb9a2780174f30be8fb460a7cd8e6c2c5))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.25.0 ([74954c6](https://github.com/nlibjs/changelog/commit/74954c6304cfc9857a76daadd240119391e07891))
- **renovate:** update dependency eslint to v7.27.0 ([28a47cf](https://github.com/nlibjs/changelog/commit/28a47cf6cff18e16f878d9e0ded938ae7c306468))
- **renovate:** update dependency @types/node to v15.6.0 ([92c9f3c](https://github.com/nlibjs/changelog/commit/92c9f3c52343ed92dd0a2eb9735fd09355554b68))
- **renovate:** update dependency @typescript-eslint/parser to v4.24.0 ([74a3ca4](https://github.com/nlibjs/changelog/commit/74a3ca44cab0fb734c1b2e4e28e963dccb70781f))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.24.0 ([a630511](https://github.com/nlibjs/changelog/commit/a6305114ae99eabc6168a67d18c4b6d96a5bf58b))
- **renovate:** update dependency @types/node to v15.3.0 ([1846c9c](https://github.com/nlibjs/changelog/commit/1846c9c1988949bb6b7c5f9f7ef2c8af78875ea8))
- **renovate:** update dependency @typescript-eslint/parser to v4.23.0 ([90bbc1f](https://github.com/nlibjs/changelog/commit/90bbc1fedc4e0f93599904d8eb2781763ccde2c2))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.23.0 ([2172757](https://github.com/nlibjs/changelog/commit/2172757c00305d8ad6809837736cbe3b73a0a0ec))
- **renovate:** update dependency eslint to v7.26.0 ([b638a47](https://github.com/nlibjs/changelog/commit/b638a474fa888f0032c4dce5edd5d4920fcb8dc4))
- npm audit fix ([c4a6d3f](https://github.com/nlibjs/changelog/commit/c4a6d3fec4083a1ed6c5fe808a496e974949e1b7))
- @nlib/eslint-config:3.17.16→3.17.22 lint-staged:10.5.4→11.0.0 ([c7193b4](https://github.com/nlibjs/changelog/commit/c7193b4eacc47a4211643b08495e02998be95e3d))
- **renovate:** update dependency @types/node to v15 ([b811d0d](https://github.com/nlibjs/changelog/commit/b811d0dcedef803a206dd37966b0ba4330798b30))
- **renovate:** update dependency @typescript-eslint/parser to v4.22.1 ([c497cdc](https://github.com/nlibjs/changelog/commit/c497cdccc4b09f828363c649d7d667a15ede4276))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.22.1 ([4f90eb6](https://github.com/nlibjs/changelog/commit/4f90eb6e55dfc877012f9aa663a8be1d9424cc70))
- **renovate:** update dependency @types/node to v14.14.43 ([207efd3](https://github.com/nlibjs/changelog/commit/207efd3fca602ba7f5c586a5656ce4d65f0f0c69))
- **renovate:** update dependency eslint to v7.25.0 ([bdadba3](https://github.com/nlibjs/changelog/commit/bdadba361cce4d3f839ac8090c6422b728eb5549))
- **renovate:** update dependency @types/node to v14.14.41 ([283c716](https://github.com/nlibjs/changelog/commit/283c716850ed4527b92094f4faaea48d7b6cf421))
- **renovate:** update dependency @types/eslint to v7.2.10 ([7932d59](https://github.com/nlibjs/changelog/commit/7932d5917d983bd97c0f4829bb451d0f81e467ee))
- **renovate:** update dependency @typescript-eslint/parser to v4.22.0 ([c3d3420](https://github.com/nlibjs/changelog/commit/c3d3420b9677c026f6a814ee5b14e2ed9f60d3f1))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.22.0 ([a037a83](https://github.com/nlibjs/changelog/commit/a037a835ca61f201f24828c1b6d36f6a82d80cac))
- **renovate:** update dependency eslint to v7.24.0 ([c04c965](https://github.com/nlibjs/changelog/commit/c04c9654348cbccb23b42db75c6ef49daf5f0542))
- **renovate:** update dependency typescript to v4.2.4 ([2837ae0](https://github.com/nlibjs/changelog/commit/2837ae0cdf40896c730b6036b395b92131e40afb))
- **renovate:** update dependency @typescript-eslint/parser to v4.21.0 ([815fa3f](https://github.com/nlibjs/changelog/commit/815fa3fbcb7f27a1fd25517829c1bc82ad5fab15))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.21.0 ([2b24810](https://github.com/nlibjs/changelog/commit/2b24810304144836ff26cb35dfd6c42683ea934d))
- **renovate:** update dependency @typescript-eslint/parser to v4.20.0 ([893b548](https://github.com/nlibjs/changelog/commit/893b548726c4a8df084666e926387f6654bc596a))
- **renovate:** update dependency @types/eslint to v7.2.8 ([a70b10e](https://github.com/nlibjs/changelog/commit/a70b10e7f6401cc79e90458c28973a3b98d1533b))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.20.0 ([1111450](https://github.com/nlibjs/changelog/commit/1111450ea19b65eb3cac0e118dd766c88613f504))
- **renovate:** update dependency @nlib/test to v3.18.7 ([3f77dc0](https://github.com/nlibjs/changelog/commit/3f77dc065ad219d1938986e955d1045311da630a))
- **renovate:** update dependency @nlib/nodetool to v0.1.17 ([a8365de](https://github.com/nlibjs/changelog/commit/a8365de0649bd3b95093f126962c2edb2761a3f8))
- **renovate:** update dependency @nlib/lint-commit to v0.1.4 ([e7a93b0](https://github.com/nlibjs/changelog/commit/e7a93b022b7fd4e0c0c8781272fffca1a3d86736))
- **renovate:** update dependency @types/node to v14.14.37 ([d2e2ddc](https://github.com/nlibjs/changelog/commit/d2e2ddc2dde3e8960b05cbbe961404f3504bb5b1))
- **renovate:** update dependency eslint to v7.23.0 ([1bf0daa](https://github.com/nlibjs/changelog/commit/1bf0daa09ca58fa74f2a58c9f5b752cd06b890d2))
- **renovate:** update dependency @typescript-eslint/parser to v4.19.0 ([ebce125](https://github.com/nlibjs/changelog/commit/ebce125cffe8ac10f6fe6162d3e3a598d441a42a))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.19.0 ([0250015](https://github.com/nlibjs/changelog/commit/0250015f6c7e5b033689b394f9ccc590b8ba602f))
- **renovate:** update dependency @types/node to v14.14.35 ([a1a07ac](https://github.com/nlibjs/changelog/commit/a1a07ace561b163eb2e8949accd801eaee2e2b2a))
- **renovate:** update dependency @typescript-eslint/parser to v4.18.0 ([ada47de](https://github.com/nlibjs/changelog/commit/ada47de8d2999c71fe873003c40c7c4e1f24284b))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.18.0 ([b820816](https://github.com/nlibjs/changelog/commit/b82081629ae15ee700ea23352d7db8b2edcceaee))
- **renovate:** update dependency eslint to v7.22.0 ([07cb4f9](https://github.com/nlibjs/changelog/commit/07cb4f9d5fadf81daa5dd7f1ffee1f2a55ad09e8))
- **renovate:** update dependency @types/node to v14.14.34 ([76104a8](https://github.com/nlibjs/changelog/commit/76104a82fcfaee12b76db31c9869b396dc61c946))
- **renovate:** update dependency @typescript-eslint/parser to v4.17.0 ([4383edd](https://github.com/nlibjs/changelog/commit/4383edd19932e5826cbd6b60745120b8d9fa6c9c))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.17.0 ([5117674](https://github.com/nlibjs/changelog/commit/51176745f74a906960311008a8d74079c6193ae2))
- **renovate:** update dependency @types/eslint to v7.2.7 ([d603326](https://github.com/nlibjs/changelog/commit/d60332615ca39a5a4c46ce790a81521ec70cc5f8))
- **renovate:** update dependency typescript to v4.2.3 ([e1a5f49](https://github.com/nlibjs/changelog/commit/e1a5f49e16dc1efc18f045fc2c45b40c2836a72d))
- **renovate:** update dependency @typescript-eslint/parser to v4.16.1 ([5f8794c](https://github.com/nlibjs/changelog/commit/5f8794c3d71f1b21b9e874f4e6bd34443fed2afb))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.16.1 ([e513f8b](https://github.com/nlibjs/changelog/commit/e513f8bf50100af1bc2223b871e265362962793d))
- **renovate:** update dependency eslint to v7.21.0 ([d485130](https://github.com/nlibjs/changelog/commit/d4851301160b7a0ac75c4eeede25a8453321bafb))
- **renovate:** update dependency typescript to v4.2.2 ([76ae099](https://github.com/nlibjs/changelog/commit/76ae099a0d30d7c9ad2b04be1dcf60d2f60afd34))
- **renovate:** update dependency @typescript-eslint/parser to v4.15.2 ([429c8a5](https://github.com/nlibjs/changelog/commit/429c8a53f8fadf46b0abbbd748d0e94e63216370))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.15.2 ([a273e0a](https://github.com/nlibjs/changelog/commit/a273e0a5f7860c1fe1598afd5d0084f772373497))
- **renovate:** update dependency @types/node to v14.14.31 ([dbd3e2f](https://github.com/nlibjs/changelog/commit/dbd3e2f7549bf8ce8b76f89e73be9ed01718d915))
- **renovate:** update dependency @typescript-eslint/parser to v4.15.1 ([846adb6](https://github.com/nlibjs/changelog/commit/846adb69354daa4f0c670fa28dcc0dfac6bed5f3))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.15.1 ([4f79667](https://github.com/nlibjs/changelog/commit/4f79667a2027e3d04f124043486c1b30567a7f0c))
- **renovate:** update dependency @types/node to v14.14.28 ([1d551df](https://github.com/nlibjs/changelog/commit/1d551df946d6a522ccf7e81765749ee2df0c472e))
- **renovate:** update dependency eslint to v7.20.0 ([73c39af](https://github.com/nlibjs/changelog/commit/73c39af3810198b44231ff529da1e6fddba17b52))
- **renovate:** update dependency typescript to v4.1.5 ([db43548](https://github.com/nlibjs/changelog/commit/db435485b1fa781f30a19a1832a81576af4ed126))
- **renovate:** update dependency @typescript-eslint/parser to v4.15.0 ([1d76ad5](https://github.com/nlibjs/changelog/commit/1d76ad5c62f4ca32923e74cbbf3c490359626066))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.15.0 ([a10f784](https://github.com/nlibjs/changelog/commit/a10f784992f6334c858a739f842a4495aac9ce11))
- **renovate:** update dependency lint-staged to v10.5.4 ([85b1fb5](https://github.com/nlibjs/changelog/commit/85b1fb52d1d05f85e4cb289133b5f9c8ab088e77))
- **renovate:** update dependency @types/node to v14.14.25 ([1c92194](https://github.com/nlibjs/changelog/commit/1c92194d4ab1ecf4aed03c1ac6220cfde528a085))
- **renovate:** update dependency @typescript-eslint/parser to v4.14.2 ([d07a484](https://github.com/nlibjs/changelog/commit/d07a484de0e68cc7c58186d978aed647b28f8f9a))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.14.2 ([b997a33](https://github.com/nlibjs/changelog/commit/b997a33a222edaa32bb66c5d953ee2d3d9bc5ef6))
- **renovate:** update dependency eslint to v7.19.0 ([c3fa39b](https://github.com/nlibjs/changelog/commit/c3fa39bc4c2e43407e347cb03776ec4985221836))
- **renovate:** update dependency @typescript-eslint/parser to v4.14.1 ([00c58b5](https://github.com/nlibjs/changelog/commit/00c58b54d85b7c274ec2a9098ba8be5dfa195521))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.14.1 ([84662eb](https://github.com/nlibjs/changelog/commit/84662eb931ba8d90e5b3e3229ed575ad8ab6f602))
- **renovate:** update dependency @types/node to v14.14.22 ([bc7db7b](https://github.com/nlibjs/changelog/commit/bc7db7bb54c58f9c7681b57a28e689a06e1fec52))
- **renovate:** update dependency @typescript-eslint/parser to v4.14.0 ([c1640a6](https://github.com/nlibjs/changelog/commit/c1640a63156150ad111c0a93ee537145ecb0c6f0))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.14.0 ([225e6f2](https://github.com/nlibjs/changelog/commit/225e6f25220156f1a35083139de6ecac48f3c764))
- **renovate:** update dependency husky to v4.3.8 ([8bda0aa](https://github.com/nlibjs/changelog/commit/8bda0aad4d1c95e4f156a72b3d78e880c0d96ab5))
- **renovate:** update dependency eslint to v7.18.0 ([af26927](https://github.com/nlibjs/changelog/commit/af26927dc8c26229d121dfcc1871392d55082e0b))
- **renovate:** update dependency @types/node to v14.14.21 ([506862c](https://github.com/nlibjs/changelog/commit/506862c48bcc0e6c1b76410d1052c2c7a28a9f5c))
- **renovate:** update dependency @typescript-eslint/parser to v4.13.0 ([3b1e08d](https://github.com/nlibjs/changelog/commit/3b1e08d26debcafaafbc6e072bc479c64627db44))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.13.0 ([b24f85d](https://github.com/nlibjs/changelog/commit/b24f85deea34fb61682553e5041e38b05e0141aa))
- **renovate:** update dependency husky to v4.3.7 ([fb2ac77](https://github.com/nlibjs/changelog/commit/fb2ac77938ecc7cc57a2ccd4af9cd43dd1574b6f))
- **renovate:** update dependency @typescript-eslint/parser to v4.12.0 ([e2110a0](https://github.com/nlibjs/changelog/commit/e2110a0b6560ceb64790df6c67a4139400c77981))
- **renovate:** update dependency @types/node to v14.14.20 ([b26fd05](https://github.com/nlibjs/changelog/commit/b26fd057aec0a5b6a05b92bbaa4bfcddd688fb6d))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.12.0 ([fae4595](https://github.com/nlibjs/changelog/commit/fae45956e6ed0c352f57b190c21d34d7c7f6ce12))
- **renovate:** update dependency eslint to v7.17.0 ([eb568d2](https://github.com/nlibjs/changelog/commit/eb568d255d681e584d1c8fa98ab41703bc23944c))
- **renovate:** update dependency ava to v3.15.0 ([f6ff28d](https://github.com/nlibjs/changelog/commit/f6ff28d60b50c685af8d89e6f35ba1912bdf1cf8))
- **renovate:** update dependency @typescript-eslint/parser to v4.11.1 ([0d9b4d1](https://github.com/nlibjs/changelog/commit/0d9b4d14efeb79b9ec4b11dab6b767d24dc10deb))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.11.1 ([ce3ac57](https://github.com/nlibjs/changelog/commit/ce3ac57501e677cdbb99be17b570191e2e6892e0))
- **renovate:** update dependency @types/node to v14.14.16 ([fc1c8ba](https://github.com/nlibjs/changelog/commit/fc1c8ba5a6e0328decb510e77b8d234c46d2f392))
- **renovate:** update dependency @typescript-eslint/parser to v4.11.0 ([b9d9d69](https://github.com/nlibjs/changelog/commit/b9d9d6906c4e52a9536c6f5cbc78fdf08f1b2cbe))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.11.0 ([cc12e49](https://github.com/nlibjs/changelog/commit/cc12e492d47f76e2c256a2850eb8669ca17ecf17))
- **renovate:** update dependency @nlib/eslint-config to v3.17.16 ([d1b7572](https://github.com/nlibjs/changelog/commit/d1b7572553af4e070fbf63578e1a2a5d89a0af83))
- **renovate:** update dependency eslint to v7.16.0 ([65daf38](https://github.com/nlibjs/changelog/commit/65daf3870860f3a321c68f7d19ff1d89a412aab7))
- **renovate:** update dependency @types/node to v14.14.14 ([545a47c](https://github.com/nlibjs/changelog/commit/545a47cbd0b36e51f05fe25276b899f2c482f048))
- **renovate:** update dependency @typescript-eslint/parser to v4.10.0 ([10b6030](https://github.com/nlibjs/changelog/commit/10b6030edea2c97a6f0ff9eb983e57fdf82194d4))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.10.0 ([0b9c75a](https://github.com/nlibjs/changelog/commit/0b9c75af57cfc3fb0f40cbfb100f61ac97159369))
- **renovate:** update dependency husky to v4.3.6 ([d8d584c](https://github.com/nlibjs/changelog/commit/d8d584cb86734d6274b93380b86d05d29e7db855))
- **renovate:** update dependency typescript to v4.1.3 ([ea5bb2d](https://github.com/nlibjs/changelog/commit/ea5bb2d20a1ee2e20474ad3a8449b9da2348e0c6))
- **renovate:** update dependency @types/node to v14.14.12 ([7cdce32](https://github.com/nlibjs/changelog/commit/7cdce3294b77f265f906a6af43aef83c0c8d5596))
- **renovate:** update dependency @types/node to v14.14.11 ([4d0c337](https://github.com/nlibjs/changelog/commit/4d0c337bcb0cdede58f9e386e7a55d165e5d2578))
- **renovate:** update dependency @typescript-eslint/parser to v4.9.1 ([165daa6](https://github.com/nlibjs/changelog/commit/165daa613c008e3a257c6c80b40a92407c17a3f1))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.9.1 ([2177531](https://github.com/nlibjs/changelog/commit/2177531b052be26fff95aad7ca6050e35815fbfb))
- **renovate:** update dependency ts-node to v9.1.1 ([c5b869c](https://github.com/nlibjs/changelog/commit/c5b869cdd9d847beccc455e306cc31fdb4deb4f7))
- **renovate:** update dependency ava to v3.14.0 ([e3ffac3](https://github.com/nlibjs/changelog/commit/e3ffac3a2bd6be4a7ac27456c63fd94c6dfa831f))
- **renovate:** update dependency husky to v4.3.5 ([6c32783](https://github.com/nlibjs/changelog/commit/6c32783fba73f078558b7e2fc852ab75cfc1e840))
- **renovate:** update dependency husky to v4.3.4 ([40d5af6](https://github.com/nlibjs/changelog/commit/40d5af62f9247bdb7f2326e5a5f1cf52cb3b46ea))
- **renovate:** update dependency eslint to v7.15.0 ([eb24826](https://github.com/nlibjs/changelog/commit/eb248264bdec5c5a6187ea0fca230c87ae889534))
- **renovate:** update dependency lint-staged to v10.5.3 ([7087ebf](https://github.com/nlibjs/changelog/commit/7087ebf050d5c869d7cf2c2b879c45ea4092e093))
- **renovate:** update dependency ts-node to v9.1.0 ([66aff22](https://github.com/nlibjs/changelog/commit/66aff2292f715398ffd2bd09335c251e5396cfa7))
- **renovate:** update dependency @types/eslint to v7.2.6 ([50789b8](https://github.com/nlibjs/changelog/commit/50789b836531064548e011bd0c84208493c8a141))
- **renovate:** update dependency @typescript-eslint/parser to v4.9.0 ([f871833](https://github.com/nlibjs/changelog/commit/f87183355a08d328959f8e17d367b90af2e7751d))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.9.0 ([e7fe707](https://github.com/nlibjs/changelog/commit/e7fe7074184bc6391ad4a07023a642ecccbb12e9))
- **renovate:** update dependency @types/node to v14.14.10 ([a0e68ca](https://github.com/nlibjs/changelog/commit/a0e68ca5b9b7da3c7a7cdf8ec5a7d0f0fe1fbb6f))
- **renovate:** update dependency lint-staged to v10.5.2 ([b74c037](https://github.com/nlibjs/changelog/commit/b74c037d6e7c1d210c9aa27f36a7f3f60753b4d3))
- **renovate:** update dependency @typescript-eslint/parser to v4.8.2 ([afa99a3](https://github.com/nlibjs/changelog/commit/afa99a3928c2a2834e00dd9c5e040194f09637b6))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.8.2 ([89e89ca](https://github.com/nlibjs/changelog/commit/89e89ca7e52d9ee0d222cc899261f9cba2ee254e))
- **renovate:** update dependency eslint to v7.14.0 ([2d5343b](https://github.com/nlibjs/changelog/commit/2d5343b430501e02e4abb1a70fe17c66f9bf629a))
- **renovate:** update dependency typescript to v4.1.2 ([cd910ec](https://github.com/nlibjs/changelog/commit/cd910ec1fa8d48c7ab798d38585a5ed9c35abdab))
- **renovate:** update dependency @types/node to v14.14.9 ([6925612](https://github.com/nlibjs/changelog/commit/69256127d3d299afa750a495773bc90cebb4a1f6))
- **renovate:** update dependency @types/node to v14.14.8 ([a967b96](https://github.com/nlibjs/changelog/commit/a967b9601792ef1c5eefda5c0c4097ab9530f608))
- **renovate:** update dependency @typescript-eslint/parser to v4.8.1 ([d2b26f9](https://github.com/nlibjs/changelog/commit/d2b26f90b8d475d3180ff75b276191e75a4233c4))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.8.1 ([c89a057](https://github.com/nlibjs/changelog/commit/c89a0575c15f19e81ce51e4a1728c86adc89c01c))
- **renovate:** update dependency @types/eslint to v7.2.5 ([ee0789c](https://github.com/nlibjs/changelog/commit/ee0789c1eafb866afa8e86ff777eb19ed660b993))
- **renovate:** update dependency @types/node to v14.14.7 ([caad40d](https://github.com/nlibjs/changelog/commit/caad40d84494b776a073599715a5dc4b024bf2d1))
- **renovate:** update dependency @typescript-eslint/parser to v4.7.0 ([0e28658](https://github.com/nlibjs/changelog/commit/0e286581b9a8a5a32e7e4e6dd5b9f793e0e8b521))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.7.0 ([08e8c70](https://github.com/nlibjs/changelog/commit/08e8c709ced566577c3e89c763dcb6f1f95fc775))
- **renovate:** update dependency @nlib/eslint-config to v3.17.15 ([9143450](https://github.com/nlibjs/changelog/commit/9143450c6de151dcb04a91396a424e3333f90068))
- **renovate:** update dependency eslint to v7.13.0 ([40ca83d](https://github.com/nlibjs/changelog/commit/40ca83d758505e5bad9df0dddf6239d9a2a3046f))
- **renovate:** update dependency typescript to v4.0.5 ([b3aedb8](https://github.com/nlibjs/changelog/commit/b3aedb87bcd4aa28354ab2c8c43204c5c8dd01ab))
- **renovate:** update dependency eslint to v7.12.1 ([4714e8e](https://github.com/nlibjs/changelog/commit/4714e8eec6abcee8aca4046824930f49b24a7c18))
- **renovate:** update dependency conventional-changelog-cli to v2.1.1 ([1463bbf](https://github.com/nlibjs/changelog/commit/1463bbf451caf22374fbc8073d137cb08d75bd1d))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v4.6.1 ([50bcacf](https://github.com/nlibjs/changelog/commit/50bcacf2c6bb98413e623422479d213e2b9e9930))
- **renovate:** update dependency lint-staged to v10.5.1 ([33d0cf7](https://github.com/nlibjs/changelog/commit/33d0cf726472eb530cf5ba1deeb445e009c28d98))
- **renovate:** update dependency @typescript-eslint/parser to v4.6.1 ([19426e9](https://github.com/nlibjs/changelog/commit/19426e9bad230cb728b0e89da9012c1571870ee2))
- **renovate:** update dependency @types/node to v14.14.6 ([32bd3f2](https://github.com/nlibjs/changelog/commit/32bd3f2d7357ab4310ab98f9e70d2a3257663a50))
- **renovate:** pin dependencies ([a1cb932](https://github.com/nlibjs/changelog/commit/a1cb932235de77c9f7a5e4de06f6a296e31e5b53))
- **renovate:** update dependency @nlib/typing to ^0.2.0 ([3f4f53e](https://github.com/nlibjs/changelog/commit/3f4f53e233240794266a2315cc5919e163acd4de))


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


