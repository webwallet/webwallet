import { Controller, Get, Param } from '@nestjs/common'
import { TransactionService } from './service'
import { Request } from 'express'

@Controller('/transaction')
export class TransactionController {
  constructor(private readonly appService: TransactionService) {}

  @Get('/:hash')
  helloWorld(
    @Param('hash') hash: string
  ) {
    return this.appService.getTransaction({hash})
  }
}
