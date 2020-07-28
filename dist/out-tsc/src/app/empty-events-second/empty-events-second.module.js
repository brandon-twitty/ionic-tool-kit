import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyEventsSecondPage } from './empty-events-second.page';
const routes = [
    {
        path: '',
        component: EmptyEventsSecondPage
    }
];
let EmptyEventsSecondPageModule = class EmptyEventsSecondPageModule {
};
EmptyEventsSecondPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyEventsSecondPage]
    })
], EmptyEventsSecondPageModule);
export { EmptyEventsSecondPageModule };
//# sourceMappingURL=empty-events-second.module.js.map