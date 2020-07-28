import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyWalletFirstPage } from './empty-wallet-first.page';
const routes = [
    {
        path: '',
        component: EmptyWalletFirstPage
    }
];
let EmptyWalletFirstPageModule = class EmptyWalletFirstPageModule {
};
EmptyWalletFirstPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyWalletFirstPage]
    })
], EmptyWalletFirstPageModule);
export { EmptyWalletFirstPageModule };
//# sourceMappingURL=empty-wallet-first.module.js.map