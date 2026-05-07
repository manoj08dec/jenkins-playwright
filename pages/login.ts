import { Locator, Page } from "@playwright/test";

export class LoginPage {
    private page: Page;
    private name: Locator;
    private email: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.name = page.locator('#name');
        this.email = page.locator('#email');
        this.loginButton = page.locator('button[type="submit"]');
    }

    async enterName(name: string) {
        await this.name.fill(name);
    }

    async enterEmail(email: string) {
        await this.email.fill(email);
    }

    async clickLogin() {
        await this.loginButton.click();
    }
}
