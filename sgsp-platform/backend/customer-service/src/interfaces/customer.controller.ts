import { Controller, Post, Body } from '@nestjs/common';
import { CreateCustomerUseCase } from '../application/create-customer.usecase';
import { CreateCustomerDto } from './dtos/create-customer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly createCustomerUseCase: CreateCustomerUseCase) {}

  @Post()
  create(@Body() body: CreateCustomerDto) {
    return this.createCustomerUseCase.execute(body.name, body.email);
  }
}
