import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyEventsFirstPage } from './empty-events-first.page';
const routes = [
    {
        path: '',
        component: EmptyEventsFirstPage
    }
];
let EmptyEventsFirstPageModule = class EmptyEventsFirstPageModule {
};
EmptyEventsFirstPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyEventsFirstPage]
    })
], EmptyEventsFirstPageModule);
export { EmptyEventsFirstPageModule };
//# sourceMappingURL=empty-events-first.module.js.map