import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WalkthroughPage } from './walkthrough.page';
const routes = [
    {
        path: '',
        component: WalkthroughPage
    }
];
let WalkthroughPageModule = class WalkthroughPageModule {
};
WalkthroughPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [WalkthroughPage]
    })
], WalkthroughPageModule);
export { WalkthroughPageModule };
//# sourceMappingURL=walkthrough.module.js.map