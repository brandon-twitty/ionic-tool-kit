import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WalkthroughAltPage } from './walkthrough-alt.page';
const routes = [
    {
        path: '',
        component: WalkthroughAltPage
    }
];
let WalkthroughAltPageModule = class WalkthroughAltPageModule {
};
WalkthroughAltPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [WalkthroughAltPage]
    })
], WalkthroughAltPageModule);
export { WalkthroughAltPageModule };
//# sourceMappingURL=walkthrough-alt.module.js.map