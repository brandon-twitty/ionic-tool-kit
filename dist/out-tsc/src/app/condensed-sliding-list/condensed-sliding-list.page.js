import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let CondensedSlidingListPage = class CondensedSlidingListPage {
    constructor() { }
    ngOnInit() {
        // Select all option elements of the sliding list items and add style
        const hosts = document.querySelectorAll('.is-list-condensed ion-item-option');
        Array.from(hosts).forEach((host) => {
            const style = document.createElement('style');
            style.textContent = `
        button.button-native {
          font-weight: var(--is-button-native-font-weight);
        }
      `;
            host.shadowRoot.appendChild(style);
        });
    }
};
CondensedSlidingListPage = __decorate([
    Component({
        selector: 'app-condensed-sliding-list',
        templateUrl: './condensed-sliding-list.page.html',
        styleUrls: ['./condensed-sliding-list.page.scss'],
    }),
    __metadata("design:paramtypes", [])
], CondensedSlidingListPage);
export { CondensedSlidingListPage };
//# sourceMappingURL=condensed-sliding-list.page.js.map