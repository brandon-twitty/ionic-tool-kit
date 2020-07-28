import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SpeakerDetailsPage } from './speaker-details.page';
const routes = [
    {
        path: '',
        component: SpeakerDetailsPage
    }
];
let SpeakerDetailsPageModule = class SpeakerDetailsPageModule {
};
SpeakerDetailsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [SpeakerDetailsPage]
    })
], SpeakerDetailsPageModule);
export { SpeakerDetailsPageModule };
//# sourceMappingURL=speaker-details.module.js.map