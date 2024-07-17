import { Pipe, PipeTransform } from '@angular/core';
import { ICustomer } from '../Interfaces/icustomer';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(customerList: ICustomer[] , searchTerm: string): ICustomer[] {
    return customerList.filter((customer) => customer.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
