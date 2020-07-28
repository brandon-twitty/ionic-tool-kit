import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let LoginFooterPage = class LoginFooterPage {
    constructor() { }
    ngOnInit() {
    }
    togglePasswordType() {
        this.passwordType = this.passwordType || 'password';
        this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
    }
};
LoginFooterPage = __decorate([
    Component({
        selector: 'app-login-footer',
        templateUrl: './login-footer.page.html',
        styleUrls: ['./login-footer.page.scss'],
    }),
    __metadata("design:paramtypes", [])
], LoginFooterPage);
export { LoginFooterPage };
//# sourceMappingURL=login-footer.page.js.map