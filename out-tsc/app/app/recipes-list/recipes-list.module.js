import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RecipesListPage } from './recipes-list.page';
const routes = [
    {
        path: '',
        component: RecipesListPage
    }
];
let RecipesListPageModule = class RecipesListPageModule {
};
RecipesListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [RecipesListPage]
    })
], RecipesListPageModule);
export { RecipesListPageModule };
//# sourceMappingURL=recipes-list.module.js.map