import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let CondensedListPage = class CondensedListPage {
    constructor() { }
    ngOnInit() {
        // Select all checkboxes of the list and add style
        const hosts = document.querySelectorAll('.is-list-vertical-buttons ion-checkbox');
        Array.from(hosts).forEach((host) => {
            const style = document.createElement('style');
            style.textContent = `
        button {
          left: var(--is-checkbox-overlay-left);
          height: var(--is-checkbox-overlay-height);
        }
      `;
            host.shadowRoot.appendChild(style);
        });
    }
};
CondensedListPage = __decorate([
    Component({
        selector: 'app-condensed-list',
        templateUrl: './condensed-list.page.html',
        styleUrls: ['./condensed-list.page.scss'],
    }),
    __metadata("design:paramtypes", [])
], CondensedListPage);
export { CondensedListPage };
//# sourceMappingURL=condensed-list.page.js.map