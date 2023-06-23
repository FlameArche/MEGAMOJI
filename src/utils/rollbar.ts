import * as Rollbar from "rollbar";
import { NODE_ENV, ROLLBAR_TOKEN, CODE_VERSION } from "./env";

export default (() => {
  console.log(`Code version: ${CODE_VERSION}`);

  if (ROLLBAR_TOKEN) {
    const rollbar = new Rollbar({
      accessToken: ROLLBAR_TOKEN,
      captureUncaught: true,
      captureUnhandledRejections: true,
      environment: NODE_ENV,
      codeVersion: CODE_VERSION,
    });
    // eslint-disable-next-line no-console
    console.log("Rollbar initialized.");
    return rollbar;
  } else {
    // eslint-disable-next-line no-console
    console.log("Specify ROLLBAR_TOKEN to track errors.");
    return null;
  }
})();
