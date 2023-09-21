import assert from "assert";
import { page } from "../../features/support/hooks";
import { expect } from "chai";

export class Login {
  // Open the seek page with the given URL
  async signin(URL: string,username: string, password: string) {
    // Navigate to the provided URL
    await page.goto(URL);
    console.log(`Username: ${username}`);
console.log(`Password: ${password}`);


    await page.locator('[data-automation="sign in"]').first().click();
    await page.type("#emailAddress", username);
    await page.type("#password", password);
    await page.locator('[data-cy="login"]').click();
  
  }

}
