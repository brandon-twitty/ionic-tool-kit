import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfileSettingsPage } from './profile-settings.page';
const routes = [
    {
        path: '',
        component: ProfileSettingsPage
    }
];
let ProfileSettingsPageModule = class ProfileSettingsPageModule {
};
ProfileSettingsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ProfileSettingsPage]
    })
], ProfileSettingsPageModule);
export { ProfileSettingsPageModule };
//# sourceMappingURL=profile-settings.module.js.map