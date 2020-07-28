import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let DashboardPage = class DashboardPage {
    constructor() {
        this.lineChartData = [
            { data: [1065, 1059, 480, 881, 656, 955, 1444], label: 'UI Design' },
            { data: [1028, 648, 1040, 1742, 686, 1027, 1091], label: 'Mobile Template' },
            { data: [18, 48, 77, 99, 100, 456, 340], label: 'Table Templates' }
        ];
        this.lineChartLabels = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(97,207,233,0.5)',
                borderColor: 'rgba(97,207,233,1)',
                pointBackgroundColor: 'rgba(255,255,255,1)',
                pointBorderColor: '#61CFE9'
            },
            {
                backgroundColor: 'rgba(151,198,107,0.5)',
                borderColor: 'rgba(151,198,107,1)',
                pointBackgroundColor: 'rgba(255,255,255,1)',
                pointBorderColor: '#97C66B'
            },
            {
                backgroundColor: 'rgba(255,221,125,0.5)',
                borderColor: 'rgba(255,221,125,1)',
                pointBackgroundColor: 'rgba(255,255,255,1)',
                pointBorderColor: '#FFDD7D'
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
DashboardPage = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.page.html',
        styleUrls: ['./dashboard.page.scss'],
    }),
    __metadata("design:paramtypes", [])
], DashboardPage);
export { DashboardPage };
//# sourceMappingURL=dashboard.page.js.map