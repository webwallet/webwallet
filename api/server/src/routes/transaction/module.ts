import { Module } from '@nestjs/common'
import { TransactionController } from './controller'
import { TransactionService } from './service'

let moduleParams = {
  imports: [],
  controllers: [TransactionController],
  providers: [TransactionService],
}

@Module(moduleParams)
export class TransactionModule {}
