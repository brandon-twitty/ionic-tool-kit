import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RecipesGridPage } from './recipes-grid.page';
const routes = [
    {
        path: '',
        component: RecipesGridPage
    }
];
let RecipesGridPageModule = class RecipesGridPageModule {
};
RecipesGridPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [RecipesGridPage]
    })
], RecipesGridPageModule);
export { RecipesGridPageModule };
//# sourceMappingURL=recipes-grid.module.js.map