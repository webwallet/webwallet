import { Injectable } from '@nestjs/common'
import { Transaction } from '@webwallet/structures'

@Injectable()
export class TransactionService {
  getTransaction({ hash }: {hash: string}): string {
    return `GET /transaction/${hash}`
  }
  postTransaction({ body }: {body: Transaction.RequestBodyClass}): string {
    return `POST /transaction ${body.data}`
  }
}
