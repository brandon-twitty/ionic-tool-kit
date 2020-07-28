import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SpeakersPage } from './speakers.page';
const routes = [
    {
        path: '',
        component: SpeakersPage
    }
];
let SpeakersPageModule = class SpeakersPageModule {
};
SpeakersPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [SpeakersPage]
    })
], SpeakersPageModule);
export { SpeakersPageModule };
//# sourceMappingURL=speakers.module.js.map