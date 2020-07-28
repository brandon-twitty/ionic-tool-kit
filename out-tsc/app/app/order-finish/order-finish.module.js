import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OrderFinishPage } from './order-finish.page';
const routes = [
    {
        path: '',
        component: OrderFinishPage
    }
];
let OrderFinishPageModule = class OrderFinishPageModule {
};
OrderFinishPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [OrderFinishPage]
    })
], OrderFinishPageModule);
export { OrderFinishPageModule };
//# sourceMappingURL=order-finish.module.js.map