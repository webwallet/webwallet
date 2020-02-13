import { Injectable } from '@nestjs/common'

@Injectable()
export class TransactionService {
  getTransaction({ hash }: {hash: string}): string {
    return `GET /transaction/${hash}`
  }
}
