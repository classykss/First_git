import { test, expect } from '@playwright/test';
import QaFeastPage from '../pages/QaFeastPage';

test('Navigate to Demo Site', async ({ page }) => {
    const qaFeast = new QaFeastPage(page);
    await qaFeast.navigate();
    await expect(page).toHaveURL('https://www.qafeast.com/');
    await qaFeast.acceptCookies();
    await qaFeast.clickDemoSite();
    await qaFeast.TextBox();
    await qaFeast.Button();
    await qaFeast.RadioButton();
    await qaFeast.checkbox();
});