import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let DropdownsPage = class DropdownsPage {
    constructor() {
        this.customAlertOptions = {
            header: 'Hair Color',
            subHeader: 'Select your hair color',
            message: 'Only select your dominant hair color',
            translucent: true,
            cssClass: 'is-select'
        };
        this.customPopoverOptions = {
            header: 'Pizza Toppings',
            subHeader: 'Select your toppings',
            message: '$1.00 per topping',
            cssClass: 'is-select'
        };
        this.customActionSheetOptions = {
            header: 'Colors',
            subHeader: 'Select your favorite color',
            cssClass: 'is-select'
        };
    }
    ngOnInit() {
    }
};
DropdownsPage = __decorate([
    Component({
        selector: 'app-dropdowns',
        templateUrl: './dropdowns.page.html',
        styleUrls: ['./dropdowns.page.scss'],
    }),
    __metadata("design:paramtypes", [])
], DropdownsPage);
export { DropdownsPage };
//# sourceMappingURL=dropdowns.page.js.map