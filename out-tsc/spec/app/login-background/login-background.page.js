import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let LoginBackgroundPage = class LoginBackgroundPage {
    constructor() { }
    ngOnInit() {
    }
    togglePasswordType() {
        this.passwordType = this.passwordType || 'password';
        this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
    }
};
LoginBackgroundPage = __decorate([
    Component({
        selector: 'app-login-background',
        templateUrl: './login-background.page.html',
        styleUrls: ['./login-background.page.scss'],
    }),
    __metadata("design:paramtypes", [])
], LoginBackgroundPage);
export { LoginBackgroundPage };
//# sourceMappingURL=login-background.page.js.map