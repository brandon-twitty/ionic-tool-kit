import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyWalletFourthPage } from './empty-wallet-fourth.page';
const routes = [
    {
        path: '',
        component: EmptyWalletFourthPage
    }
];
let EmptyWalletFourthPageModule = class EmptyWalletFourthPageModule {
};
EmptyWalletFourthPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyWalletFourthPage]
    })
], EmptyWalletFourthPageModule);
export { EmptyWalletFourthPageModule };
//# sourceMappingURL=empty-wallet-fourth.module.js.map