import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyEventsThirdPage } from './empty-events-third.page';
const routes = [
    {
        path: '',
        component: EmptyEventsThirdPage
    }
];
let EmptyEventsThirdPageModule = class EmptyEventsThirdPageModule {
};
EmptyEventsThirdPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyEventsThirdPage]
    })
], EmptyEventsThirdPageModule);
export { EmptyEventsThirdPageModule };
//# sourceMappingURL=empty-events-third.module.js.map