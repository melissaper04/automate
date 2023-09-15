module.exports = {
  //Please uncomment each config file at a
  /* Existing Behaviour of running one file */
  default:
    // '--require tests/features/support/hooks.ts ts-node --loader ts-node/esm --require tests/step-definitions/*.ts',
    '--require tests/features/support/hooks.ts --require tests/step-definitions/*.ts --format json:"C:\Users\MelissaPereira\OneDrive - PlanPay Pty Ltd\Documents\Automate\tests\features\support\reports\cucumber-report.json" --require-module ts-node/register',
  /* Running All Files */
  // default: 'paths tests/features/*.feature --require tests/features/support/hooks.js --require tests/step-definitions/*.js --format @cucumber/pretty-formatter',
  // /*Running All Feature Files with Tags */
  // default: 'paths tests/features/*.feature --require tests/features/support/hooks.js --require tests/step-definitions/*.js --format @cucumber/pretty-formatter --tags "@smoke"',
  // /*Running All Feature Files with Tags and Parrallel Runners */
};
