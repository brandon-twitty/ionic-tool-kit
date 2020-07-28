import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListThumbEndPage } from './list-thumb-end.page';
const routes = [
    {
        path: '',
        component: ListThumbEndPage
    }
];
let ListThumbEndPageModule = class ListThumbEndPageModule {
};
ListThumbEndPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ListThumbEndPage]
    })
], ListThumbEndPageModule);
export { ListThumbEndPageModule };
//# sourceMappingURL=list-thumb-end.module.js.map