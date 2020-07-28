var _a;
import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
let WalkthroughSliderPage = class WalkthroughSliderPage {
    constructor(router) {
        this.router = router;
        this.slideOpts = {
            autoplay: true
        };
        this.env = environment;
    }
    ngOnInit() {
    }
    skip() {
        this.router.navigate(['/login']);
    }
};
WalkthroughSliderPage = __decorate([
    Component({
        selector: 'app-walkthrough-slider',
        templateUrl: './walkthrough-slider.page.html',
        styleUrls: ['./walkthrough-slider.page.scss'],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object])
], WalkthroughSliderPage);
export { WalkthroughSliderPage };
//# sourceMappingURL=walkthrough-slider.page.js.map