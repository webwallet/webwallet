import { Controller, Get, Param, Post, Body } from '@nestjs/common'
import { TransactionService } from './service'
import { Classes } from '@webwallet/structures'

@Controller('/transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('/:hash')
  getTransaction(
    @Param('hash') hash: string
  ) {
    return this.transactionService.getTransaction({hash})
  }

  @Post()
  postTransaction(
    @Body() body: Classes.PostTransactionBody
  ) {
    return this.transactionService.postTransaction({body})
  }
}
