import { Module } from '@nestjs/common'
import { TransactionModule } from './transaction/module'

let moduleParams = {
  imports: [TransactionModule],
}

@Module(moduleParams)
export class RoutesModule {}
