import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login";

type PageFixtures = {
    loginPage: LoginPage;
};

export const pageTest = base.extend<PageFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
});
