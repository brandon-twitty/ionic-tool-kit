import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WalkthroughSliderPage } from './walkthrough-slider.page';
const routes = [
    {
        path: '',
        component: WalkthroughSliderPage
    }
];
let WalkthroughSliderPageModule = class WalkthroughSliderPageModule {
};
WalkthroughSliderPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [WalkthroughSliderPage]
    })
], WalkthroughSliderPageModule);
export { WalkthroughSliderPageModule };
//# sourceMappingURL=walkthrough-slider.module.js.map