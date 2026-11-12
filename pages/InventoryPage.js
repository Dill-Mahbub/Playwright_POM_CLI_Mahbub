
export default class InventoryPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.title = page.locator('[data-test="title"]');
    this.productList = page.locator('[data-test="inventory-list"]');
  }

 
    async isLoaded() {
    await this.title.waitFor({ state: 'visible' });
    await this.productList.waitFor({ state: 'visible' });

    return true;
    }
}
