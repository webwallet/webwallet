import { Module } from '@nestjs/common';
import { SocketsGateway } from './gateway';
import { TransactionService } from '@routes/transaction/service'

@Module({
  providers: [SocketsGateway, TransactionService],
})
export class SocketsModule {}
