import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyWalletSecondPage } from './empty-wallet-second.page';
const routes = [
    {
        path: '',
        component: EmptyWalletSecondPage
    }
];
let EmptyWalletSecondPageModule = class EmptyWalletSecondPageModule {
};
EmptyWalletSecondPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyWalletSecondPage]
    })
], EmptyWalletSecondPageModule);
export { EmptyWalletSecondPageModule };
//# sourceMappingURL=empty-wallet-second.module.js.map