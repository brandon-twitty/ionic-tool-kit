import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyWalletFifthPage } from './empty-wallet-fifth.page';
const routes = [
    {
        path: '',
        component: EmptyWalletFifthPage
    }
];
let EmptyWalletFifthPageModule = class EmptyWalletFifthPageModule {
};
EmptyWalletFifthPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyWalletFifthPage]
    })
], EmptyWalletFifthPageModule);
export { EmptyWalletFifthPageModule };
//# sourceMappingURL=empty-wallet-fifth.module.js.map