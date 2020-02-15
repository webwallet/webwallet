import { Injectable } from '@nestjs/common'
import { Classes } from '@webwallet/structures'

@Injectable()
export class TransactionService {
  getTransaction({ hash }: {hash: string}): string {
    return `GET /transaction/${hash}`
  }
  postTransaction({ body }: {body: Classes.PostTransactionBody}): string {
    return `POST /transaction ${body.data}`
  }
}
