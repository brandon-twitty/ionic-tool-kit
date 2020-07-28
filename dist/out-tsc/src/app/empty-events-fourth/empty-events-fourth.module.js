import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyEventsFourthPage } from './empty-events-fourth.page';
const routes = [
    {
        path: '',
        component: EmptyEventsFourthPage
    }
];
let EmptyEventsFourthPageModule = class EmptyEventsFourthPageModule {
};
EmptyEventsFourthPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyEventsFourthPage]
    })
], EmptyEventsFourthPageModule);
export { EmptyEventsFourthPageModule };
//# sourceMappingURL=empty-events-fourth.module.js.map