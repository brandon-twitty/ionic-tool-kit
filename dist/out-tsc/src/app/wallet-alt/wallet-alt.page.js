import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let WalletAltPage = class WalletAltPage {
    constructor() {
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Income' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Expense' }
        ];
        this.lineChartLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(255,255,255,0)',
                borderColor: 'rgba(151,198,107,1)',
                pointBackgroundColor: 'rgba(255,255,255,1)',
                pointBorderColor: '#97C66B',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0,0,0,1)'
            },
            {
                backgroundColor: 'rgba(255,255,255,0)',
                borderColor: 'rgba(255,120,141,1)',
                pointBackgroundColor: 'rgba(255,255,255,1)',
                pointBorderColor: '#FF788D',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0,0,0,1)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    ngOnInit() {
    }
    // events
    chartClicked(e) {
        console.log(e);
    }
    chartHovered(e) {
        console.log(e);
    }
};
WalletAltPage = __decorate([
    Component({
        selector: 'app-wallet-alt',
        templateUrl: './wallet-alt.page.html',
        styleUrls: ['./wallet-alt.page.scss'],
    }),
    __metadata("design:paramtypes", [])
], WalletAltPage);
export { WalletAltPage };
//# sourceMappingURL=wallet-alt.page.js.map