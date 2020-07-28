import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChartsModule } from 'ng2-charts';
import '../../../node_modules/chart.js/dist/Chart.bundle.min.js';
import { WalletAltPage } from './wallet-alt.page';
const routes = [
    {
        path: '',
        component: WalletAltPage
    }
];
let WalletAltPageModule = class WalletAltPageModule {
};
WalletAltPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            ChartsModule
        ],
        declarations: [WalletAltPage]
    })
], WalletAltPageModule);
export { WalletAltPageModule };
//# sourceMappingURL=wallet-alt.module.js.map