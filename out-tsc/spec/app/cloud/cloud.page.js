import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let CloudPage = class CloudPage {
    constructor() { }
    ngOnInit() {
        // Select all checkboxes of the list and add style
        const hosts = document.querySelectorAll('.is-list-vertical-buttons ion-checkbox');
        Array.from(hosts).forEach((host) => {
            const style = document.createElement('style');
            style.textContent = `
        button {
          left: var(--is-checkbox-overlay-left);
        }
      `;
            host.shadowRoot.appendChild(style);
        });
    }
};
CloudPage = __decorate([
    Component({
        selector: 'app-cloud',
        templateUrl: './cloud.page.html',
        styleUrls: ['./cloud.page.scss'],
    }),
    __metadata("design:paramtypes", [])
], CloudPage);
export { CloudPage };
//# sourceMappingURL=cloud.page.js.map