import { expect } from '@playwright/test';
class QaFeastPage {
    constructor(page) {
        this.page = page;
        this.acceptButton = page.locator("button.acpt_");
        this.toolsLink = page.locator("//a[text()='Tools']");
        this.demoSiteLink = page.locator("//a[text()='Demo Site']");
        this.name = page.locator("//label[text()='Editable Text box:']/following-sibling::input");
    }

    async navigate() {
        await this.page.goto('https://www.qafeast.com/');
    }

    async acceptCookies() {
        if (await this.acceptButton.isVisible()) {
            await this.acceptButton.click();
        }
    }

    async clickDemoSite() {
        await this.toolsLink.hover();
        await this.demoSiteLink.waitFor({ state: 'visible' });
        await this.demoSiteLink.click();
        await expect(this.page).toHaveURL('https://www.qafeast.com/demo');
    }

    async TextBox() {
        await expect(this.name).toBeVisible();
        await this.name.fill('Hello World');
        await expect(this.name).toHaveValue('Hello World');
        await expect(this.page.locator("#noteditabletext")).toBeVisible();
        await expect(this.page.locator("input[value='Enter username']")).toBeVisible();
        await this.page.locator("input[value='Enter username']").fill('Test User');
        await expect(this.page.locator("input[value='Enter username']")).toHaveValue('Test User');
    }

    async Button() {
        await expect(this.page.locator("//label[text()='Button']")).toBeVisible();
        await this.page.locator("//label[text()='Button']").click();
        await expect(this.page.locator("button#button-1")).toBeEnabled();
        await this.page.locator("button#button-1").click();
        await expect(this.page.locator("p#msgbutton-1", { hasText: 'Submit button is clicked' })).toBeVisible();
        await expect(this.page.locator("button.disabled", { hasText: 'Order' })).toBeVisible();
    }

    async RadioButton() {
        await expect(this.page.locator("//label[text()='Radio Button']")).toBeVisible();
        await this.page.locator("//label[text()='Radio Button']").click();
        await expect(this.page.locator("//div[@class='radio']//label[text()='Male']")).toBeVisible();
        await this.page.locator("//div[@class='radio']//label[text()='Male']").click();
        await expect(this.page.locator("p.msgbox", { hasText: 'Male is selected' })).toBeVisible();
        await expect(this.page.locator("//div[@class='radio']//label[text()='Female']")).toBeVisible();
        await this.page.locator("//div[@class='radio']//label[text()='Female']").click();
        await expect(this.page.locator("p.msgbox", { hasText: 'Female is selected' })).toBeVisible();
    }

    async checkbox() {
        await expect(this.page.locator("//label[text()='Checkbox']")).toBeVisible();
        await this.page.locator("//label[text()='Checkbox']").click();
        await expect(this.page.locator("h2.page-title", { hasText: 'Checkbox' })).toBeVisible();
        await expect(this.page.locator("input[name='reportchkbox_1']")).toBeVisible();
        await this.page.locator("input[name='reportchkbox_1']").check();
        await expect(this.page.locator("div.msgbox", { hasText: 'Summary report is selected.' })).toBeVisible();
        await expect(this.page.locator("input[name='reportchkbox_2']")).toBeVisible();
        await this.page.locator("input[name='reportchkbox_2']").check();
        await expect(this.page.locator("div.msgbox", { hasText: 'Summary report,Detailed report is selected.' })).toBeVisible();
        await expect(this.page.locator("input[name='reportchkbox_3']")).toBeVisible();
        await this.page.locator("input[name='reportchkbox_3']").check();
        await expect(this.page.locator("div.msgbox", { hasText: 'Summary report,Detailed report,Weekly report is selected.' })).toBeVisible();
        await this.page.locator("input[name='reportchkbox_1']").uncheck();
        await this.page.locator("input[name='reportchkbox_2']").uncheck();
        await this.page.locator("input[name='reportchkbox_3']").uncheck();
    }
}

export default QaFeastPage;