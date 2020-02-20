import { Controller, Get, Param, Post, Body, UsePipes } from '@nestjs/common'
import { TransactionService } from './service'
import { Transaction } from '@webwallet/structures'
import { JoiValidationPipe } from '@/helpers/validation'

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
  @UsePipes(new JoiValidationPipe(Transaction.RequestBodySchema))
  postTransaction(
    @Body() body: Transaction.RequestBodyClass
  ) {
    return this.transactionService.postTransaction({body})
  }
}
