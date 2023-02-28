import { test } from '@playwright;
import { PlantDropdown }  from './../src/components/PlantDropdown';

test('dropdown tab', async ({ page }) => {
    await page.goto("https://localhost:3000")
    await page.selectOption(".plant-dropdown", {
        // label: "Persian Shield Plant"
        // value: "Bamboo Palm"
    }
    await page.waitForTimeout(3000)
});
