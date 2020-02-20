import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsException,
} from '@nestjs/websockets'
import { Server } from 'socket.io'
import { TransactionService } from '@/routes/transaction/service'
import { JoiValidationPipe } from '@/helpers/validation'
import { Transaction, joi } from '@webwallet/structures'
import { UsePipes } from '@nestjs/common'

@WebSocketGateway()
export class SocketsGateway {
  constructor(private readonly transactionService: TransactionService) {}

  @WebSocketServer()
  server!: Server

  @UsePipes(new JoiValidationPipe(Transaction.RequestBodySchema, validationHandler))
  @SubscribeMessage('POST /transaction')
  async identity(@MessageBody() body: any): Promise<any> {
    return this.transactionService.postTransaction({body})
  }
}

function validationHandler(validation: joi.ValidationResult) {
  let { error, value } = validation
  if (error) {
    let { name: type, message: info } = error
    throw new WsException({error: {type, info}})
  }
  return value
}
