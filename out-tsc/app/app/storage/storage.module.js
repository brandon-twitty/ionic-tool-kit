import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { StoragePage } from './storage.page';
const routes = [
    {
        path: '',
        component: StoragePage
    }
];
let StoragePageModule = class StoragePageModule {
};
StoragePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [StoragePage]
    })
], StoragePageModule);
export { StoragePageModule };
//# sourceMappingURL=storage.module.js.map