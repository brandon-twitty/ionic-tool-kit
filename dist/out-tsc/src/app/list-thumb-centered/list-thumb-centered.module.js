import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListThumbCenteredPage } from './list-thumb-centered.page';
const routes = [
    {
        path: '',
        component: ListThumbCenteredPage
    }
];
let ListThumbCenteredPageModule = class ListThumbCenteredPageModule {
};
ListThumbCenteredPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ListThumbCenteredPage]
    })
], ListThumbCenteredPageModule);
export { ListThumbCenteredPageModule };
//# sourceMappingURL=list-thumb-centered.module.js.map