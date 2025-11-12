import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  data: any;
  options: any;

  appLaunchesData: any;
  appLaunchesOptions: any;

  constructor() {
    this.initializeChartData();
    this.initializeAppLaunchesChart();
  }

  initializeChartData() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Sales 2025',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          borderWidth: 1,
          data: [120, 150, 180, 90, 200]
        },
        {
          label: 'Profit 2025',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          borderWidth: 1,
          data: [80, 130, 150, 70, 160]
        }
      ]
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      }
    };
  }

  initializeAppLaunchesChart() {
    this.appLaunchesData = {
      labels: ['Jun, 2025', 'Jul, 2025', 'Aug, 2025', 'Sep, 2025', 'Oct, 2025', 'Nov, 2025'],
      datasets: [
        {
          label: 'ANDROID MOBILE',
          data: [8, 10, 5, 35, 30, 5],
          borderColor: '#5A2EC9',  // Deep Purple
          backgroundColor: 'rgba(90, 46, 201, 0.2)',
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#5A2EC9',
          borderWidth: 2
        },
        {
          label: 'APPLE MOBILE',
          data: [4, 6, 3, 28, 25, 3],
          borderColor: '#B22222',  // Dark Red
          backgroundColor: 'rgba(178, 34, 34, 0.15)',
          tension: 0.4,
          fill: false,
          pointBackgroundColor: '#B22222',
          borderWidth: 2
        },
        {
          label: 'ANDROID TV',
          data: [2, 3, 1, 9, 7, 1],
          borderColor: '#FFD700',  // Gold
          backgroundColor: 'rgba(255, 215, 0, 0.2)',
          tension: 0.4,
          fill: false,
          pointBackgroundColor: '#FFD700',
          borderWidth: 2
        },
        {
          label: 'APPLE TV',
          data: [3, 4, 2, 7, 6, 2],
          borderColor: '#008000',  // Green
          backgroundColor: 'rgba(0, 128, 0, 0.1)',
          tension: 0.4,
          fill: false,
          pointBackgroundColor: '#008000',
          borderWidth: 2
        },
        {
          label: 'ROKU TV',
          data: [5, 8, 3, 24, 19, 3],
          borderColor: '#9B30FF',  // Purple
          backgroundColor: 'rgba(155, 48, 255, 0.1)',
          tension: 0.4,
          fill: false,
          pointBackgroundColor: '#9B30FF',
          borderWidth: 2
        },
        {
          label: 'AMAZON FIRE TV',
          data: [6, 9, 4, 28, 22, 4],
          borderColor: '#FF2400',  // Bright Red
          backgroundColor: 'rgba(255, 36, 0, 0.1)',
          tension: 0.4,
          fill: false,
          pointBackgroundColor: '#FF2400',
          borderWidth: 2
        },
        {
          label: 'GOOGLE TV',
          data: [1, 2, 1, 5, 4, 1],
          borderColor: '#00BFFF',  // Sky Blue
          backgroundColor: 'rgba(0, 191, 255, 0.2)',
          tension: 0.4,
          fill: false,
          pointBackgroundColor: '#00BFFF',
          borderWidth: 2
        }
      ]
    };

    this.appLaunchesOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: '#495057',
            usePointStyle: true,
            boxWidth: 10
          }
        },
        title: {
          display: true,
          text: 'APP LAUNCHES',
          color: '#495057',
          font: {
            size: 16,
            weight: 'bold'
          }
        }
      },
      scales: {
        x: {
          ticks: { color: '#495057' },
          grid: { color: '#ebedef' }
        },
        y: {
          ticks: { color: '#495057' },
          grid: { color: '#ebedef' }
        }
      }
    };
  }

  items = ['Mobile & TV', 'TV', 'Mobile No'];
  activeItem: string | null = null;

  setActive(item: string) {
    this.activeItem = item;
  }
  cards = [
    { title: 'Users', value: 1245 },
    // { title: 'Orders', value: 231 },
    // { title: 'Performance', value: '87%' },
  ];
}
