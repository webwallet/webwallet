import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'
import { Server } from 'socket.io'
import { TransactionService } from '@routes/transaction/service'

@WebSocketGateway()
export class SocketsGateway {
  constructor(private readonly transactionService: TransactionService) {}

  @WebSocketServer()
  server!: Server

  @SubscribeMessage('POST /transaction')
  async identity(@MessageBody() body: any): Promise<any> {
    return this.transactionService.postTransaction({body})
  }
}
