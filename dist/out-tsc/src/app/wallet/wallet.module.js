import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChartsModule } from 'ng2-charts';
import '../../../node_modules/chart.js/dist/Chart.bundle.min.js';
import { WalletPage } from './wallet.page';
const routes = [
    {
        path: '',
        component: WalletPage
    }
];
let WalletPageModule = class WalletPageModule {
};
WalletPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            ChartsModule
        ],
        declarations: [WalletPage]
    })
], WalletPageModule);
export { WalletPageModule };
//# sourceMappingURL=wallet.module.js.map