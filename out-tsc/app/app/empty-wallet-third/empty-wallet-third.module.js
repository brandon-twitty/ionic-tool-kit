import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyWalletThirdPage } from './empty-wallet-third.page';
const routes = [
    {
        path: '',
        component: EmptyWalletThirdPage
    }
];
let EmptyWalletThirdPageModule = class EmptyWalletThirdPageModule {
};
EmptyWalletThirdPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyWalletThirdPage]
    })
], EmptyWalletThirdPageModule);
export { EmptyWalletThirdPageModule };
//# sourceMappingURL=empty-wallet-third.module.js.map