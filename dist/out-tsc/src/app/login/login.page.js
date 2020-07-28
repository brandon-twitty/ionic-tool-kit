import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let LoginPage = class LoginPage {
    constructor() { }
    ngOnInit() {
    }
    togglePasswordType() {
        this.passwordType = this.passwordType || 'password';
        this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
    }
};
LoginPage = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    __metadata("design:paramtypes", [])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map