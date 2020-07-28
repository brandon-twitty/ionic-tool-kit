import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InsetListPage } from './inset-list.page';
const routes = [
    {
        path: '',
        component: InsetListPage
    }
];
let InsetListPageModule = class InsetListPageModule {
};
InsetListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [InsetListPage]
    })
], InsetListPageModule);
export { InsetListPageModule };
//# sourceMappingURL=inset-list.module.js.map