import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { ITransaction } from 'src/app/Interfaces/itransaction';

@Component({
  selector: 'app-mycharts',
  templateUrl: './mycharts.component.html',
  styleUrls: ['./mycharts.component.css']
})
export class MychartsComponent {
  @Input() transactions: ITransaction[] = [];

  chart: Chart | null = null;

  constructor() { }

  ngOnChanges(): void {
    if (this.chart) {
      this.chart.destroy();
    }
    if (this.transactions.length > 0) {
      this.displayGraph();
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  displayGraph(): void {
    const labels = this.transactions.map(transaction => transaction.date);
    const data = this.transactions.map(transaction => transaction.amount);

    this.chart = new Chart('Transactions', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Transactions',
          data: data,
          fill: false,
          borderColor: "#000"
        }]
      }
    });
  }
}
