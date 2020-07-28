import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GridTilesPage } from './grid-tiles.page';
const routes = [
    {
        path: '',
        component: GridTilesPage
    }
];
let GridTilesPageModule = class GridTilesPageModule {
};
GridTilesPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [GridTilesPage]
    })
], GridTilesPageModule);
export { GridTilesPageModule };
//# sourceMappingURL=grid-tiles.module.js.map