# Testcafe Filter Warning issue

To reproduce:

1. Clone this repostitory
2. npm i
3. Run `npx testcafe chromium:headless filterissue.test.js --fixture-meta issue=true`

## Output

```
The "filter" option from the configuration file will be ignored.
 Running tests in:
 - Chrome 93.0.4577.0 / macOS 10.15.7

 Issue POC
 ✓ Show issue


 1 passed (1s)

 Warnings (1):
 --
  The "filter" option from the configuration file will be ignored.

```