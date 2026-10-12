# Maintainer release guide

The Release workflow uses `nlibjs/actions` at reviewed workflow commit `bdf4f40eafc6fd4732bb30f46fe4d611d44cb198`. That commit is in the shared repository's main history and pins the TypeScript helper to `ca360dbda6c47172efe9f06fee633b7e5f524609`.

Release tooling uses Node 26.x, npm 11.21.0, and cleanup-package-json 0.5.0. The package's supported Node version and compatibility CI matrix stay defined by this repository's package.json and test workflow.

## Before the first shared release

In npmjs.com's settings for `@nlib/changelog`, verify this GitHub Actions Trusted Publisher configuration:

| Setting | Value |
| --- | --- |
| Organization or user | `nlibjs` |
| Repository | `changelog` |
| Workflow filename | `release.yml` |
| Environment | Leave empty |

The publishing identity is the caller repository, not `nlibjs/actions`. Stage requests `contents: write` and `id-token: write`; Finalize requests only `contents: write`. No npm token, inherited secrets, or deployment environment is needed. Confirm that the repository's Actions settings allow calling the public shared workflow and its pinned actions. These npm and GitHub settings must be checked by the maintainer; this adoption change does not modify them.

## Operations

1. For a nonpublishing check, select the Release workflow, **Run workflow**, the desired branch, and `action=verify`. Leave version empty. It runs the locked install, lint, tests, build, cleanup, and tarball inspection. It creates no registry version, tag, or GitHub Release.
2. For a normal release, update package.json and CHANGELOG.md through the existing version procedure and merge to main. A package.json push to main starts `stage` automatically. A manual `action=stage` on main can also stage the current package version; leave version empty.
3. Stage saves the fixed source SHA, tarball, and integrity in a draft GitHub Release, then submits that exact tarball to npm. Read the run summary and draft instructions.
4. Approve the exact package/version in npmjs.com's **Staged Packages** using maintainer 2FA. A draft GitHub Release remains unpublished while npm approval is pending.
5. Once npm exposes the approved version, select main, `action=finalize`, and the approved version without the `v` prefix (for example, `0.4.1`). Finalize checks the public npm integrity against the saved tarball, verifies the tag SHA, and publishes the draft. This package has no JSR job.

Manual dispatch defaults to `verify`. Stage and Finalize accept only main. Concurrency retains the `release` group and does not cancel an in-progress operation. This adoption PR keeps the package version unchanged, so merging it alone does not trigger the package.json release path.

The shared workflow removes development metadata from the packed manifest and preserves consumer fields such as dependencies, main, bin, types, and publishConfig. Cleanup tooling is installed in the shared action's own directory, not added to this package's dependencies. The repository's tracked manifest is unchanged by adoption.

## Recovery

- If npm and the version tag already exist, stage succeeds as a no-op; dependency-only changes do not publish the same version again.
- If a saved draft has a successful staging receipt, approve the pending npm version and finalize. Do not submit the same version again.
- If staging or saving the receipt fails, keep the draft and inspect npm Staged Packages and the public registry. An unconfirmed draft makes stage retries fail without resending. If the version is pending, approve it; if public, finalize and let the saved integrity check confirm it.
- If GitHub finalization fails, rerun finalize for the same approved version. It uses the saved tarball and SHA instead of rebuilding current main.
- Duplicate drafts/assets, integrity mismatches, inconsistent tags, and permission errors require investigation. The workflow does not automatically delete or repair them.

Only after confirming that neither a pending nor a public npm version exists may a maintainer reset a definitively failed attempt. Record the error and draft target SHA, save the assets, fix the cause, then manually delete that draft and stage again. The new attempt builds current main; check its version and changes against the recorded SHA. Keep the draft if npm's state remains uncertain.

See the shared workflow's [full recovery procedure](https://github.com/nlibjs/actions/blob/bdf4f40eafc6fd4732bb30f46fe4d611d44cb198/README.md#existing-versions-and-failures). Validate real OIDC/provenance signing and draft publication during the first normal pilot release; local checks use verification and packing only.

## Updating the shared workflow

Update the caller's three full SHA references together in a reviewed PR. Verify that the chosen workflow commit and its helper pin are both in `nlibjs/actions` main history. To roll back adoption, restore the previous workflow reference; do not attempt to undo a published npm version.
