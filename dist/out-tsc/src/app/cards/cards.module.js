import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CardsPage } from './cards.page';
const routes = [
    {
        path: '',
        component: CardsPage
    }
];
let CardsPageModule = class CardsPageModule {
};
CardsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [CardsPage]
    })
], CardsPageModule);
export { CardsPageModule };
//# sourceMappingURL=cards.module.js.map