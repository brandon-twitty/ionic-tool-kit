import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SessionDetailsPage } from './session-details.page';
const routes = [
    {
        path: '',
        component: SessionDetailsPage
    }
];
let SessionDetailsPageModule = class SessionDetailsPageModule {
};
SessionDetailsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [SessionDetailsPage]
    })
], SessionDetailsPageModule);
export { SessionDetailsPageModule };
//# sourceMappingURL=session-details.module.js.map