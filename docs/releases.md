# Maintainer release guide

The Release workflow pins `nlibjs/actions` to `1ff589ed2dc842961210788eae5d19716c8c50fd`, with helper `d685c67777dfeb0325ecc707533bf5dddbd26439`.

Release tooling uses Node 26.x, npm 11.21.0, and cleanup-package-json 0.5.0. The package's supported Node version and compatibility CI matrix stay defined by this repository's package.json and test workflow.

## Trusted Publisher configuration

In npmjs.com's settings for `@nlib/changelog`, verify this GitHub Actions Trusted Publisher configuration:

| Setting | Value |
| --- | --- |
| Organization or user | `nlibjs` |
| Repository | `changelog` |
| Workflow filename | `release.yml` |
| Environment | Leave empty |

Stage authenticates as this repository. Stage requests `contents: write` and `id-token: write`; Finalize requests `contents: write`. Confirm that the repository's Actions settings allow the shared workflow and its pinned actions.

## Operations

1. For a nonpublishing check, select the Release workflow, **Run workflow**, the desired branch, and `action=verify`. Leave version empty. It runs the locked install, lint, tests, build, cleanup, and tarball inspection. It creates no registry version, tag, or GitHub Release.
2. For a normal release, update package.json and CHANGELOG.md through the existing version procedure and merge to main. A package.json push to main starts `stage` automatically. A manual `action=stage` on main can also stage the current package version; leave version empty.
3. Stage saves the fixed source SHA, tarball, and integrity in a draft GitHub Release, then submits that exact tarball to npm. Read the run summary and draft instructions.
4. Approve the exact package/version in npmjs.com's **Staged Packages** using maintainer 2FA. A draft GitHub Release remains unpublished while npm approval is pending.
5. Once npm exposes the approved version, select main, `action=finalize`, and the approved version without the `v` prefix (for example, `0.4.1`). Finalize checks the public npm integrity against the saved tarball, verifies the tag SHA, and publishes the draft. This package has no JSR job.

Manual dispatch defaults to `verify`. Stage and Finalize accept only main. The `release` concurrency group queues operations without canceling an in-progress run.

The shared workflow removes development metadata from the packed manifest and preserves consumer fields such as dependencies, main, bin, types, and publishConfig.

## Recovery

- If npm and the version tag already exist, stage succeeds as a no-op; dependency-only changes do not publish the same version again.
- If a saved draft has a successful staging receipt, approve the pending npm version and finalize. Do not submit the same version again.
- If staging or saving the receipt fails, keep the draft and inspect npm Staged Packages and the public registry. An unconfirmed draft makes stage retries fail without resending. If the version is pending, approve it; if public, finalize and let the saved integrity check confirm it.
- A draft title alone does not identify its version tag. If Finalize cannot find an existing draft, inspect its actual tag, saved source and assets. An `untagged-*` placeholder requires a verified restoration of the intended tag while retaining the draft; do not re-stage an already pending or public npm version.
- If GitHub finalization fails, rerun finalize for the same approved version. It uses the saved tarball and SHA instead of rebuilding current main.
- Duplicate drafts/assets, integrity mismatches, inconsistent tags, and permission errors require investigation. The workflow does not automatically delete or repair them.

Only after confirming that neither a pending nor a public npm version exists may a maintainer reset a definitively failed attempt. Record the error and draft target SHA, save the assets, fix the cause, then manually delete that draft and stage again. The new attempt builds current main; check its version and changes against the recorded SHA. Keep the draft if npm's state remains uncertain.

### Publication permission failures

If the saved commit's workflow files differ from current main and no branch or tag points directly to that commit, GitHub can reject publication with `403` because the token needs workflow modification permission. See [GitHub's permission requirement](https://github.blog/changelog/2023-11-02-github-actions-enforcing-workflow-scope-when-creating-a-release/).

After verifying the draft's full source SHA and package integrity, a maintainer can retain that source with a temporary branch:

```sh
git push origin <saved-sha>:refs/heads/release-source/<version>
```

Retry Finalize on main for the same version. Once the published version tag resolves to the saved SHA, delete the temporary branch. This recovery preserves the staged package and its source.

See the shared workflow's [full recovery procedure](https://github.com/nlibjs/actions/blob/1ff589ed2dc842961210788eae5d19716c8c50fd/README.md#existing-versions-and-failures).

## Updating the shared workflow

Update the caller's three full SHA references together in a reviewed PR. Verify that the chosen workflow commit and its helper pin are both in `nlibjs/actions` main history. To roll back adoption, restore the previous workflow reference; do not attempt to undo a published npm version.
