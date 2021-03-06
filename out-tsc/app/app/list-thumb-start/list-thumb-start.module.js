import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListThumbStartPage } from './list-thumb-start.page';
const routes = [
    {
        path: '',
        component: ListThumbStartPage
    }
];
let ListThumbStartPageModule = class ListThumbStartPageModule {
};
ListThumbStartPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ListThumbStartPage]
    })
], ListThumbStartPageModule);
export { ListThumbStartPageModule };
//# sourceMappingURL=list-thumb-start.module.js.map