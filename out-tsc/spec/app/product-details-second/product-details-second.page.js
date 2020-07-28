var _a;
import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
let ProductDetailsSecondPage = class ProductDetailsSecondPage {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.slideOpts = {
            autoplay: false
        };
        this.productColors = [];
        this.sanitizer = this.domSanitizer;
    }
    ngOnInit() {
        this.productColors = [
            {
                name: 'white',
                selected: false,
                selectedContrast: 'black'
            },
            {
                name: 'brown',
                selected: false,
                selectedContrast: 'white'
            },
            {
                name: 'blue',
                selected: true,
                selectedContrast: 'white'
            },
            {
                name: 'black',
                selected: false,
                selectedContrast: 'white'
            }
        ];
    }
    toggleSelectedColor(index) {
        this.productColors.forEach((item, i) => {
            if (i === index) {
                item.selected = !item.selected;
            }
            else {
                item.selected = false;
            }
        });
    }
};
ProductDetailsSecondPage = __decorate([
    Component({
        selector: 'app-product-details-second',
        templateUrl: './product-details-second.page.html',
        styleUrls: ['./product-details-second.page.scss'],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof DomSanitizer !== "undefined" && DomSanitizer) === "function" ? _a : Object])
], ProductDetailsSecondPage);
export { ProductDetailsSecondPage };
//# sourceMappingURL=product-details-second.page.js.map