import { randomUUID } from 'crypto';
import { Customer } from '../domain/customer.entity';

export class CreateCustomerUseCase {
  execute(name: string, email: string): Customer {
    return new Customer(randomUUID(), name, email);
  }
}
