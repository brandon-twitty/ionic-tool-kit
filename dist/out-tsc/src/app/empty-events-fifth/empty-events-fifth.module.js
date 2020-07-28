import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyEventsFifthPage } from './empty-events-fifth.page';
const routes = [
    {
        path: '',
        component: EmptyEventsFifthPage
    }
];
let EmptyEventsFifthPageModule = class EmptyEventsFifthPageModule {
};
EmptyEventsFifthPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyEventsFifthPage]
    })
], EmptyEventsFifthPageModule);
export { EmptyEventsFifthPageModule };
//# sourceMappingURL=empty-events-fifth.module.js.map