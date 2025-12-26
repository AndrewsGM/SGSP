import { Module } from '@nestjs/common';
import { CustomerController } from './interfaces/customer.controller';
import { CreateCustomerUseCase } from './application/create-customer.usecase';

@Module({
  controllers: [CustomerController],
  providers: [CreateCustomerUseCase],
})
export class AppModule {}
