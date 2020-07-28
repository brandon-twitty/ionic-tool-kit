import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyVideosFourthPage } from './empty-videos-fourth.page';
const routes = [
    {
        path: '',
        component: EmptyVideosFourthPage
    }
];
let EmptyVideosFourthPageModule = class EmptyVideosFourthPageModule {
};
EmptyVideosFourthPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyVideosFourthPage]
    })
], EmptyVideosFourthPageModule);
export { EmptyVideosFourthPageModule };
//# sourceMappingURL=empty-videos-fourth.module.js.map