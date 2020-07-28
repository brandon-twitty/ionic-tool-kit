import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AgendaPage } from './agenda.page';
const routes = [
    {
        path: '',
        component: AgendaPage
    }
];
let AgendaPageModule = class AgendaPageModule {
};
AgendaPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AgendaPage]
    })
], AgendaPageModule);
export { AgendaPageModule };
//# sourceMappingURL=agenda.module.js.map