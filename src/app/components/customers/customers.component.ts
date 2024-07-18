import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICustomer } from 'src/app/Interfaces/icustomer';
import { ITransaction } from 'src/app/Interfaces/itransaction';
import { CustomersService } from 'src/app/services/customers.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, OnDestroy{
  searchItem: string = '';
  amountItem: string = '';

  customers: ICustomer[] = [];
  transactions: ITransaction[] = [];

  customerTransactions: ITransaction[] = [];

  customerTransactionAmounts: { [key: string]: number } = {};

  arr: Subscription[] = [];

  constructor(private _CustomersService: CustomersService, private _TransactionService: TransactionService) { }

  ngOnInit(): void {
    this.arr.push(this._CustomersService.get().subscribe({
      next: (response) => {
        this.customers = response;
        this.getAmounts();
      },
      error: (err) => {
        console.log(err);
      }
    }));

    this.arr.push(this._TransactionService.get().subscribe({
      next: (response) => {
        this.transactions = response;
        this.getAmounts();
      },
      error: (err) => {
        console.log(err);
      }
    }));
  }

  getAmounts() {
    this.customerTransactionAmounts = this.customers.reduce(
      (acc, customer) => {
        const totalAmount = this.transactions.filter(transactions => transactions.customer_id === +customer.id).reduce(
          (sum, transaction) => sum + transaction.amount, 0);
        acc[customer.id] = totalAmount;
        return acc;
      }, {} as { [key: string]: number });
  }

  selectCustomer(customerId: string) {
    this.customerTransactions = this.transactions.filter(transaction => transaction.customer_id === +customerId);
  }

  ngOnDestroy(): void {
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i].unsubscribe();
    }
  }
}
